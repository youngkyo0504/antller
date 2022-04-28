import tw from "twin.macro";
import React, { createContext, FC, useState } from "react";

interface DarkBgProviderProps {}
interface DarkBgContextProps {
  isBgBlack: boolean;
  setIsBgBlack: React.Dispatch<React.SetStateAction<boolean>>;
}
const DarkBgContext = createContext<DarkBgContextProps | null>(null);
const DarkBgProvider: FC<DarkBgProviderProps> = ({ children }) => {
  const [isBgBlack, setIsBgBlack] = useState<boolean>(false);
  return (
    <DarkBgContext.Provider value={{ isBgBlack, setIsBgBlack }}>
      {children}
    </DarkBgContext.Provider>
  );
};

export { DarkBgProvider, DarkBgContext };
