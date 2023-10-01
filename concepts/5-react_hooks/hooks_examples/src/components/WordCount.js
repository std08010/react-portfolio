/**
 * Demonstrates the array dependency issue of when comparing two different array instances.
 * The same problem as the WordArrayInstance.js
 */

import React, { useEffect } from "react";
import useAnyKeyToRender from "../hooks/useAnyKeyToRender";

export default function WordCount({ children = "" }) {
  useAnyKeyToRender();

  const words = children.split(" ");

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}
