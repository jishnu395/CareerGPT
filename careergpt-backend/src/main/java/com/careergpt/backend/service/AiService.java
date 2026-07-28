package com.careergpt.backend.service;

import com.careergpt.backend.model.Message;
import com.careergpt.backend.model.Report;
import com.careergpt.backend.model.Session;
import com.careergpt.backend.repository.MessageRepository;
import com.careergpt.backend.repository.ReportRepository;
import com.careergpt.backend.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class AiService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private SessionRepository sessionRepository;

    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${AI_SERVICE_URL}")
    private String aiServiceUrl;

    public String processAnswer(Long sessionId, String userMessage) {

        Session session = sessionRepository.findById(sessionId)
                .orElseThrow(() -> new RuntimeException("Session not found."));

        // Save user's answer
        Message user = Message.builder()
                .session(session)
                .role("user")
                .content(userMessage)
                .build();

        messageRepository.save(user);

        // Retrieve conversation history
        List<Message> messages = messageRepository.findBySession(session);

        List<Map<String, String>> conversation = new ArrayList<>();
        int questionCount = 0;

        for (Message message : messages) {

            Map<String, String> map = new HashMap<>();
            map.put("role", message.getRole());
            map.put("content", message.getContent());

            conversation.add(map);

            if ("user".equalsIgnoreCase(message.getRole())) {
                questionCount++;
            }
        }

        // Build AI request
        Map<String, Object> request = new HashMap<>();
        request.put("messages", conversation);
        request.put("questionCount", questionCount);

        Map<String, String> response;

        try {

            response = restTemplate.postForObject(
                    aiServiceUrl + "/chat",
                    request,
                    Map.class
            );

        } catch (HttpStatusCodeException ex) {

            String body = ex.getResponseBodyAsString();

            if (body != null &&
                    (body.toLowerCase().contains("quota")
                            || body.contains("429")
                            || body.toLowerCase().contains("resourceexhausted"))) {

                throw new RuntimeException(
                        "Gemini API quota exceeded. Please try again later."
                );
            }

            throw new RuntimeException(
                    "AI service returned HTTP "
                            + ex.getStatusCode().value()
                            + ": "
                            + body
            );

        } catch (Exception ex) {

            throw new RuntimeException(
                    "Unable to connect to AI service: " + ex.getMessage()
            );
        }

        if (response == null) {
            throw new RuntimeException("AI service returned no response.");
        }

        if (response.containsKey("error")) {
            throw new RuntimeException(response.get("error"));
        }

        if (!response.containsKey("reply")) {
            throw new RuntimeException("AI service returned an invalid response.");
        }

        String aiReply = response.get("reply");

        // Save AI response
        Message ai = Message.builder()
                .session(session)
                .role("ai")
                .content(aiReply)
                .build();

        messageRepository.save(ai);

        // Remove markdown if Gemini returns it
        String cleanedReply = aiReply.trim();

        if (cleanedReply.startsWith("```json")) {
            cleanedReply = cleanedReply.substring(7);
        }

        if (cleanedReply.startsWith("```")) {
            cleanedReply = cleanedReply.substring(3);
        }

        if (cleanedReply.endsWith("```")) {
            cleanedReply = cleanedReply.substring(0, cleanedReply.length() - 3);
        }

        cleanedReply = cleanedReply.trim();

        // Save report when JSON is returned
        if (cleanedReply.startsWith("{")) {

            Optional<Report> existingReport =
                    reportRepository.findBySession(session);

            if (existingReport.isPresent()) {

                Report report = existingReport.get();
                report.setReportJson(cleanedReply);
                reportRepository.save(report);

            } else {

                Report report = Report.builder()
                        .session(session)
                        .reportJson(cleanedReply)
                        .build();

                reportRepository.save(report);
            }
        }

        return aiReply;
    }
}