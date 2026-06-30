package com.careergpt.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReportResponse {

    private String summary;

    private List<String> topCareers;

    private List<String> whyCareers;

    private List<String> recommendedCourses;

    private List<String> skillsToDevelop;

    private List<String> exams;

    private List<String> colleges;

    private List<String> roadmap;

    private String immediateNextStep;

    private String encouragement;
}