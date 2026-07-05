import {
  Box,
  Typography,
} from "@mui/material";

import {
  BrainCircuit,
  GraduationCap,
  Target,
  Route,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const cards = [
  {
    title: "AI Career Match",
    description:
      "Our adaptive AI identifies the careers that best match your skills, interests and ambitions.",
    icon: BrainCircuit,
    gradient: "#6D5EF5",
    cols: "span 1",
  },
  {
    title: "Personalized Career Blueprint",
    description:
      "Receive a complete roadmap with careers, skills, colleges, certifications and actionable next steps.",
    icon: Sparkles,
    gradient: "#4F8CFF",
    cols: "span 2",
  },
  {
    title: "Skill Gap Analysis",
    description:
      "Discover exactly which technical and soft skills you need to develop.",
    icon: Target,
    gradient: "#00C2FF",
    cols: "span 2",
  },
  {
    title: "Learning Roadmap",
    description:
      "A structured journey from your current skill level to your dream career.",
    icon: Route,
    gradient: "#22C55E",
    cols: "span 1",
  },
  {
    title: "College & Course Recommendations",
    description:
      "Get personalized recommendations for courses, certifications and higher studies.",
    icon: GraduationCap,
    gradient: "#F59E0B",
    cols: "span 3",
  },
];

export default function BentoGrid() {
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
        Everything You Need
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
        CareerGPT combines AI, career intelligence and personalized
        guidance into one seamless platform.
      </Typography>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3,1fr)",
          },

          gap: 3,
        }}
      >
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <motion.div
              whileHover={{
                y: -10,
              }}
              key={card.title}
            >
              <Box
                sx={{
                  gridColumn: {
                    md: card.cols,
                  },

                  height: "100%",

                  p: 4,

                  borderRadius: "30px",

                  background:
                    "rgba(255,255,255,.05)",

                  border:
                    "1px solid rgba(255,255,255,.08)",

                  backdropFilter: "blur(18px)",

                  transition: ".35s",

                  "&:hover": {
                    borderColor: card.gradient,
                    boxShadow: `0 20px 40px ${card.gradient}20`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 70,

                    height: 70,

                    borderRadius: "18px",

                    display: "flex",

                    justifyContent: "center",

                    alignItems: "center",

                    mb: 3,

                    background: card.gradient,
                  }}
                >
                  <Icon
                    color="white"
                    size={34}
                  />
                </Box>

                <Typography
                  variant="h4"
                  gutterBottom
                >
                  {card.title}
                </Typography>

                <Typography
                  color="#94A3B8"
                >
                  {card.description}
                </Typography>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
}