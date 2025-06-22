export type Note =
  | "p0"
  | "d0"
  | "n0"
  | "s1"
  | "r1"
  | "g1"
  | "m1"
  | "p1"
  | "d1"
  | "n1"
  | "s2"
  | "r2"
  | "g2"
  | "m2"
  | "p2";

export type Notation = {
  name: string;
  symbols: string[];
};

export type Raag = {
  name: string;
  notes: Note[];
};

export type Alankara = {
  notation: Notation;
  raag: Raag;
  startingNote: Note;
  endingNote: Note;
  pattern: string;
};

export type Action<K extends keyof Alankara = keyof Alankara> = {
  type: K;
  payload: Alankara[K];
};
