import React, { useContext } from "react";
import Color from "./Color";
import ColorContext from "../context/ColorContext";

export default function ColorListContext() {
  const { colors } = useContext(ColorContext);

  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}

/**
 * This was the use of context consumers before the introduction of hooks.
 */
function ColorListContextOldVersion() {
  return (
    <ColorContext.Consumer>
      {(context) => {
        if (!context.colors.length) return <div>No Colors Listed. (Add a Color)</div>;
        return (
          <div>
            {context.colors.map((color) => (
              <Color key={color.id} {...color} />
            ))}
          </div>
        );
      }}
    </ColorContext.Consumer>
  );
}
