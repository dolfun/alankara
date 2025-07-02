import type { Alankara } from "@/types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import { createPatterns, parsePattern } from "@/helpers";
import { orderedNotes } from "@/data";

type Props = {
  alankara: Alankara;
  isAaroh: boolean;
};

export function AlankaraTable({ alankara, isAaroh }: Props) {
  const pattern = parsePattern(alankara.pattern).map(Number);
  const patterns = createPatterns(
    isAaroh ? pattern : pattern.reverse(),
    alankara.startingNote,
    alankara.endingNote
  );

  const notes = alankara.raag.notes;
  const symbols = alankara.notation.symbols;
  const startingIdx = notes.indexOf(alankara.startingNote);

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableBody>
          {(isAaroh ? patterns : patterns.reverse()).map((pattern) => (
            <TableRow>
              {pattern.map((value) => (
                <TableCell align="center">
                  {
                    symbols[
                      orderedNotes.indexOf(notes[startingIdx + value - 1])
                    ]
                  }
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
