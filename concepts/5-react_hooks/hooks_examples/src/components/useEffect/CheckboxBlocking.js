import React, { useState } from "react";

/**
 * Demonstrate why the useEffectHook is needed.
 * The component will not render until OK is clicked on the alert popup.
 */

export default function CheckboxBlocking() {
  const [checked, setChecked] = useState(false);

  alert(`checked: ${checked.toString()}`);

  return (
    <>
      <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}
