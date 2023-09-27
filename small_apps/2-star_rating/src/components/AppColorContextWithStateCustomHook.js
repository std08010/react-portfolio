import React from "react";

import { ColorProvider } from "../hooks/colorHook";
import ColorListContextWithStateCustomHook from "./color/ColorListContextWithStateCustomHook";
import AddColorFormControlledContextWithStateCustomHook from "./forms/AddColorFormControlledContextWithStateCustomHook";

/**
 * An example that uses react context (stateful)
 * but everything regardng the state is in a custom hook in a single module.
 */

export default function AppColorContextWithStateCustomHook() {
  return (
    <ColorProvider>
      <AddColorFormControlledContextWithStateCustomHook />
      <ColorListContextWithStateCustomHook />
    </ColorProvider>
  );
}
