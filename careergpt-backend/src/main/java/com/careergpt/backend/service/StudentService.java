package com.careergpt.backend.service;

import com.careergpt.backend.dto.StudentResponse;
import com.careergpt.backend.model.Student;
import com.careergpt.backend.repository.StudentRepository;
import com.careergpt.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public StudentResponse getProfile(String token) {

        String email = jwtUtil.extractEmail(token);

        Student student = studentRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        return StudentResponse.builder()
                .id(student.getId())
                .name(student.getName())
                .email(student.getEmail())
                .age(student.getAge())
                .grade(student.getGrade())
                .createdAt(student.getCreatedAt())
                .build();
    }
}