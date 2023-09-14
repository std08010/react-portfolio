import React from "react";

import IngredientList from "./IngredientList";
import Instructions from "./Instructions";

export default function Recipe({ name = "untitled", ingredients = [], steps = [] }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientList data={ingredients} />
      <Instructions data={steps} title="Cooking Instructions" />
    </section>
  );
}
