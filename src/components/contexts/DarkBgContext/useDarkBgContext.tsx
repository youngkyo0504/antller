import { useContext } from "react";
import { DarkBgContext } from "./DarkBgProvider";

const useDarkBgContext = () => {
  const darkBgContext = useContext(DarkBgContext);
  if (!darkBgContext) {
    throw new Error("there is no darkBgContext");
  }
  return darkBgContext;
};
export default useDarkBgContext;
