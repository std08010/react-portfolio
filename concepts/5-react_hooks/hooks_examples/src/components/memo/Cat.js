import React from "react";

export default function Cat({ name }) {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
}
