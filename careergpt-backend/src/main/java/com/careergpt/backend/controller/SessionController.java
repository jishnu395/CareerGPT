package com.careergpt.backend.controller;

import com.careergpt.backend.dto.SessionResponse;
import com.careergpt.backend.model.Message;
import com.careergpt.backend.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/session")
public class SessionController {

    @Autowired
    private SessionService sessionService;

    @PostMapping("/start")
    public ResponseEntity<SessionResponse> startSession(
            @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        return ResponseEntity.ok(sessionService.startSession(token));
    }

    @GetMapping("/{sessionId}/messages")
    public ResponseEntity<List<Message>> getMessages(@PathVariable Long sessionId) {
        return ResponseEntity.ok(sessionService.getMessages(sessionId));
    }
}
