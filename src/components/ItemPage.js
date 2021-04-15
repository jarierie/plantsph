import React from "react";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import addCartAction from "../actions/addCartAction";
import styled from "styled-components";

const ItemContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 60%;
  height: auto;
  min-width: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  margin: 10px 30px 10px 0;
  width: 400px;
  height: 500px;
  background-color: white;
  max-width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  max-width: 100%;
  background-color: grey;
  margin: 10px 0 10px 0;
  button {
    width: 200px;
    height: 50px;
  }
`;

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
      <ItemContainer>
        <ImageContainer>
          <img src={xd.imageUrl}></img>
        </ImageContainer>
        <ItemInfoContainer>
          <h2>{xd.name}</h2>
          <p>Price: {xd.price}</p>
          <p>StockL {xd.stock}</p>
          <button
            onClick={() => {
              addDispatch(addCartAction(xd));
            }}
          >
            Add To Cart
          </button>
        </ItemInfoContainer>
      </ItemContainer>
    </>
  );
};

export default ItemPage;
