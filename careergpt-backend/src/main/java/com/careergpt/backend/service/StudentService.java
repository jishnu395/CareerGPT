package com.careergpt.backend.service;

import com.careergpt.backend.dto.StudentRequest;
import com.careergpt.backend.dto.StudentResponse;
import com.careergpt.backend.model.Student;
import com.careergpt.backend.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentResponse createStudent(StudentRequest request) {

        if (studentRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists.");
        }

        Student student = Student.builder()
                .name(request.getName())
                .email(request.getEmail())
                .age(request.getAge())
                .grade(request.getGrade())
                .build();

        Student savedStudent = studentRepository.save(student);

        return StudentResponse.builder()
                .id(savedStudent.getId())
                .name(savedStudent.getName())
                .email(savedStudent.getEmail())
                .age(savedStudent.getAge())
                .grade(savedStudent.getGrade())
                .createdAt(savedStudent.getCreatedAt())
                .build();
    }

    public StudentResponse getStudent(Long studentId) {

        Student student = studentRepository.findById(studentId)
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