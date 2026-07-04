import { Box } from "@mui/material";
import AnimatedBackground from "../layout/AnimatedBackground";

export default function PageContainer({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg,#050816 0%,#0B1120 100%)",
      }}
    >
      <AnimatedBackground />

      <Box sx={{ position: "relative", zIndex: 10 }}>
        {children}
      </Box>
    </Box>
  );
}