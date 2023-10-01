import { useEffect, useState } from "react";

/**
 * Custom hook that changes the context everytime a key is pressed
 * thus forcing the component that uses it to rerender everytime.
 * It uses a useEffect hook that performs a setup and a teardown.
 */

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender); //setup
    return () => window.removeEventListener("keydown", forceRender); //teardown
  }, []); //called once on the initial rendering
};

export default useAnyKeyToRender;
