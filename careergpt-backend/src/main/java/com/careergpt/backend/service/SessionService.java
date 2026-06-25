package com.careergpt.backend.service;

import com.careergpt.backend.dto.SessionResponse;
import com.careergpt.backend.model.Message;
import com.careergpt.backend.model.Session;
import com.careergpt.backend.model.Student;
import com.careergpt.backend.repository.MessageRepository;
import com.careergpt.backend.repository.SessionRepository;
import com.careergpt.backend.repository.StudentRepository;
import com.careergpt.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessionService {

    @Autowired
    private SessionRepository sessionRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public SessionResponse startSession(String token) {
        String email = jwtUtil.extractEmail(token);
        Student student = studentRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Session session = Session.builder()
                .student(student)
                .build();

        session = sessionRepository.save(session);

        return SessionResponse.builder()
                .id(session.getId())
                .studentId(student.getId())
                .startedAt(session.getStartedAt())
                .completed(session.isCompleted())
                .build();
    }

    public List<Message> getMessages(Long sessionId) {

        Session session = sessionRepository.findById(sessionId)
                .orElseThrow(() -> new RuntimeException("Session not found"));

        return messageRepository.findBySession(session);
    }
}
