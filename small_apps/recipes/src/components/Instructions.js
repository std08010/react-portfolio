import React from "react";

export default function Instructions({ title = "Cooking Instructions", data = [] }) {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {data.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
    </section>
  );
}
