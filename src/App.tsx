import { ThemeProvider } from "@/components/Theme.tsx";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Alankara
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
