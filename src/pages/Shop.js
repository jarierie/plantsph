import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const Heading = styled.h1`
  text-align: center;
  width: 30%;
  font-size: 2em;
  margin: auto;
  height: 2000px;
`;

const Shop = () => {
  return (
    <>
      <Nav />
      <Heading>THIS IS THE SHOP PAGE</Heading>
    </>
  );
};

export default Shop;
