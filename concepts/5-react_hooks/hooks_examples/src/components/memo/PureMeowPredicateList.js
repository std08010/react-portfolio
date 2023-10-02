import React, { useState } from "react";
import PureMeowPredicate from "./PureMeowPredicate";

export default function PureMeowPredicateList() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, i) => (
        <PureMeowPredicate key={i} name={name} meow={(name) => console.log(`${name} has meowed`)} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>Add a Cat</button>
    </>
  );
}
