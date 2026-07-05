import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Stack,
  CircularProgress,
} from "@mui/material";

import PrimaryButton from "../../components/common/PrimaryButton";
import { register, login } from "../../services/authService";
import { startSession } from "../../services/sessionService";

export default function StudentDetails() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    grade: "",
  });

  const grades = [
    "1st Year BE",
    "2nd Year BE",
    "3rd Year BE",
    "4th Year BE",
    "Graduate",
    "Working Professional",
  ];

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Register
      await register(student);

      // Login
      await login({
        email: student.email,
        password: student.password,
      });

      // Start Session
      await startSession();

      navigate("/assessment");
    } catch (err) {
      console.error(err);

      alert(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        background:
          "linear-gradient(180deg,#050816,#0B1120)",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: 550,
          p: 5,
          borderRadius: "28px",

          background: "rgba(255,255,255,.05)",

          backdropFilter: "blur(18px)",

          border: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
        >
          Let's Get Started 👋
        </Typography>

        <Typography
          color="#94A3B8"
          mb={4}
        >
          Tell CareerGPT a little about yourself before beginning the AI
          assessment.
        </Typography>

        <Stack spacing={3}>
          <TextField
            label="Full Name"
            name="name"
            value={student.name}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            value={student.email}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={student.password}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Age"
            name="age"
            type="number"
            value={student.age}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            select
            label="Current Education"
            name="grade"
            value={student.grade}
            onChange={handleChange}
            fullWidth
          >
            {grades.map((grade) => (
              <MenuItem
                key={grade}
                value={grade}
              >
                {grade}
              </MenuItem>
            ))}
          </TextField>

          <PrimaryButton onClick={handleSubmit}>
            {loading ? (
              <CircularProgress
                size={24}
                color="inherit"
              />
            ) : (
              "Continue to AI Assessment"
            )}
          </PrimaryButton>
        </Stack>
      </Paper>
    </Box>
  );
}