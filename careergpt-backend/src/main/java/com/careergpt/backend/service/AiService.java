package com.careergpt.backend.service;

import com.careergpt.backend.model.Message;
import com.careergpt.backend.model.Report;
import com.careergpt.backend.model.Session;
import com.careergpt.backend.repository.MessageRepository;
import com.careergpt.backend.repository.ReportRepository;
import com.careergpt.backend.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

    public String processAnswer(Long sessionId, String userMessage) {

        Session session = sessionRepository.findById(sessionId)
                .orElseThrow(() -> new RuntimeException("Session not found"));

        // Save student's message
        Message user = Message.builder()
                .session(session)
                .role("user")
                .content(userMessage)
                .build();

        messageRepository.save(user);

        // Fetch conversation history
        List<Message> messages = messageRepository.findBySession(session);

        List<Map<String, String>> conversation = new ArrayList<>();
        int questionCount = 0;

        for (Message message : messages) {

            Map<String, String> map = new HashMap<>();
            map.put("role", message.getRole());
            map.put("content", message.getContent());

            conversation.add(map);

            if ("user".equals(message.getRole())) {
                questionCount++;
            }
        }

        // Build request for Python service
        Map<String, Object> request = new HashMap<>();
        request.put("messages", conversation);
        request.put("questionCount", questionCount);

        // Call Python AI service
        Map<String, String> response;
        try {
            response = restTemplate.postForObject(
                    "http://localhost:8000/chat",
                    request,
                    Map.class
            );
        } catch (Exception e) {
            throw new RuntimeException("AI service call failed: " + e.getMessage());
        }

        if (response == null || !response.containsKey("reply")) {
            throw new RuntimeException("AI service did not return a valid response.");
        }

        String aiReply = response.get("reply");

        // Save AI message
        Message ai = Message.builder()
                .session(session)
                .role("ai")
                .content(aiReply)
                .build();

        messageRepository.save(ai);

        // Save report if AI returned JSON
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

        if (cleanedReply.startsWith("{")) {
            Report report = Report.builder()
                    .session(session)
                    .reportJson(cleanedReply)
                    .build();
            reportRepository.save(report);
        }

        return aiReply;
    }
}