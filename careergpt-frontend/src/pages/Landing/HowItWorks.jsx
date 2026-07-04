import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

import {
  UserRound,
  MessageCircleMore,
  BrainCircuit,
  FileBarChart,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    icon: UserRound,
    title: "Create Your Profile",
    desc: "Tell CareerGPT about your education, interests and aspirations."
  },
  {
    icon: MessageCircleMore,
    title: "Adaptive AI Interview",
    desc: "Answer 10 intelligent questions that evolve based on your responses."
  },
  {
    icon: BrainCircuit,
    title: "AI Career Intelligence",
    desc: "Our AI analyzes strengths, goals, skills and career preferences."
  },
  {
    icon: FileBarChart,
    title: "Career Blueprint",
    desc: "Receive a personalized roadmap, career matches and learning recommendations."
  },
];

export default function HowItWorks() {
  return (
    <Box
      sx={{
        maxWidth: 1300,
        mx: "auto",
        py: 14,
        px: 3,
      }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
      >
        How CareerGPT Works
      </Typography>

      <Typography
        align="center"
        sx={{
          color: "#94A3B8",
          mb: 8,
          maxWidth: 700,
          mx: "auto",
        }}
      >
        A simple AI-powered journey that transforms your interests,
        strengths and ambitions into a personalized career blueprint.
      </Typography>

      <Grid container spacing={4}>
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "24px",
                    textAlign: "center",

                    background:
                      "rgba(255,255,255,.05)",

                    border:
                      "1px solid rgba(255,255,255,.08)",

                    backdropFilter: "blur(18px)",

                    transition: ".3s",

                    "&:hover": {
                      borderColor: "#6D5EF5",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 3,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg,#6D5EF5,#4F8CFF)",
                    }}
                  >
                    <Icon
                      color="white"
                      size={36}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    gutterBottom
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    color="#94A3B8"
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}