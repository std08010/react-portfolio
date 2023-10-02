/**
 * Demonstrates the array dependency issue but with functions.
 */

import React, { useCallback, useEffect } from "react";
import useAnyKeyToRender from "../../hooks/useAnyKeyToRender";

export default function WordCountUseCallback() {
  useAnyKeyToRender();

  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, []);

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
