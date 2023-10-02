/**
 * Demonstrates the array dependency issue of when comparing two different array instances.
 */

import React, { useEffect } from "react";
import useAnyKeyToRender from "../../hooks/useAnyKeyToRender";

const wordsSameInstanceEverytime = ["sick", "powder"];

export default function WordArrayInstance() {
  useAnyKeyToRender();

  //everytime the components rerenders the words array is created in a new instance
  //thus the useEffect hook is called everytime
  //because it thinks that the words variable has changed.
  //If words was a context variable created with the useState hook then useEffect
  //would not be called everytime because variable created with useState hook have the same instance everytime.
  const words = ["sick", "powder", "day"];

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  //this is called only once because 'wordsSameInstanceEverytime' remains the same instance
  useEffect(() => {
    console.log("fresh render - fix");
  }, [wordsSameInstanceEverytime]);

  return (
    <p>
      <strong>{words.length} - words</strong>
    </p>
  );
}
