import { Box, Grid } from "@mui/material";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        maxWidth: 1400,
        mx: "auto",
        px: 4,
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
      >
        <Grid
          size={{ xs: 12, md: 6 }}
        >
          <HeroContent />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          display="flex"
          justifyContent="center"
        >
          <HeroVisual />
        </Grid>
      </Grid>
    </Box>
  );
}