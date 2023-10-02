/**
 * usage of the useMemo hook.
 */

import React, { useEffect, useMemo } from "react";
import useAnyKeyToRender from "../../hooks/useAnyKeyToRender";

export default function WordCountUseMemo({ children = "" }) {
  useAnyKeyToRender();

  //Now words keeps the same instance on every rerendering
  //but when children changes then useMemo will not return the cached instance
  //but it will return a new instance.
  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}
