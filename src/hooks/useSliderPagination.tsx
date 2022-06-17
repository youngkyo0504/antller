import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { SliderMediaInfo } from "@components/HomeImageSlider/sliderMediaInfo";
import { useCallback, useEffect, useState } from "react";

const useSliderPagination = (sliderInfos: SliderMediaInfo) => {
  const [page, setPage] = useState(0);
  const { isBgBlack, setIsBgBlack } = useDarkBgContext();

  const goto = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  useEffect(() => {
    setIsBgBlack(sliderInfos[page].isBgBlack);
  }, [page]);

  return { page, goto };
};

export default useSliderPagination;
