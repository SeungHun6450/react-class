import { INC_COUNT, DEC_COUNT } from "../constants/counter";

export function incCount(diff) {
  return {
    type: INC_COUNT,
    payload: { diff },
  };
}

export function decCount(diff) {
  return {
    type: DEC_COUNT,
    payload: { diff },
  };
}
