import REMOVE_CART from "./removeCartString";

const removeCartAction = (payload) => {
  return {
    type: REMOVE_CART,
    payload,
  };
};

export default removeCartAction;
