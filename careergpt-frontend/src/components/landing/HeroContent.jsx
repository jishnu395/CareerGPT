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
            mb: 3
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            lineHeight: 1.05
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
          maxWidth: 620
        }}
      >
        CareerGPT conducts adaptive AI conversations to understand
        your interests, strengths and goals before generating
        a personalized career blueprint with career matches,
        skill-gap analysis, roadmap and learning recommendations.
      </Typography>

      <Stack direction="row" spacing={2}>

        <PrimaryButton
          onClick={() => navigate("/student")}
        >
          Start Assessment
        </PrimaryButton>

        <PrimaryButton
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255,255,255,.15)"
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
              color: "white"
            }}
          />
        ))}
      </Stack>

    </Stack>
  );
}