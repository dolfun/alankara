import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  useColorScheme,
} from "@mui/material/styles";

import { CssBaseline, IconButton, Paper } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import type { ReactNode } from "react";

function ThemeToggler() {
  const { mode, systemMode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  if (systemMode) {
    setMode(systemMode);
  }

  const handleClick = () => {
    if (mode === "light") setMode("dark");
    if (mode === "dark") setMode("light");
  };

  return (
    <Paper
      sx={(theme) => ({
        position: "fixed",
        top: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: theme.zIndex.tooltip + 1,
      })}
    >
      <IconButton onClick={handleClick}>
        {mode === "light" ? <LightModeIcon /> : null}
        {mode === "dark" ? <DarkModeIcon /> : null}
      </IconButton>
    </Paper>
  );
}

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ThemeToggler />
      {children}
    </MuiThemeProvider>
  );
}
