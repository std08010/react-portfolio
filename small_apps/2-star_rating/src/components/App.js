import React from "react";

import StarRating from "./stars/StarRating";

/**
 * An example that uses hooks at the component level.
 * Also demonstrates passing multiple unknown arguments to component.
 */

export default function App() {
  return (
    <StarRating totalStars={5} style={{ backgroundColor: "lightblue" }} onDoubleClick={(e) => alert("Double Click")} />
  );
}
