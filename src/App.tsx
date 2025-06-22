import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@/components/Theme";
import { AlankaraInput } from "@/components/AlankaraInput";

import { useAlankara } from "@/useAlankara";

function App() {
  const [alankara, dispatchAlankar] = useAlankara();

  return (
    <ThemeProvider>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Alankara
        </Typography>

        <AlankaraInput alankara={alankara} dispatchAlankar={dispatchAlankar} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
