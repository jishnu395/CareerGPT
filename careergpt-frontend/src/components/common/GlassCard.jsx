import { Paper } from "@mui/material";

export default function GlassCard({ children }) {
  return (
    <Paper
      sx={{
        p: 5,
        borderRadius: "28px",

        background: "rgba(255,255,255,.05)",

        backdropFilter: "blur(18px)",

        border: "1px solid rgba(255,255,255,.08)",

        boxShadow: "0 25px 50px rgba(0,0,0,.35)",
      }}
    >
      {children}
    </Paper>
  );
}