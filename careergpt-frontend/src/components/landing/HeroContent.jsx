import { Box, Chip, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";

export default function HeroContent() {
  const navigate = useNavigate();

  const chips = [
    "AI Powered",
    "Career Intelligence",
    "Spring Boot",
    "Java",
    "Roadmap",
  ];

  const sampleReport = {
    summary:
      "You demonstrate strong analytical thinking, curiosity, and problem-solving skills. Based on your responses, AI Engineering, Full Stack Development, and Cloud Computing align well with your interests and aptitude.",
    topCareers: [
      "AI Engineer",
      "Full Stack Developer",
      "Cloud Engineer",
    ],
    whyCareers: [
      "Excellent logical reasoning",
      "Strong interest in technology",
      "Good programming aptitude",
    ],
    recommendedCourses: [
      "Data Structures & Algorithms",
      "Spring Boot",
      "React",
      "Machine Learning",
      "Cloud Computing",
    ],
    skillsToDevelop: [
      "Problem Solving",
      "System Design",
      "Backend Development",
      "Communication",
    ],
    exams: [
      "GATE CSE",
      "AWS Cloud Practitioner",
      "Oracle Java Certification",
    ],
    colleges: [
      "IIT Madras",
      "IISc Bangalore",
      "IIIT Hyderabad",
    ],
    roadmap: [
      "Master DSA",
      "Build Full Stack Projects",
      "Learn AI & Machine Learning",
      "Contribute to Open Source",
      "Apply for Internships",
    ],
    immediateNextStep:
      "Complete one production-level full stack project and practice DSA consistently.",
    encouragement:
      "Stay consistent. Your curiosity and persistence can help you build an excellent career in technology.",
  };

  const handleSampleReport = () => {
    sessionStorage.setItem(
      "careerReport",
      JSON.stringify(sampleReport)
    );

    navigate("/report");
  };

  return (
    <Stack spacing={4}>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Chip
          label="AI Career Intelligence Platform"
          sx={{
            bgcolor: "rgba(109,94,245,.15)",
            color: "#9F7AEA",
            fontWeight: 600,
            mb: 3,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          Find the Career
          <br />
          You're Meant For
        </Typography>
      </motion.div>

      <Typography
        sx={{
          color: "#94A3B8",
          fontSize: "1.15rem",
          lineHeight: 1.8,
          maxWidth: 620,
        }}
      >
        CareerGPT conducts adaptive AI conversations to understand
        your interests, strengths and goals before generating a
        personalized career blueprint with career matches,
        skill-gap analysis, roadmap and learning recommendations.
      </Typography>

      <Stack direction="row" spacing={2}>
        <PrimaryButton onClick={() => navigate("/student")}>
          Start Assessment
        </PrimaryButton>

        <PrimaryButton
          onClick={handleSampleReport}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255,255,255,.15)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,.08)",
            },
          }}
        >
          View Sample Report
        </PrimaryButton>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        useFlexGap
      >
        {chips.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            sx={{
              bgcolor: "rgba(255,255,255,.05)",
              color: "white",
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
}