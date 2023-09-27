import React, { useContext } from "react";
import Color from "./Color";
import ColorContext from "../context/ColorContext";

export default function ColorListContextWithState() {
  const { colors, removeColor, rateColor } = useContext(ColorContext);

  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} onRemove={removeColor} onRate={rateColor} />
      ))}
    </div>
  );
}
