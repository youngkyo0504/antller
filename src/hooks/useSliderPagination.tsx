import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { SliderMediaInfo } from "@components/HomeImageSlider/sliderMediaInfo";
import { animate, motionValue, useMotionTemplate } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { circle } from "src/util";

interface ItemPosition {
  [x: number]: "current" | "next" | "pre";
}

const useSliderPagination = (sliderInfos: SliderMediaInfo) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imagePosition, setImagePosition] = useState<ItemPosition>({});
  const { isBgBlack, setIsBgBlack } = useDarkBgContext();

  // 순환식 pagination 끝까지 오면 처음으로 돌아감
  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([page, direction]) => {
        const updatePage = page + newDirection;
        const adjustedPage = circle(sliderInfos.length, updatePage);
        console.log(adjustedPage);
        return [adjustedPage, newDirection];
      });
    },
    [sliderInfos]
  );
  const goto = useCallback((page: number) => {
    setPage([page, 1]);
  }, []);
  useEffect(() => {
    const [next, pre] = [
      circle(sliderInfos.length, page + 1),
      circle(sliderInfos.length, page - 1),
    ];

    const imagePos: ItemPosition = {
      [next]: "next",
      [pre]: "pre",
      [page]: "current",
    };

    setImagePosition(imagePos);
  }, [page]);

  useEffect(() => {
    setIsBgBlack(sliderInfos[page].isBgBlack);
  }, [page]);

  return { page, direction, paginate, imagePosition, goto };
};

export default useSliderPagination;
