import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { SliderMediaInfo } from "@components/HomeImageSlider/sliderMediaInfo";
import { useCallback, useEffect, useState } from "react";
import { circle } from "src/util";

const useSliderPagination = (sliderInfos: SliderMediaInfo) => {
  const [page, setPage] = useState(0);
  const { isBgBlack, setIsBgBlack } = useDarkBgContext();

  const goto = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  useEffect(() => {
    setIsBgBlack(sliderInfos[page].isBgBlack);
  }, []);

  const onPlay = (newIndex: number) => {
    const circleIndex = circle(sliderInfos.length, newIndex);
    setIsBgBlack(sliderInfos[circleIndex].isBgBlack);
    goto(circleIndex);
  };

  return { page, goto, onPlay };
};

export default useSliderPagination;
