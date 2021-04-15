import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import removeCartAction from "../actions/removeCartAction";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto 20px auto;
  width: 70%;
  height: auto;
`;

const Container = styled.div`
  width: 70%;
  display: flex;

  justify-content: space-around;
`;

const CartImg = styled.div`
  width: 200px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  width: 300px;
  height: auto;
  h2 {
    font-size: 36px;
  }
  p {
    font-size: 12px;
  }
`;

const Cart = () => {
  const removeDispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);
  console.log(cartList);
  return (
    <>
      <MainContainer>
        {cartList.map((data) => {
          return (
            <Container>
              <CartImg>
                <img src={data.imageUrl} alt=''></img>
              </CartImg>
              <Info>
                <h2>{data.name}</h2>
                <p>{data.price}</p>
                <button onClick={() => removeDispatch(removeCartAction(data))}>
                  Remove from Cart
                </button>
              </Info>
            </Container>
          );
        })}
      </MainContainer>
    </>
  );
};

export default Cart;
