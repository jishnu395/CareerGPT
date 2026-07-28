package com.careergpt.backend.service;

import com.careergpt.backend.dto.SessionResponse;
import com.careergpt.backend.model.Message;
import com.careergpt.backend.model.Session;
import com.careergpt.backend.model.Student;
import com.careergpt.backend.repository.MessageRepository;
import com.careergpt.backend.repository.SessionRepository;
import com.careergpt.backend.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SessionService {

    private final SessionRepository sessionRepository;
    private final StudentRepository studentRepository;
    private final MessageRepository messageRepository;

    public SessionResponse startSession(Long studentId) {

        Student student = studentRepository.findById(studentId)
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