import { useCallback, useEffect, useState } from "react";
import { circle } from "src/util";

const useSliderPagination = (sliderInfos: any[]) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imagePosition, setImagePosition] = useState<{ [x: number]: string }>(
    {}
  );

  // 순환식 pagination 끝까지 오면 처음으로 돌아감
  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([page, direction]) => {
        const updatePage = page + newDirection;
        const adjustedPage = circle(sliderInfos.length, updatePage);
        return [adjustedPage, newDirection];
      });
    },
    [sliderInfos]
  );

  useEffect(() => {
    const [next, pre] = [
      circle(sliderInfos.length, page + 1),
      circle(sliderInfos.length, page - 1),
    ];
    const imagePos = {
      [next]: "next",
      [pre]: "pre",
      [page]: "current",
    };

    setImagePosition(imagePos);
  }, [page]);

  return { page, direction, paginate, imagePosition };
};

export default useSliderPagination;
