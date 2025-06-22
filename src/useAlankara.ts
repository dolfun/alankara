import type { Alankara, Action } from "@/types";

import { useReducer, type ActionDispatch } from "react";
import { defaultAlankar } from "@/data";

function reducer(state: Alankara, { type, payload }: Action): Alankara {
  return { ...state, [type]: payload };
}

export function useAlankara(): [Alankara, ActionDispatch<[Action]>] {
  const [alankara, dispatch] = useReducer(reducer, defaultAlankar);
  return [alankara, dispatch];
}
