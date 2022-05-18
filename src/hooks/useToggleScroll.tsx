import { useEffect } from "react";

const useToggleScroll = (dependency: boolean) => {
  useEffect(() => {
    const app = document.querySelector<HTMLDivElement>("#__next");
    if (dependency) {
      document.documentElement.style.setProperty(
        "overflow-y",
        "scroll",
        "important"
      );
      document.documentElement.style.setProperty("height", "100%", "important");
      document.body.style.setProperty("height", "100%", "important");
      document.body.style.setProperty("overflow-y", "hidden", "important");

      app?.style.setProperty("height", "100%", "important");
      app?.style.setProperty("overflow", "hidden", "important");
    } else {
      document.documentElement.style.setProperty(
        "overflow-y",
        "scroll",
        "important"
      );
      document.documentElement.style.setProperty("height", "auto");
      document.body.style.setProperty("height", "auto");
      document.body.style.setProperty("overflow-y", "");

      app?.style.setProperty("height", "");
      app?.style.setProperty("overflow", "");
    }
  }, [dependency]);
};

export default useToggleScroll;
