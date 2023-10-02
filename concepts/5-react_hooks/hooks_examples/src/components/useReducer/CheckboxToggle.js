import React, { useState } from "react";

export default function CheckboxToggle() {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked((checked) => !checked);
  }

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}
