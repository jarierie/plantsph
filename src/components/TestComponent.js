import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { itemStateAction, decrease } from "../actions/itemStateAction";

const Container = styled.div`
  width: 200px;
  height: 50px;
  background-color: lightgreen;
`;

const Button = styled.button`
  width: 50px;
  height: 20px;
  background-color: white;
`;

const Count = styled.p`
  font-size: 2em;
  color: white;
`;

const TestComponent = () => {
  const counts = useSelector((state) => state.count);

  const addDispatch = useDispatch();
  const decDispatch = useDispatch();

  return (
    <>
      <Container>
        <Button
          onClick={() => {
            addDispatch(itemStateAction());
          }}
        >
          Click me
        </Button>
        <Button
          onClick={() => {
            decDispatch(decrease());
          }}
        >
          Decrease
        </Button>
        <Count>{counts}</Count>
      </Container>
    </>
  );
};

export default TestComponent;
