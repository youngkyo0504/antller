import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const useHomePath = () => {
  const [isHome, setIsHome] = useState(false);
  const { pathname } = useRouter();
  const path = pathname.split("/")[1];

  useEffect(() => {
    setIsHome(path === "");
  }, [pathname]);

  return { isHome, path };
};
export default useHomePath;
