import type { Alankara } from "@/types";

import {
  Box,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { AlankaraTable } from "./AlankaraTable";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import { useState } from "react";
import { isValidPattern } from "@/helpers";

type Props = {
  alankara: Alankara;
};

export function TableInput({ alankara }: Props) {
  const [isAaroh, setIsAaroh] = useState(true);

  if (
    !isValidPattern(
      alankara.pattern,
      alankara.startingNote,
      alankara.endingNote
    ) ||
    alankara.pattern.length === 0
  ) {
    return null;
  }

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: 6,
        width: "40%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            marginBottom: 2,
          }}
        >
          <Typography variant="h4">{isAaroh ? "Aaroh" : "Avroh"}</Typography>
          <ToggleButtonGroup
            exclusive
            value={isAaroh}
            onChange={(_, value) => setIsAaroh(value)}
          >
            <ToggleButton value={false}>
              <TrendingDownIcon fontSize="small" />
            </ToggleButton>
            <ToggleButton value={true}>
              <TrendingUpIcon fontSize="small" />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <AlankaraTable alankara={alankara} isAaroh={isAaroh} />
      </Box>
    </Paper>
  );
}
