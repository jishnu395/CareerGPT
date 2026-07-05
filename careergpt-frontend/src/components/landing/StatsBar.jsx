import { Box, Grid, Typography } from "@mui/material";
import { BrainCircuit, Target, BriefcaseBusiness, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: BrainCircuit,
    value: "10+",
    title: "Adaptive AI Questions",
  },
  {
    icon: Target,
    value: "95%",
    title: "Personalized Career Match",
  },
  {
    icon: BriefcaseBusiness,
    value: "25+",
    title: "Career Recommendations",
  },
  {
    icon: Clock3,
    value: "5 Min",
    title: "Assessment Time",
  },
];

export default function StatsBar() {
  return (
    <Box
      sx={{
        maxWidth: 1300,
        mx: "auto",
        px: 3,
        pb: 12,
      }}
    >
      <Grid container spacing={3}>
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{
                  y: -8,
                }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "24px",

                    background:
                      "rgba(255,255,255,.05)",

                    backdropFilter: "blur(20px)",

                    border:
                      "1px solid rgba(255,255,255,.08)",

                    textAlign: "center",

                    transition: ".35s",

                    "&:hover": {
                      borderColor: "#6D5EF5",
                    },
                  }}
                >
                  <Icon
                    size={42}
                    color="#6D5EF5"
                  />

                  <Typography
                    variant="h3"
                    sx={{
                      mt: 2,
                      mb: 1,
                    }}
                  >
                    {item.value}
                  </Typography>

                  <Typography color="#94A3B8">
                    {item.title}
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