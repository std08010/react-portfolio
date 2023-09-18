import React from "react";

import Ingredient from "./Ingredient";

export default function IngredientList({ data = [] }) {
  return (
    <ul className="ingredients">
      {data.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
}
