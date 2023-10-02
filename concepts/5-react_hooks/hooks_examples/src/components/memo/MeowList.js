import React, { useState } from "react";
import Meow from "./Meow";

export default function MeowList() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, i) => (
        <Meow key={i} name={name} meow={(name) => console.log(`${name} has meowed`)} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>Add a Cat</button>
    </>
  );
}
