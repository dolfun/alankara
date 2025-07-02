import type { Note } from "@/types";
import { orderedNotes } from "@/data";

export function parsePattern(pattern: string) {
  return pattern.trim().split(/\s+/).map(Number);
}

export function isValidPattern(
  pattern: string,
  startingNote: Note,
  endingNote: Note
) {
  if (pattern.length === 0) return true;

  const startingIdx = orderedNotes.indexOf(startingNote);
  const endingIdx = orderedNotes.indexOf(endingNote);

  const parsedPattern = parsePattern(pattern);
  return (
    parsedPattern.some((num) => num == 1) &&
    parsedPattern.every((num) => {
      if (!Number.isInteger(num)) return false;
      return num >= 1 && num <= endingIdx - startingIdx + 1;
    })
  );
}

export function createPatterns(
  pattern: number[],
  startingNote: Note,
  endingNote: Note
) {
  const startingIdx = orderedNotes.indexOf(startingNote);
  const endingIdx = orderedNotes.indexOf(endingNote);

  const patterns = [pattern];
  while (true) {
    const newPattern = patterns.at(-1)!.map((value) => value + 1);
    if (newPattern.some((value) => value > endingIdx - startingIdx + 1)) {
      break;
    }

    patterns.push(newPattern);
  }

  return patterns;
}
