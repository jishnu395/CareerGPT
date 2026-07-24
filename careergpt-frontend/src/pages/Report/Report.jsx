// src/pages/Report/Report.jsx

import {
  Box,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

export default function Report() {
  const report = JSON.parse(
    sessionStorage.getItem("careerReport") || "{}"
  );

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
      <Typography variant="h3" mb={4}>
        Your Career Report
      </Typography>

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

        <Typography>
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
          {renderList("Recommended Courses", report.recommendedCourses)}
        </Grid>

        <Grid item xs={12} md={6}>
          {renderList("Skills To Develop", report.skillsToDevelop)}
        </Grid>

        <Grid item xs={12} md={6}>
          {renderList("Recommended Exams", report.exams)}
        </Grid>

        <Grid item xs={12} md={6}>
          {renderList("Suggested Colleges", report.colleges)}
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

        <Typography mb={3}>
          {report.immediateNextStep}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" mb={2}>
          Encouragement
        </Typography>

        <Typography>
          {report.encouragement}
        </Typography>
      </Paper>
    </Box>
  );
}