/**
 * Demonstrates the array dependency issue but with functions.
 */

import React, { useEffect } from "react";
import useAnyKeyToRender from "../hooks/useAnyKeyToRender";

export default function WordCountWithFunction() {
  useAnyKeyToRender();

  const fn = () => {
    console.log("hello");
    console.log("world");
  };

  useEffect(() => {
    console.log("fresh render");
    fn();
  }, [fn]);

  return (
    <p>
      <strong>Function at dependency array</strong>
    </p>
  );
}
