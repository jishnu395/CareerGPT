// src/pages/Assessment/Assessment.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";

import PrimaryButton from "../../components/common/PrimaryButton";
import { sendAnswer } from "../../services/aiService";

export default function Assessment() {
  const navigate = useNavigate();

  const sessionId = localStorage.getItem("sessionId");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Hello! Tell me about yourself.",
    },
  ]);

  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!answer.trim()) return;

    const userMessage = {
      role: "user",
      content: answer,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await sendAnswer(sessionId, answer);

      const aiMessage = {
        role: "ai",
        content: res.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);

      setAnswer("");

      if (res.completed) {
        navigate("/processing");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to communicate with AI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#050816",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: 900,
          p: 4,
          borderRadius: 4,
          background: "rgba(255,255,255,.05)",
          backdropFilter: "blur(18px)",
        }}
      >
        <Typography variant="h4" mb={3}>
          CareerGPT Assessment
        </Typography>

        <Stack
          spacing={2}
          sx={{
            height: "55vh",
            overflowY: "auto",
            mb: 3,
          }}
        >
          {messages.map((msg, index) => (
            <Paper
              key={index}
              sx={{
                p: 2,
                maxWidth: "80%",
                alignSelf:
                  msg.role === "user"
                    ? "flex-end"
                    : "flex-start",
                bgcolor:
                  msg.role === "user"
                    ? "#1976d2"
                    : "#1E293B",
                color: "#fff",
              }}
            >
              <Typography>{msg.content}</Typography>
            </Paper>
          ))}
        </Stack>

        <TextField
          multiline
          rows={4}
          fullWidth
          placeholder="Type your answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <Box mt={3}>
          <PrimaryButton onClick={handleSend} disabled={loading}>
            {loading ? (
              <CircularProgress size={22} color="inherit" />
            ) : (
              "Send"
            )}
          </PrimaryButton>
        </Box>
      </Paper>
    </Box>
  );
}