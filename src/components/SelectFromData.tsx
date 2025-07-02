import type { Alankara, Action, Notation, Raag } from "@/types";
import type { Dispatch } from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type Props = {
  label: string;
  alankara: Alankara;
  dispatchAlankar: Dispatch<Action>;
} & (
  | { keyName: "notation"; data: Notation[] }
  | { keyName: "raag"; data: Raag[] }
);

export const SelectFromData = ({
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
        value={alankara[keyName].name}
        onChange={(e) =>
          dispatchAlankar({
            type: keyName,
            payload: data.find(({ name }) => name === e.target.value)!,
          })
        }
      >
        {data.map(({ name }) => (
          <MenuItem value={name}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
