/**
 * This component is a simple form that uses out custom hook 'useInput'
 * It also uses react context instead of useState at component root
 */

import React, { useContext } from "react";

import { useInput } from "../../hooks/useInput";
import ColorContext from "../context/ColorContext";

export default function AddColorFormControlledCustomHookContextWithState() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const { addColor } = useContext(ColorContext);

  const submit = (e) => {
    e.preventDefault(); //this prevents the browser from trying to submit the form with a POST request.

    addColor(titleProps.value, colorProps.value);

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
