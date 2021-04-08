import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  :active {
    background-color: lightgreen;
  }
`;

const Button = () => {
  return <ButtonStyle />;
};

export default Button;
