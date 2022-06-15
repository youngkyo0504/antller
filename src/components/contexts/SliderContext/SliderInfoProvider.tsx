import tw from "twin.macro";
import React, { createContext, FC, useState } from "react";
import { useSliderPagination } from "@hooks";
import sliderImagesInfo from "src/datas/imagesInfo/imageSliderData";
import sliderMediaInfo from "@components/HomeImageSlider/sliderMediaInfo";
import { MotionValue } from "framer-motion";

interface DarkBgProviderProps {}
interface SliderInfoContextProps {
  page: number;
  direction: number;
  paginate: (newDirection: number) => void;
  imagePosition: {
    [x: number]: "current" | "next" | "pre";
  };
  goto: (page: number) => void;
  isOnAnimation: boolean;
  setIsOnAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const SliderInfoContext = createContext<SliderInfoContextProps | null>(null);
const SliderInfoProvider: FC<DarkBgProviderProps> = ({ children }) => {
  const { page, direction, paginate, imagePosition, goto } =
    useSliderPagination(sliderMediaInfo);
  const [isOnAnimation, setIsOnAnimation] = useState(false);

  return (
    <SliderInfoContext.Provider
      value={{
        page,
        direction,
        paginate,
        goto,
        imagePosition,
        isOnAnimation,
        setIsOnAnimation,
      }}
    >
      {children}
    </SliderInfoContext.Provider>
  );
};

export { SliderInfoContext, SliderInfoProvider };
