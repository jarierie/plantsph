import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  color: black;
  width: 100px;
  height: 30px;
  background-color: white;
  :active {
    background-color: lightgreen;
  }
`;

const Button = (props) => {
  return <ButtonStyle>{props.children}</ButtonStyle>;
};

export default Button;
