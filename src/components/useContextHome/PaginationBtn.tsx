import useSliderInfoContext from "@components/contexts/SliderContext/useSliderInfo";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FlagIcon,
} from "@heroicons/react/outline";
import React, { FC } from "react";
import "twin.macro";
interface PaginationBtnProps {}
export const PaginationBtns: FC<PaginationBtnProps> = ({}) => {
  const {
    setIsOnAnimation,
    paginate,
    isOnAnimation,
    page,
    imagePosition,
    direction,
  } = useSliderInfoContext();
  return (
    <>
      <button
        className="next group"
        tw=""
        onClick={() => {
          console.log({ isOnAnimation }, "클릭했을 때");
          if (isOnAnimation === true) return;
          setIsOnAnimation(true);
          paginate(1);
        }}
      >
        <ChevronRightIcon tw="mr-6 h-10 transition-all ease-in group-hover:(opacity-100)  opacity-0" />
      </button>
      <button
        tw=""
        className="prev group"
        onClick={() => {
          console.log({ isOnAnimation }, "클릭했을 때");
          if (isOnAnimation === true) return;
          setIsOnAnimation(true);
          paginate(-1);
        }}
      >
        <ChevronLeftIcon tw="ml-6 h-10  transition-all ease-in group-hover:(opacity-100)  opacity-0" />
      </button>
      <style jsx>{`
        .next,
        .prev {
          min-width: 120px;
          width: 13vw;
          // top: calc(50% - 20px);
          top: 0;

          position: absolute;
          // background: black;
          color: white;
          border-radius: 30px;
          height: 100%;
          display: flex;
          align-items: center;
          user-select: none;
          cursor: pointer;
          font-weight: bold;
          font-size: 18px;
          z-index: 13;
        }
        .next {
          right: 20px;
          justify-content: end;
        }

        .prev {
          left: 20px;
        }
      `}</style>
    </>
  );
};
export default PaginationBtns;
