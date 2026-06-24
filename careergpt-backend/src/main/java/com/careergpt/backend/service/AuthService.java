package com.careergpt.backend.service;

import com.careergpt.backend.dto.AuthResponse;
import com.careergpt.backend.dto.LoginRequest;
import com.careergpt.backend.dto.RegisterRequest;
import com.careergpt.backend.model.Student;
import com.careergpt.backend.repository.StudentRepository;
import com.careergpt.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public AuthResponse register(RegisterRequest request) {
        Student student = Student.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .age(request.getAge())
                .grade(request.getGrade())
                .build();

        studentRepository.save(student);

        String token = jwtUtil.generateToken(request.getEmail());

        return AuthResponse.builder()
                .token(token)
                .build();
    }

    public AuthResponse login(LoginRequest request) {

        Student student = studentRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                student.getPassword())) {

            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(student.getEmail());

        return AuthResponse.builder()
                .token(token)
                .build();
    }
}

