import React from "react";
import StarRatingNoHook from "../stars/StarRatingNoHook";
import { FaTrash } from "react-icons/fa";

export default function Color({ id, title, color, rating, onRemove = (f) => f, onRate = (f) => f }) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, width: 100, backgroundColor: color }} />
      <StarRatingNoHook selectedStars={rating} onRate={(rating) => onRate(id, rating)} />
    </section>
  );
}
