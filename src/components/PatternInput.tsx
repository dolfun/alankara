import type { Alankara, Action } from "@/types";
import type { Dispatch } from "react";

import { TextField } from "@mui/material";
import { defaultAlankar } from "@/data";
import { isValidPattern } from "@/helpers";

type Props = {
  alankara: Alankara;
  dispatchAlankar: Dispatch<Action>;
};

export function PatternInput({ alankara, dispatchAlankar }: Props) {
  return (
    <TextField
      label="Pattern"
      value={alankara.pattern}
      onChange={(e) =>
        dispatchAlankar({
          type: "pattern",
          payload: e.target.value,
        })
      }
      placeholder={defaultAlankar.pattern}
      error={
        !isValidPattern(
          alankara.pattern,
          alankara.startingNote,
          alankara.endingNote
        )
      }
    />
  );
}
