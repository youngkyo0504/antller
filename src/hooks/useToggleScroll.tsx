import { useEffect } from "react";

const useToggleScroll = (dependency: boolean) => {
  useEffect(() => {
    if (dependency) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [dependency]);
};

export default useToggleScroll;
