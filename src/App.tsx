import { Box } from "@mui/material";
import { ThemeProvider, AlankaraInput, TableInput } from "@/components";

import { useAlankara } from "@/useAlankara";

function App() {
  const [alankara, dispatchAlankar] = useAlankara();

  return (
    <ThemeProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          margin: 1,
        }}
      >
        <AlankaraInput alankara={alankara} dispatchAlankar={dispatchAlankar} />

        <TableInput alankara={alankara} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
