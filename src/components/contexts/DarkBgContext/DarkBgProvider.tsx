import tw from "twin.macro";
import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useHomePath from "src/hooks/useHomePath";
import { useRouter } from "next/router";

interface DarkBgProviderProps {}
interface DarkBgContextProps {
  isBgBlack: boolean;
  setIsBgBlack: React.Dispatch<React.SetStateAction<boolean>>;
  bgBlackCache: React.MutableRefObject<boolean | null>;
}

const DarkBgContext = createContext<DarkBgContextProps | null>(null);
const DarkBgProvider: FC<DarkBgProviderProps> = ({ children }) => {
  const [isBgBlack, setIsBgBlack] = useState<boolean>(false);
  const bgBlackCache = useRef<boolean | null>(null);

  useEffect(() => {
    if (isBgBlack) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [isBgBlack]);

  return (
    <DarkBgContext.Provider value={{ isBgBlack, setIsBgBlack, bgBlackCache }}>
      {children}
    </DarkBgContext.Provider>
  );
};

export { DarkBgProvider, DarkBgContext };
