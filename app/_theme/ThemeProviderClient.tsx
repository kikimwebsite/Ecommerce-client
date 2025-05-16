'use client';

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "./theme";

export const ThemeModeContext = React.createContext({
  mode: "dark",
  toggleMode: () => {},
});

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const theme = React.useMemo(() => getTheme(mode), [mode]);

  const toggleMode = React.useCallback(
    () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    []
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}