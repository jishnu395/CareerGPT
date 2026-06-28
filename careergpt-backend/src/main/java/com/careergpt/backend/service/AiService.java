package com.careergpt.backend.service;

import com.careergpt.backend.model.Message;
import com.careergpt.backend.model.Session;
import com.careergpt.backend.repository.MessageRepository;
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
    private RestTemplate restTemplate;

    public String processAnswer(Long sessionId, String userMessage) {

        Session session = sessionRepository.findById(sessionId)
                .orElseThrow(() -> new RuntimeException("Session not found"));

        Message user = Message.builder()
                .session(session)
                .role("user")
                .content(userMessage)
                .build();

        messageRepository.save(user);

        // Fetch conversation
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

        Map<String, Object> request = new HashMap<>();
        request.put("messages", conversation);
        request.put("questionCount", questionCount);

        Map<String, String> response =
                restTemplate.postForObject(
                        "http://localhost:8000/chat",
                        request,
                        Map.class
                );

        if (response == null || !response.containsKey("reply")) {
            throw new RuntimeException("AI service did not return a valid response.");
        }

        String aiReply = response.get("reply");

        // Save AI response
        Message ai = Message.builder()
                .session(session)
                .role("ai")
                .content(aiReply)
                .build();

        messageRepository.save(ai);

        return aiReply;
    }
}