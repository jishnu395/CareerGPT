import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#6D5EF560 0%,transparent 70%)",
            top: -120,
            left: -120,
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 70, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#4F8CFF55 0%,transparent 70%)",
            bottom: -100,
            right: -100,
            filter: "blur(80px)",
          }}
        />
      </motion.div>
    </>
  );
}