import { itemList } from "../data/itemList";

const initialState = {
  itemState: itemList,
  currentState: itemList,
  cart: [],
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
    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((cart) => {
          return cart.id != action.payload.id;
        }),
      };
    default:
      return state;
  }
};
