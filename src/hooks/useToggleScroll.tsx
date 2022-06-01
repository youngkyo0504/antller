import { useEffect } from "react";

const useToggleScroll = (dependency: boolean) => {
  useEffect(() => {
    if (dependency) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "overlay";
    }
  }, [dependency]);
};

export default useToggleScroll;
