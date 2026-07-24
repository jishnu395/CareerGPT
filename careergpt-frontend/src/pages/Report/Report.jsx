// src/pages/Report/Report.jsx

import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";

import PrimaryButton from "../../components/common/PrimaryButton";

export default function Report() {
  const navigate = useNavigate();

  const report = JSON.parse(
    sessionStorage.getItem("careerReport") || "{}"
  );

  const handlePrint = () => {
    window.print();
  };

  const handleRestart = () => {
    localStorage.removeItem("sessionId");
    sessionStorage.removeItem("careerReport");
    navigate("/");
  };

  if (!report.summary) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "#050816",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h4">
          No Career Report Available
        </Typography>

        <Typography color="gray">
          Complete an assessment to generate your personalized
          report.
        </Typography>

        <PrimaryButton onClick={() => navigate("/")}>
          Go Home
        </PrimaryButton>
      </Box>
    );
  }

  const renderList = (title, items = []) => (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        background: "rgba(255,255,255,.05)",
        backdropFilter: "blur(18px)",
        height: "100%",
      }}
    >
      <Typography variant="h6" mb={2}>
        {title}
      </Typography>

      <List dense>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        p: 4,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
        mb={4}
      >
        <Typography variant="h3">
          Your Career Report
        </Typography>

        <Stack direction="row" spacing={2}>
          <PrimaryButton onClick={handlePrint}>
            Download Report
          </PrimaryButton>

          <PrimaryButton
            onClick={handleRestart}
            sx={{
              bgcolor: "transparent",
              border: "1px solid rgba(255,255,255,.15)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,.08)",
              },
            }}
          >
            Take Assessment Again
          </PrimaryButton>
        </Stack>
      </Stack>

      <Paper
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
          background: "rgba(255,255,255,.05)",
          backdropFilter: "blur(18px)",
        }}
      >
        <Typography variant="h5" mb={2}>
          Summary
        </Typography>

        <Typography lineHeight={1.8}>
          {report.summary}
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {renderList("Top Careers", report.topCareers)}
        </Grid>

        <Grid item xs={12} md={6}>
          {renderList("Why These Careers", report.whyCareers)}
        </Grid>

        <Grid item xs={12} md={6}>
          {renderList(
            "Recommended Courses",
            report.recommendedCourses
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          {renderList(
            "Skills To Develop",
            report.skillsToDevelop
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          {renderList("Recommended Exams", report.exams)}
        </Grid>

        <Grid item xs={12} md={6}>
          {renderList(
            "Suggested Colleges",
            report.colleges
          )}
        </Grid>

        <Grid item xs={12}>
          {renderList("Roadmap", report.roadmap)}
        </Grid>
      </Grid>

      <Paper
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 3,
          background: "rgba(255,255,255,.05)",
          backdropFilter: "blur(18px)",
        }}
      >
        <Typography variant="h5" mb={2}>
          Immediate Next Step
        </Typography>

        <Typography mb={3} lineHeight={1.8}>
          {report.immediateNextStep}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" mb={2}>
          Encouragement
        </Typography>

        <Typography lineHeight={1.8}>
          {report.encouragement}
        </Typography>
      </Paper>
    </Box>
  );
}