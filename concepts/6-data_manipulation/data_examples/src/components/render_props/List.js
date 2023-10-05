/**
 * This component shows how to use render props.
 */

import React from "react";

export default function List({ data = [], renderItem, renderEmpty }) {
  if (!data.length) return renderEmpty;
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
