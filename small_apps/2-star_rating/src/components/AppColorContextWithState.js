import React from "react";

import ColorContextProvider from "./context/ColorContextProvider";
import ColorListContextWithState from "./color/ColorListContextWithState";
import AddColorFormControlledCustomHookContextWithState from "./forms/AddColorFormControlledCustomHookContextWithState";

/**
 * An example that uses react context (stateful)
 */

export default function AppColorContextWithState() {
  return (
    <ColorContextProvider>
      <AddColorFormControlledCustomHookContextWithState />
      <ColorListContextWithState />
    </ColorContextProvider>
  );
}
