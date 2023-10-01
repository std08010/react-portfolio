import React from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function WindowSize() {
  const [w, h] = useWindowSize();
  return (
    <div>
      {w}x{h}
    </div>
  );
}
