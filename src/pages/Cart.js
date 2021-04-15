import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import TransitionPage from "../components/TransitionPage";
import Mock from "../components/mock";
import Cart from "../components/Cart";

const Heading = styled.h1`
  text-align: center;
  width: 30%;
  font-size: 2em;
  margin: auto;
  height: 2000px;
`;

const Card = () => {
  return (
    <>
      <TransitionPage />
      <Nav />
      <Cart></Cart>
    </>
  );
};

export default Card;
