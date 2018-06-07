import { INCREMENT, DECREMENT } from "./types";

export const doIncrement = () => {
  return function(dispatch) {
    dispatch({ type: INCREMENT, payload: 1 });
  };
};

export const doDecrement = () => {
  return function(dispatch) {
    dispatch({ type: DECREMENT, payload: 1 });
  };
};
