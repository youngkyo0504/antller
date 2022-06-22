import { useContext, useEffect } from "react";
import useHomePath from "src/hooks/useHomePath";
import { DarkBgContext } from "./DarkBgProvider";

const useDarkBgContext = (initialState?: boolean) => {
  const darkBgContext = useContext(DarkBgContext);
  if (!darkBgContext) {
    throw new Error("there is no darkBgContext");
  }
  const { isHome } = useHomePath();
  const { isBgBlack, setIsBgBlack } = darkBgContext;

  useEffect(() => {
    if (initialState !== undefined) setIsBgBlack(initialState);
  }, []);

  useEffect(() => {
    if (isBgBlack && !isHome) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [isBgBlack, isHome]);

  return darkBgContext;
};
export default useDarkBgContext;
