import { useContext, useEffect } from "react";
import { DarkBgContext } from "./DarkBgProvider";

const useDarkBgContext = (initialState?: boolean) => {
  const darkBgContext = useContext(DarkBgContext);
  if (!darkBgContext) {
    throw new Error("there is no darkBgContext");
  }
  const { isBgBlack, setIsBgBlack } = darkBgContext;

  useEffect(() => {
    if (initialState !== undefined) setIsBgBlack(initialState);
  }, []);

  return darkBgContext;
};
export default useDarkBgContext;
