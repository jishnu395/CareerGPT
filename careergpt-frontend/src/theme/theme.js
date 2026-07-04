import { createTheme } from "@mui/material/styles";
import colors from "./color";
import typography from "./typography";
import shadows from "./shadow";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: colors.primary,
    },

    secondary: {
      main: colors.secondary,
    },

    success: {
      main: colors.success,
    },

    background: {
      default: colors.background,
      paper: colors.surface,
    },

    text: {
      primary: colors.text,
      secondary: colors.muted,
    },
  },

  typography,

  shape: {
    borderRadius: 20,
  },

  shadows,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: "12px 24px",
          fontWeight: 600,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundColor: colors.card,
        },
      },
    },
  },
});

export default theme;