import React, { useState } from "react";
import Cat from "./Cat";

export default function CatList() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, i) => (
        <Cat key={i} name={name} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>Add a Cat</button>
    </>
  );
}
