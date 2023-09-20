import React from "react";

import Star from "./Star";
import { createArray } from "../utils/helperFunctions";

export default function StarRatingNoHook({ totalStars = 5, selectedStars = 0, onRate = (f) => f }) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star selected={i < selectedStars} key={i} onSelect={() => onRate(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
