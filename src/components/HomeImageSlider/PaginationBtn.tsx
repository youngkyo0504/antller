import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import useSliderInfoContext from "@components/contexts/SliderContext/useSliderInfo";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FlagIcon,
} from "@heroicons/react/outline";
import React, { FC } from "react";
import tw from "twin.macro";
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
  const { isBgBlack } = useDarkBgContext();
  return (
    <>
      <button
        className="next group hidden sm:flex"
        tw="hidden sm:block"
        onClick={() => {
          if (isOnAnimation === true) return;
          setIsOnAnimation(true);
          paginate(1);
        }}
      >
        <ChevronRightIcon tw="mr-6 h-10 transition-all ease-in group-hover:(opacity-100)  opacity-0" />
      </button>
      <button
        tw="hidden sm:block"
        className="prev group"
        onClick={() => {
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

          top: 0;

          position: absolute;
          // background: black;
          color: ${isBgBlack ? "white" : "black"};
          transition-property: background-color, border-color, color, fill,
            stroke;
          transition-duration: 1000ms;

          border-radius: 30px;
          height: 100%;
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
