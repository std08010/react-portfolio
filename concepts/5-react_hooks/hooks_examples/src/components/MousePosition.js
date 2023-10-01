import React from "react";
import useMousePosition from "../hooks/useMousePosition";

export default function MousePosition() {
  const [left, top] = useMousePosition();
  return (
    <div style={{ position: "absolute", top, left, cursor: "none" }}>
      {top}x{left}
    </div>
  );
}
