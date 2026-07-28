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
  Chip,
} from "@mui/material";

import PrimaryButton from "../../components/common/PrimaryButton";

export default function Report() {
  const navigate = useNavigate();

  const report = JSON.parse(
    sessionStorage.getItem("careerReport") || "{}"
  );

  const snapshot = report.candidateSnapshot || {};

  const handlePrint = () => {
    window.print();
  };

  const handleRestart = () => {
    sessionStorage.removeItem("studentId");
    sessionStorage.removeItem("sessionId");
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

        <PrimaryButton onClick={() => navigate("/")}>
          Go Home
        </PrimaryButton>
      </Box>
    );
  }

  const cardStyle = {
    p: 3,
    borderRadius: 3,
    background: "rgba(255,255,255,.05)",
    backdropFilter: "blur(18px)",
    height: "100%",
  };

  const renderList = (title, items = []) => (
    <Paper sx={cardStyle}>
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
        p: { xs: 2, md: 5 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
        mb={5}
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight={700}
          >
            CareerGPT
          </Typography>

          <Typography
            color="gray"
            mt={1}
          >
            Personalized Career Report
          </Typography>
        </Box>

        <Stack
        className="no-print"
        direction="row"
        spacing={2}
      >
          <PrimaryButton onClick={handlePrint}>
            Download Report
          </PrimaryButton>

          <PrimaryButton
            onClick={handleRestart}
            sx={{
              bgcolor: "transparent",
              border: "1px solid rgba(255,255,255,.2)",
            }}
          >
            Take Assessment Again
          </PrimaryButton>
        </Stack>
      </Stack>

      {/* Candidate Snapshot */}

      <Paper sx={{ ...cardStyle, mb: 4 }}>
        <Typography
          variant="h5"
          mb={3}
          fontWeight={600}
        >
          Candidate Snapshot
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography color="gray">
              Education
            </Typography>

            <Typography mt={1}>
              {snapshot.education}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography color="gray">
              Career Interest
            </Typography>

            <Typography mt={1}>
              {snapshot.careerInterest}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography color="gray">
              Experience Level
            </Typography>

            <Typography mt={1}>
              {snapshot.experienceLevel}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="gray">
              Preferred Work Style
            </Typography>

            <Typography mt={1}>
              {snapshot.preferredWorkStyle}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="gray">
              Learning Style
            </Typography>

            <Typography mt={1}>
              {snapshot.learningStyle}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Executive Summary */}

      <Paper sx={{ ...cardStyle, mb: 4 }}>
        <Typography
          variant="h5"
          mb={2}
          fontWeight={600}
        >
          Executive Summary
        </Typography>

        <Typography
          lineHeight={1.9}
          whiteSpace="pre-line"
        >
          {report.summary}
        </Typography>
      </Paper>

            {/* Top Career Matches */}

      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
      >
        Top Career Matches
      </Typography>

      <Grid container spacing={3} mb={4}>
        {(report.topCareers || []).map((career, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
          >
            <Paper sx={cardStyle}>
              <Typography
                variant="h6"
                fontWeight={700}
                mb={2}
              >
                {index + 1}. {career.title}
              </Typography>

              <Typography
                lineHeight={1.8}
              >
                {career.reason}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Skills */}

      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={cardStyle}>
            <Typography
              variant="h6"
              mb={2}
              fontWeight={600}
            >
              Technical Skills
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
            >
              {(report.skills?.technical || []).map(
                (skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="primary"
                    variant="outlined"
                  />
                )
              )}
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={cardStyle}>
            <Typography
              variant="h6"
              mb={2}
              fontWeight={600}
            >
              Professional Skills
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
            >
              {(report.skills?.professional || []).map(
                (skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="secondary"
                    variant="outlined"
                  />
                )
              )}
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* Courses */}

      <Paper
        sx={{
          ...cardStyle,
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          mb={3}
          fontWeight={600}
        >
          Recommended Courses
        </Typography>

        <Grid container spacing={2}>
          {(report.recommendedCourses || []).map(
            (course, index) => (
              <Grid
                item
                xs={12}
                md={6}
                key={index}
              >
                <Paper
                  sx={{
                    p: 2,
                    background:
                      "rgba(255,255,255,.03)",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    fontWeight={600}
                  >
                    {course.course}
                  </Typography>

                  <Typography
                    color="gray"
                    mt={1}
                  >
                    {course.provider}
                  </Typography>
                </Paper>
              </Grid>
            )
          )}
        </Grid>
      </Paper>

      {/* Exams & Colleges */}

      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={6}>
          {renderList(
            "Recommended Exams",
            report.recommendedExams
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          {renderList(
            "Recommended Colleges",
            report.recommendedColleges
          )}
        </Grid>
      </Grid>

            {/* Career Roadmap */}

      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
      >
        Career Roadmap
      </Typography>

      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={4}>
          {renderList(
            "🚀 Immediate",
            report.careerRoadmap?.immediate
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          {renderList(
            "📅 Next 3 Months",
            report.careerRoadmap?.threeMonths
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          {renderList(
            "🎯 6 - 12 Months",
            report.careerRoadmap?.sixToTwelveMonths
          )}
        </Grid>
      </Grid>

      {/* Immediate Next Step */}

      <Paper
        sx={{
          ...cardStyle,
          mb: 4,
          border: "2px solid #4caf50",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          mb={2}
        >
          Immediate Next Step
        </Typography>

        <Typography
          lineHeight={1.9}
          fontSize="1.05rem"
        >
          {report.immediateNextStep}
        </Typography>
      </Paper>

      {/* Final Thoughts */}

      <Paper sx={cardStyle}>
        <Typography
          variant="h5"
          fontWeight={700}
          mb={2}
        >
          Final Thoughts
        </Typography>

        <Typography
          lineHeight={2}
          whiteSpace="pre-line"
        >
          {report.finalThoughts}
        </Typography>
      </Paper>
    </Box>
  );
}