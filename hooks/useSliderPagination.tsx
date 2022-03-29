import { useCallback, useState } from "react";

const useSliderPagination = (sliderInfos: any[]) => {
  const [[page, direction], setPage] = useState([0, 0]);
  // 순환식 pagination 끝까지 오면 처음으로 돌아감
  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([page, direction]) => {
        const updatePage = page + newDirection;
        if (updatePage < 0) {
          return [sliderInfos.length - 1, newDirection];
        } else {
          return [updatePage % sliderInfos.length, newDirection];
        }
      });
    },
    [sliderInfos]
  );
  return { page, direction, paginate };
};

export default useSliderPagination;
