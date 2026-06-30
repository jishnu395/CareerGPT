package com.careergpt.backend.controller;

import com.careergpt.backend.dto.ReportResponse;
import com.careergpt.backend.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/report")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @GetMapping("/{sessionId}")
    public ResponseEntity<ReportResponse> getReport(@PathVariable Long sessionId) {
        return ResponseEntity.ok(reportService.getReport(sessionId));
    }
}