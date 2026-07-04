import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "../common/PrimaryButton";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(5,8,22,.55)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1280,
          width: "100%",
          mx: "auto",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
        >
          CareerGPT
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <PrimaryButton onClick={() => navigate("/student")}>
          Start Assessment
        </PrimaryButton>
      </Toolbar>
    </AppBar>
  );
}