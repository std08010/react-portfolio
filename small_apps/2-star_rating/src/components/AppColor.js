import React, { useState } from "react";
import { v4 } from "uuid";

import colorData from "../data/colors.json";
import ColorList from "./color/ColorList";
import AddColorFormUncontrolled from "./forms/AddColorFormUncontrolled";
import AddColorFormControlled from "./forms/AddColorFormControlled";
import AddColorFormControlledCustomHook from "./forms/AddColorFormControlledCustomHook";

/**
 * An example that uses hooks at the root of the component tree
 */

export default function AppColor() {
  const [colors, setColors] = useState(colorData);

  const addNewColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ];
    setColors(newColors);
  };

  return (
    <>
      <AddColorFormUncontrolled onNewColor={addNewColor} />
      <AddColorFormControlled onNewColor={addNewColor} />
      <AddColorFormControlledCustomHook onNewColor={addNewColor} />
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
    </>
  );
}
