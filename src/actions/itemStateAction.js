import { itemState } from "./itemState";
import DECREASE_STATE from "../actions/decreaseState";

export const itemStateAction = () => {
  return {
    type: itemState,
  };
};

export const decrease = () => {
  return {
    type: DECREASE_STATE,
  };
};
