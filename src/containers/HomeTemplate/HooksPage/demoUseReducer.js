import React, { useReducer } from "react";

const initState = { number: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return { number: state.number - 1 };
    case "increment":
      return { number: state.number + 1 };
    default:
      return { ...state };
  }
};

export default function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>Demo useReducer</h1>
      <span
        className="btn btn-danger"
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}
      >
        -
      </span>
      <span className="mx-3">Number: {state.number}</span>
      <span
        className="btn btn-success"
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        +
      </span>
    </div>
  );
}
