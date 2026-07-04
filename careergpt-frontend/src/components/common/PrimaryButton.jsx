import { Button } from "@mui/material";

export default function PrimaryButton({
  children,
  onClick,
  fullWidth = false,
}) {
  return (
    <Button
      variant="contained"
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: "14px",
        fontWeight: 600,
        fontSize: "1rem",
        background: "linear-gradient(90deg,#6D5EF5,#4F8CFF)",
        boxShadow: "0 10px 30px rgba(79,140,255,.35)",

        "&:hover": {
          background: "linear-gradient(90deg,#5A4CE3,#3D7CF5)",
          transform: "translateY(-2px)",
          boxShadow: "0 15px 35px rgba(79,140,255,.45)",
        },

        transition: "all .3s ease",
      }}
    >
      {children}
    </Button>
  );
}