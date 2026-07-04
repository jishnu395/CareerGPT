import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Chip,
} from "@mui/material";

import PrimaryButton from "../common/PrimaryButton";
import { useNavigate } from "react-router-dom";

const careers = [
  { title: "Backend Developer", score: 95 },
  { title: "AI Engineer", score: 87 },
  { title: "ML Engineer", score: 80 },
];

const skills = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "Docker",
  "AI",
  "Git",
];

export default function BlueprintPreview() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: 1300,
        mx: "auto",
        px: 3,
        py: 14,
      }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
      >
        Your Career Blueprint
      </Typography>

      <Typography
        align="center"
        sx={{
          color: "#94A3B8",
          mb: 8,
        }}
      >
        This is an example of the personalized report generated
        after your AI assessment.
      </Typography>

      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          p: 5,
          borderRadius: "28px",
          background: "rgba(255,255,255,.05)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <Stack spacing={4}>
          {careers.map((career) => (
            <Box key={career.title}>
              <Stack
                direction="row"
                justifyContent="space-between"
                mb={1}
              >
                <Typography variant="h6">
                  {career.title}
                </Typography>

                <Typography
                  color="#6D5EF5"
                  fontWeight={700}
                >
                  {career.score}%
                </Typography>
              </Stack>

              <LinearProgress
                variant="determinate"
                value={career.score}
                sx={{
                  height: 12,
                  borderRadius: 10,
                }}
              />
            </Box>
          ))}

          <Typography variant="h5">
            Recommended Skills
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
          >
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  bgcolor: "rgba(255,255,255,.06)",
                  color: "white",
                }}
              />
            ))}
          </Stack>

          <Box
            sx={{
              p: 3,
              borderRadius: "20px",
              bgcolor: "rgba(109,94,245,.12)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Immediate Next Step
            </Typography>

            <Typography color="#CBD5E1">
              Master Data Structures & Algorithms and build one
              production-grade Spring Boot project.
            </Typography>
          </Box>

          <PrimaryButton
            onClick={() => navigate("/student")}
          >
            Generate My Career Blueprint
          </PrimaryButton>
        </Stack>
      </Box>
    </Box>
  );
}