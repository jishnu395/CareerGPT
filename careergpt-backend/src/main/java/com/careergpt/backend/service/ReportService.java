package com.careergpt.backend.service;

import com.careergpt.backend.dto.ReportResponse;
import com.careergpt.backend.model.Report;
import com.careergpt.backend.model.Session;
import com.careergpt.backend.repository.ReportRepository;
import com.careergpt.backend.repository.SessionRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {

    @Autowired
    private SessionRepository sessionRepository;

    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private ObjectMapper objectMapper;

    public ReportResponse getReport(Long sessionId) {

        Session session = sessionRepository.findById(sessionId)
                .orElseThrow(() -> new RuntimeException("Session not found"));

        Report report = reportRepository.findBySession(session)
                .orElseThrow(() -> new RuntimeException("Report not ready yet"));

        try {
            return objectMapper.readValue(
                    report.getReportJson(),
                    ReportResponse.class
            );
        } catch (JsonProcessingException e) { throw new RuntimeException("Failed to parse report");
        }
    }
}