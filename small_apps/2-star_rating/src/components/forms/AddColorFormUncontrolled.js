/**
 * This component is a simple form that uses the useRef hook
 * So this makes it an uncontrolled component because it manipulates directly the DOM.
 * It is imperative.
 */

import React, { useRef } from "react";
import { css } from "@emotion/css";

export default function AddColorFormUncontrolled({ onNewColor = (f) => f }) {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault(); //this prevents the browser from trying to submit the form with a POST request.

    const title = txtTitle.current.value;
    const color = hexColor.current.value;

    onNewColor(title, color);

    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form
      className={css`
        display: flex;
        justify-content: space-around;
        margin: 0.25em;
        button {
          margin: 0.25em;
        }
        input {
          margin: 0.25em;
          &:first-child {
            flex: 1;
          }
        }
      `}
      onSubmit={submit}
    >
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  );
}
