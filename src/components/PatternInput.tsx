import type { Alankara, Action } from "@/types";
import type { Dispatch } from "react";

import { TextField } from "@mui/material";
import { orderedNotes, defaultAlankar } from "@/data";

type Props = {
  alankara: Alankara;
  dispatchAlankar: Dispatch<Action>;
};

export function PatternInput({ alankara, dispatchAlankar }: Props) {
  function isValidPattern(pattern: string) {
    if (pattern.length === 0) return true;

    return pattern
      .trim()
      .split(" ")
      .every((str) => {
        if (str.length === 0) return true;

        const num = Number(str);
        if (!Number.isInteger(num)) return false;

        const startingIdx = orderedNotes.indexOf(alankara.startingNote);
        const endingIdx = orderedNotes.indexOf(alankara.endingNote);
        return num >= 1 && num <= endingIdx - startingIdx + 1;
      });
  }

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
      error={!isValidPattern(alankara.pattern)}
    />
  );
}
