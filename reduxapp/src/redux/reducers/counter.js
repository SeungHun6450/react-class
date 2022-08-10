import { INC_COUNT, DEC_COUNT } from "../constants/counter";

const initialState = { number: 0 };

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INC_COUNT:
      return { number: state.number + action.payload.diff };
    case DEC_COUNT:
      return { number: state.number - action.payload.diff };
    default:
      return state;
  }
}
