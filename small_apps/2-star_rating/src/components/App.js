import React from "react";

import StarRating from "./StarRating";

export default function App() {
  return (
    <StarRating totalStars={5} style={{ backgroundColor: "lightblue" }} onDoubleClick={(e) => alert("Double Click")} />
  );
}
