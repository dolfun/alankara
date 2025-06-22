import notationData from "@/assets/notation.json";
import raagData from "@/assets/raags.json";
import type { Note, Notation, Raag, Alankara } from "@/types";

export const orderedNotes: Note[] = [
  "p0",
  "d0",
  "n0",
  "s1",
  "r1",
  "g1",
  "m1",
  "p1",
  "d1",
  "n1",
  "s2",
  "r2",
  "g2",
  "m2",
  "p2",
];

export const defaultNotation: string = notationData.default;
export const defaultRaag: string = raagData.default;
export const notations: Notation[] = notationData.notations as Notation[];
export const raags: Raag[] = raagData.raags as Raag[];

export const defaultAlankar: Alankara = {
  notation: notations.find(({ name }) => name === defaultNotation)!,
  raag: raags.find(({ name }) => name === defaultRaag)!,
  startingNote: "p0",
  endingNote: "p2",
};
