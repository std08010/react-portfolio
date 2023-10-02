import React, { useState } from "react";

export default function CheckboxSimple() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)} />
      {checked ? "checked" : "not checked"}
    </>
  );
}
