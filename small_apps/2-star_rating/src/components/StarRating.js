import React, { useState } from "react";

import Star from "./Star";

// Array Constructor function
const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5, style = {}, ...props }) {
  //return createArray(totalStars).map((n, i) => <Star selected={i <= totalStars / 2 ? true : false} key={i} />);

  const [selectedStars, setSelectedStars] = useState(3);

  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStars).map((n, i) => (
        <Star selected={i < selectedStars} key={i} onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
