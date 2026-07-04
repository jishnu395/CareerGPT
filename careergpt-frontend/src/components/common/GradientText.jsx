import { Typography } from "@mui/material";

export default function GradientText({ children, variant = "h2" }) {
  return (
    <Typography
      variant={variant}
      sx={{
        fontWeight: 700,

        background:
          "linear-gradient(90deg,#6D5EF5,#4F8CFF)",

        WebkitBackgroundClip: "text",

        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </Typography>
  );
}