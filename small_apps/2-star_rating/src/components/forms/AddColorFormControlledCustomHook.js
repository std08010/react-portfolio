/**
 * This component is a simple form that uses out custom hook 'useInput'
 */

import React from "react";

import { useInput } from "../hooks/useInput";

export default function AddColorFormControlledCustomHook({ onNewColor = (f) => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault(); //this prevents the browser from trying to submit the form with a POST request.

    onNewColor(titleProps.value, colorProps.value);

    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title..." required />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}
