import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#06113C",
      light: "#2F354C",
    },
    secondary: {
      main: "#FF7761",
    },
    success: {
      main: "#16a34a",
    },
    background: {
      paper: "#F0f3f7",
      default: "#ffffff",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Inter",
    h3: {
      fontWeight: "700",
    },
    h4: {
      fontWeight: "700",
    },
    h5: {
      fontWeight: "500",
    },
    body1: {
      lineHeight: "1.8",
    },
    body2: {
      lineHeight: "1.8",
    },
  },
  mixins: {
    toolbar: {
      minHeight: "64px",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0.5px 2px 3.1px rgba(0, 0, 0, 0.02), 4px 16px 25px rgba(0, 0, 0, 0.04)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "600",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
