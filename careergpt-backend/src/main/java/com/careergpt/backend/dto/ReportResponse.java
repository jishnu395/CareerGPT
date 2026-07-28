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

    private CandidateSnapshot candidateSnapshot;

    private List<Career> topCareers;

    private Skills skills;

    private List<Course> recommendedCourses;

    private List<String> recommendedExams;

    private List<String> recommendedColleges;

    private CareerRoadmap careerRoadmap;

    private String immediateNextStep;

    private String finalThoughts;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CandidateSnapshot {
        private String education;
        private String careerInterest;
        private String experienceLevel;
        private String preferredWorkStyle;
        private String learningStyle;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Career {
        private String title;
        private String reason;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Skills {
        private List<String> technical;
        private List<String> professional;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Course {
        private String course;
        private String provider;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CareerRoadmap {
        private List<String> immediate;
        private List<String> threeMonths;
        private List<String> sixToTwelveMonths;
    }
}