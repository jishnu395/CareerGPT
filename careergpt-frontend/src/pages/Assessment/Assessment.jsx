import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Stack,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

import PrimaryButton from "../../components/common/PrimaryButton";
import { sendAnswer } from "../../services/aiService";

export default function Assessment() {
  const navigate = useNavigate();

  const sessionId = sessionStorage.getItem("sessionId");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Hello! Tell me about yourself.",
    },
  ]);

  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!answer.trim() || loading) return;

    const currentAnswer = answer;

    const userMessage = {
      role: "user",
      content: currentAnswer,
    };

    setMessages((prev) => [...prev, userMessage]);
    setAnswer("");
    setLoading(true);

    try {
      const res = await sendAnswer(sessionId, currentAnswer);

      const aiMessage = {
        role: "ai",
        content: res.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);

      if (res.completed) {
        navigate("/processing");
      }
    } catch (err) {
      console.error(err);
      setOpenSnackbar(true);
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
          ref={chatRef}
          spacing={2}
          sx={{
            height: "55vh",
            overflowY: "auto",
            mb: 3,
            pr: 1,
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
                borderRadius: 3,
              }}
            >
              <Typography whiteSpace="pre-wrap">
                {msg.content}
              </Typography>
            </Paper>
          ))}

          {loading && (
            <Paper
              sx={{
                p: 2,
                bgcolor: "#1E293B",
                color: "white",
                width: "fit-content",
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <CircularProgress size={18} color="inherit" />
                <Typography>CareerGPT is thinking...</Typography>
              </Stack>
            </Paper>
          )}
        </Stack>

        <TextField
          multiline
          rows={4}
          fullWidth
          placeholder="Type your answer..."
          value={answer}
          disabled={loading}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <Box mt={3}>
          <PrimaryButton
            onClick={handleSend}
            disabled={loading || !answer.trim()}
          >
            {loading ? (
              <CircularProgress size={22} color="inherit" />
            ) : (
              "Send"
            )}
          </PrimaryButton>
        </Box>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          severity="error"
          variant="filled"
          onClose={() => setOpenSnackbar(false)}
        >
          Failed to communicate with AI. Please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
}