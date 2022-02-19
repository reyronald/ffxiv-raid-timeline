import { useReducer } from "react";

export function useToggler() {
  return useReducer((v: boolean) => !v, false);
}
