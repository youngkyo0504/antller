import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { debounce, getFPS } from "src/util";

const useWindowGeometry = () => {
  const [windowHeight, setWindowHeight] = useState(600);
  const [windowWidth, setWindowWidth] = useState(500);
  const resize = useCallback(
    debounce(() => {
      console.log("됐다.");
      const { innerWidth, innerHeight } = window;
      setWindowHeight(innerHeight);
      setWindowWidth(innerWidth);
    }, getFPS(60)),
    [setWindowHeight, setWindowWidth]
  );

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resize, { passive: false });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return { windowHeight, windowWidth };
};

export default useWindowGeometry;
