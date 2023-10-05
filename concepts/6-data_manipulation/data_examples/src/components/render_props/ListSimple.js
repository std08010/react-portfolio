import React from "react";
import tahoe_peaks from "../../data/tahoe_peaks.json";

export default function ListSimple() {
  return (
    <ul>
      {tahoe_peaks.map((peak, i) => (
        <li key={i}>
          {peak.name} - {peak.elevation.toLocaleString()}ft
        </li>
      ))}
    </ul>
  );
}
