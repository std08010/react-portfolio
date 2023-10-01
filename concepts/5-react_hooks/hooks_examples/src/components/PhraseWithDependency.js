import React, { useEffect, useState } from "react";

/**
 * Multiple useEffect hooks with dependency arrays.
 * They are called only when the state context they are tied with changes.
 */

export default function PhraseWithDependency() {
  const [val, setVal] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    setVal("");
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  return (
    <>
      <label>Favorite phrase:</label>
      <input value={val} placeholder={phrase} onChange={(e) => setVal(e.target.value)} />
      <button onClick={createPhrase}>send</button>
    </>
  );
}
