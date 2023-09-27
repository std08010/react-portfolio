import React from "react";

import ColorListContext from "./color/ColorListContext";
import ColorContext from "./context/ColorContext";
import colors from "../data/colors.json";

/**
 * An example that uses react context (stateless)
 */

export default function AppColorContext() {
  return (
    <ColorContext.Provider value={{ colors }}>
      <ColorListContext />
    </ColorContext.Provider>
  );
}
