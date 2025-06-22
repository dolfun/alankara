import type { Alankara, Action } from "@/types.ts";
import type { ActionDispatch } from "react";

import { Box, Paper } from "@mui/material";
import { notations, raags } from "@/data.ts";
import { SelectFromData } from "@/components/SelectFromData.tsx";
import { SelectNote } from "@/components/SelectNote.tsx";

type Props = {
  alankara: Alankara;
  dispatchAlankar: ActionDispatch<[Action]>;
};

export function AlankaraInput({ alankara, dispatchAlankar }: Props) {
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

      <Box sx={{ display: "flex", gap: 4 }}>
        <SelectNote
          keyName="startingNote"
          label="Starting Note"
          alankara={alankara}
          dispatchAlankar={dispatchAlankar}
          data={alankara.raag.notes}
        />

        <SelectNote
          keyName="endingNote"
          label="Ending Note"
          alankara={alankara}
          dispatchAlankar={dispatchAlankar}
          data={alankara.raag.notes}
        />
      </Box>
    </Paper>
  );
}
