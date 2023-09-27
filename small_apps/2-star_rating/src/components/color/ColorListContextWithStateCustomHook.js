import React from "react";

import Color from "./Color";
import { useColors } from "../../hooks/colorHook";

export default function ColorListContextWithStateCustomHook() {
  const { colors, removeColor, rateColor } = useColors();

  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} onRemove={removeColor} onRate={rateColor} />
      ))}
    </div>
  );
}
