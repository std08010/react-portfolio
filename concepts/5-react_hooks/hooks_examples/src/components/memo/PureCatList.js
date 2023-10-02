import React, { useState } from "react";
import PureCat from "./PureCat";

export default function PureCatList() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>Add a Cat</button>
    </>
  );
}
