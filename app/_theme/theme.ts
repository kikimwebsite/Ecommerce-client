import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: mode === "dark"
        ? {
            main: "#FFD600",      // Flashlight yellow for night mode
            light: "#FFEA70",     // Lighter yellow for highlights
            dark: "#C7A500",      // Deeper yellow for contrast
            contrastText: "#222", // Dark text for readability on yellow
          }
        : {
            main: "#60A5FA",      // Light sky blue for light mode
            light: "#93C5FD",     // Lighter blue for highlights
            dark: "#b4c2f0",      // Deep blue for contrast
            contrastText: "#222", // Dark text for readability on blue
          },
      secondary: {
        main: "#2DD4BF",         // Teal accent for buttons/links
        light: "#5EEAD4",        // Lighter teal for hover/active states
        dark: "#0F766E",         // Deep teal for contrast
        contrastText: "#fff",    // White text for readability on teal
      },
      background: mode === "dark"
        ? { 
            default: "#0F172A",  // Very dark blue for app background (dark mode)
            paper: "#04070b"     // Slightly lighter dark blue for cards/paper (dark mode)
          }
        : { 
            default: "#FFF",     // White for app background (light mode)
            paper: "#F0F9FF"     // Very light blue for cards/paper (light mode)
          },
      text: mode === "dark"
        ? { 
            primary: "#F1F5F9",  // Light gray for main text (dark mode)
            secondary: "#FFD600" // Yellow for secondary text (dark mode)
          }
        : { 
            primary: "#222",     // Almost black for main text (light mode)
            secondary: "#b4c2f0" // Deep blue for secondary text (light mode)
          },
    },
    shape: { borderRadius: 16 },
    typography: {
      //fontFamily: "'Quicksand', 'Nunito', Arial, sans-serif",
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
            background: mode === "dark" ? "#1E293B" /* Card bg dark */ : "#F0F9FF" /* Card bg light */,
          },
        },
      },
    },
  });