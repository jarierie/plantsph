import { itemList } from "../data/itemList";

const initialState = {
  itemState: itemList,
  currentState: itemList,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filter":
      return {
        ...state,
        currentState: state.itemState.filter(
          (state) => state.type === action.payload
        ),
      };

    default:
      return state;
  }
};
