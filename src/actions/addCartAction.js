import ADD_CART from "./addCartString";

const addCartAction = (payload) => {
  return {
    type: ADD_CART,
    payload,
  };
};
export default addCartAction;
