import React, { useState } from "react";

import colorData from "../data/colors.json";
import ColorList from "./color/ColorList";

/**
 * An example that uses hooks at the root of the component tree
 */

export default function AppColor() {
  const [colors, setColors] = useState(colorData);

  return (
    <ColorList
      colors={colors}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors);
      }}
      onRateColor={(id, rating) => {
        const newColors = colors.map((color) => (color.id === id ? { ...color, rating } : color));
        setColors(newColors);
      }}
    />
  );
}
