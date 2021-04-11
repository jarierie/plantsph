import React from "react";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import addCartAction from "../actions/addCartAction";
import removeCartAction from "../actions/removeCartAction";

const ItemPage = ({ match }) => {
  // Mock Function for active Cart
  const activeCart = useSelector((state) => state.cart);
  const addDispatch = useDispatch();
  const removeDispatch = useDispatch();
  console.log(activeCart);

  const itemDataList = useSelector((state) => state.currentState);
  const xd = itemDataList.find((x) => x.name === match.params.name);

  return (
    <>
      <Nav />
      <h1 onClick={() => addDispatch(addCartAction(xd))}>{xd.id}</h1>
      <h1>{xd.name}</h1>
      <h1>{xd.price}</h1>
      <h1>{xd.stock}</h1>
      <h1
        onClick={() => {
          removeDispatch(removeCartAction(xd));
        }}
      >
        Remove this on the Cart
      </h1>
    </>
  );
};

export default ItemPage;
