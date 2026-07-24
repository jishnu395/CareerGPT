package com.careergpt.backend.controller;

import com.careergpt.backend.dto.MessageRequest;
import com.careergpt.backend.service.AiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
public class AiController {

    @Autowired
    private AiService aiService;

    @PostMapping("/answer")
    public ResponseEntity<Map<String, Object>> answer(@RequestBody MessageRequest request) {

        String aiReply = aiService.processAnswer(
                request.getSessionId(),
                request.getContent()
        );

        boolean completed = aiReply.trim().startsWith("{")
                || aiReply.trim().startsWith("```json");

        return ResponseEntity.ok(
                Map.of(
                        "reply", aiReply,
                        "completed", completed
                )
        );
    }
}