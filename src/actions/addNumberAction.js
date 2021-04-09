import { ADD_NUMBER } from "./actionString";

export const addNumberAction = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};
