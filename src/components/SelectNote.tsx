import type { Alankara, Action, Note } from "@/types";
import type { Dispatch } from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { orderedNotes } from "@/data";

type Props = {
  label: string;
  alankara: Alankara;
  dispatchAlankar: Dispatch<Action>;
  keyName: "startingNote" | "endingNote";
  data: Note[];
};

export const SelectNote = ({
  label,
  alankara,
  dispatchAlankar,
  data,
  keyName,
}: Props) => {
  const labelId = `${keyName}-label`;
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        label={label}
        value={alankara[keyName]}
        onChange={(e) =>
          dispatchAlankar({
            type: keyName,
            payload: data.find((note) => note === e.target.value)!,
          })
        }
      >
        {data.map((note) => (
          <MenuItem value={note}>
            {alankara.notation.symbols[orderedNotes.indexOf(note)]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
