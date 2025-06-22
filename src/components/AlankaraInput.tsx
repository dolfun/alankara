import type { Alankara, Action } from "@/types.ts";
import type { ActionDispatch } from "react";

import { Box, Paper } from "@mui/material";
import { notations, raags } from "@/data.ts";
import { SelectFromData } from "./SelectFromData.tsx";

type Props = {
  alankara: Alankara;
  dispatchAlankar: ActionDispatch<[Action]>;
};

export function AlankaraInput({ alankara, dispatchAlankar }: Props) {
  return (
    <Paper sx={{ padding: 6, width: "40%" }}>
      <Box sx={{ display: "flex", gap: 4 }}>
        <SelectFromData
          keyName="notation"
          label="Notation"
          alankara={alankara}
          dispatchAlankar={dispatchAlankar}
          data={notations}
        />

        <SelectFromData
          keyName="raag"
          label="Raag"
          alankara={alankara}
          dispatchAlankar={dispatchAlankar}
          data={raags}
        />
      </Box>
    </Paper>
  );
}
