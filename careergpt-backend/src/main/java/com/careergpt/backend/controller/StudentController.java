package com.careergpt.backend.controller;

import com.careergpt.backend.dto.StudentRequest;
import com.careergpt.backend.dto.StudentResponse;
import com.careergpt.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @GetMapping("/{studentId}")
    public ResponseEntity<StudentResponse> getStudent(
            @PathVariable Long studentId) {

        StudentResponse response = studentService.getStudent(studentId);

        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<StudentResponse> createStudent(
            @RequestBody StudentRequest request) {

        StudentResponse response = studentService.createStudent(request);

        return ResponseEntity.ok(response);
    }
}