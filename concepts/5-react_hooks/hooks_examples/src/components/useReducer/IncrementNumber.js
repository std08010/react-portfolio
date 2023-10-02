import React, { useReducer } from "react";

export default function IncrementNumber() {
  const [number, addNumber] = useReducer((number, newNumber) => number + newNumber, 0);

  return <h1 onClick={() => addNumber(1)}>{number}</h1>;
}
