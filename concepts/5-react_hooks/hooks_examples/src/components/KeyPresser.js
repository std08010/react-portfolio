import React, { useEffect, useState } from "react";
import useAnyKeyToRender from "../hooks/useAnyKeyToRender";

export default function KeyPresser() {
  useAnyKeyToRender();

  useEffect(() => {
    console.log("fresh render");
  });

  return <h1>Open the console</h1>;
}
