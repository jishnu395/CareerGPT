// src/pages/Processing/Processing.jsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  CircularProgress,
  Typography,
  Paper,
} from "@mui/material";

import { getReport } from "../../services/reportService";

export default function Processing() {
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = sessionStorage.getItem("sessionId");

    if (!sessionId) {
      alert("Session not found.");
      navigate("/student");
      return;
    }

    const interval = setInterval(async () => {
      try {
        const report = await getReport(sessionId);

        if (report) {
          sessionStorage.setItem(
            "careerReport",
            JSON.stringify(report)
          );

          clearInterval(interval);
          navigate("/report");
        }
      } catch (err) {
        // Report not ready yet. Keep polling.
        console.log("Waiting for report...");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#050816",
        p: 3,
      }}
    >
      <Paper
        sx={{
          p: 6,
          borderRadius: 4,
          textAlign: "center",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.08)",
          maxWidth: 500,
          width: "100%",
        }}
      >
        <CircularProgress size={70} />

        <Typography variant="h4" mt={4} fontWeight={700}>
          Generating Your Career Report...
        </Typography>

        <Typography mt={2} color="gray">
          Our AI is analyzing your responses and preparing personalized career
          recommendations.
        </Typography>

        <Typography mt={1} color="gray">
          Please wait a few moments...
        </Typography>
      </Paper>
    </Box>
  );
}