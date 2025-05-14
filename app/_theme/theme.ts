import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: mode === "dark"
        ? {
            main: "#FFD600", // Flashlight yellow for night mode
            light: "#FFEA70",
            dark: "#C7A500",
            contrastText: "#222",
          }
        : {
            main: "#60A5FA", // Light sky blue for light mode
            light: "#93C5FD",
            dark: "#1E40AF",
            contrastText: "#222", // Dark text for better contrast on blue
          },
      secondary: {
        main: "#2DD4BF", // Teal accent
        light: "#5EEAD4",
        dark: "#0F766E",
        contrastText: "#fff",
      },
      background: mode === "dark"
        ? { default: "#0F172A", paper: "#1E293B" }
        : { default: "#FFF", paper: "#F0F9FF" }, // Very light blue for card backgrounds
      text: mode === "dark"
        ? { primary: "#F1F5F9", secondary: "#FFD600" }
        : { primary: "#222", secondary: "#1E40AF" }, // Dark text for light mode
    },
    shape: { borderRadius: 16 },
    typography: {
      fontFamily: "'Quicksand', 'Nunito', Arial, sans-serif",
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 700 },
      button: { borderRadius: 16, fontWeight: 600, textTransform: "none" },
    },
    components: {
      MuiButton: { styleOverrides: { root: { borderRadius: 16 } } },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            boxShadow: "0 4px 24px 0 rgba(45, 212, 191, 0.08)",
            background: mode === "dark" ? "#1E293B" : "#F0F9FF",
          },
        },
      },
    },
  });