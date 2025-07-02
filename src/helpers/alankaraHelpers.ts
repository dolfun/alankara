import { orderedNotes } from "@/data";
import type { Note } from "@/types";

export function parsePattern(pattern: string) {
  return pattern.trim().split(/\s+/);
}

export function isValidPattern(
  pattern: string,
  startingNote: Note,
  endingNote: Note
) {
  if (pattern.length === 0) return true;

  return parsePattern(pattern).every((str) => {
    const num = Number(str);
    if (!Number.isInteger(num)) return false;

    const startingIdx = orderedNotes.indexOf(startingNote);
    const endingIdx = orderedNotes.indexOf(endingNote);
    return num >= 1 && num <= endingIdx - startingIdx + 1;
  });
}
