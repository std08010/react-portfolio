import React from "react";
import Color from "./Color";
import { css } from "@emotion/css";

export default function ColorList({ colors = [], onRemoveColor = (f) => f, onRateColor = (f) => f }) {
  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {colors.map((color) => (
        <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor} />
      ))}
    </div>
  );
}
