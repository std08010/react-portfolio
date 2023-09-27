/**
 * This component is a simple form that uses the useState hook
 * so it holds state inside it and doesn't manipulate directly the DOM.
 * So this makes it an controlled component.
 */

import React, { useState } from "react";

export default function AddColorFormControlled({ onNewColor = (f) => f }) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault(); //this prevents the browser from trying to submit the form with a POST request.

    onNewColor(title, color);

    setTitle("");
    setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input value={color} onChange={(event) => setColor(event.target.value)} type="color" required />
      <button>ADD</button>
    </form>
  );
}
