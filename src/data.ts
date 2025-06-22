import notationData from "@/assets/notation.json";
import raagData from "@/assets/raags.json";
import type { Notation, Raag, Alankara } from "@/types";

export const defaultNotation: string = notationData.default;
export const defaultRaag: string = raagData.default;
export const notations: Notation[] = notationData.notations as Notation[];
export const raags: Raag[] = raagData.raags as Raag[];

export const defaultAlankar: Alankara = {
  notation: notations.find(({ name }) => name === defaultNotation)!,
  raag: raags.find(({ name }) => name === defaultRaag)!,
};
