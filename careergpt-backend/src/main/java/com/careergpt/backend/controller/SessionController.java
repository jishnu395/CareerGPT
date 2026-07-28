package com.careergpt.backend.controller;

import com.careergpt.backend.dto.SessionResponse;
import com.careergpt.backend.model.Message;
import com.careergpt.backend.service.SessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/session")
@RequiredArgsConstructor
public class SessionController {

    private final SessionService sessionService;

    @PostMapping("/start/{studentId}")
    public ResponseEntity<SessionResponse> startSession(
            @PathVariable Long studentId) {

        return ResponseEntity.ok(sessionService.startSession(studentId));
    }

    @GetMapping("/{sessionId}/messages")
    public ResponseEntity<List<Message>> getMessages(
            @PathVariable Long sessionId) {

        return ResponseEntity.ok(sessionService.getMessages(sessionId));
    }
}