package com.careergpt.backend.controller;

import com.careergpt.backend.dto.StudentResponse;
import com.careergpt.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/profile")
    public ResponseEntity<StudentResponse> getProfile(
            @RequestHeader("Authorization") String authHeader) {

        String token = authHeader.substring(7);

        StudentResponse response = studentService.getProfile(token);

        return ResponseEntity.ok(response);
    }
}