import { useEffect } from "react";

const useColorScheme = () => {
  useEffect(() => {
    document.documentElement.style.colorScheme = "dark";
    return () => {
      document.documentElement.style.colorScheme = "";
    };
  }, []);
};

export default useColorScheme;
