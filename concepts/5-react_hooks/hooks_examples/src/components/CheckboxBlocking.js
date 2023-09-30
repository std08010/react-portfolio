import React, { useState } from "react";

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
