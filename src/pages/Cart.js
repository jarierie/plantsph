import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import TransitionPage from "../components/TransitionPage";

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
      <Nav /> <Heading>Your Cart is yet to be found</Heading>
    </>
  );
};

export default Card;
