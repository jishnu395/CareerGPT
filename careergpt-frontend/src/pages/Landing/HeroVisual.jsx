import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 480,
        height: 480,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Outer Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#6D5EF540 0%,transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,.08)",
        }}
      />

      {/* Floating Orb */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <Box
          sx={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#6D5EF5,#4F8CFF)",
            boxShadow:
              "0 0 80px rgba(79,140,255,.6)",
          }}
        />
      </motion.div>

      {/* Orbit Dot */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          width: 340,
          height: 340,
        }}
      >
        <Box
          sx={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#00E5FF",
          }}
        />
      </motion.div>
    </Box>
  );
}