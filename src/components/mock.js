import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumberAction } from "../actions/addNumberAction";

const Mock = () => {
  const selector = useSelector((state) => state.currentState);
  const dispatch = useDispatch();
  console.log(selector);
  return (
    <>
      <button
        onClick={() => {
          dispatch(addNumberAction("maliit"));
        }}
      >
        Maliit
      </button>
      <button
        onClick={() => {
          dispatch(addNumberAction("malaki"));
        }}
      >
        Malaki
      </button>
      {selector.map((data) => {
        return <h1 key={data.id}>{data.name}</h1>;
      })}
    </>
  );
};
export default Mock;
