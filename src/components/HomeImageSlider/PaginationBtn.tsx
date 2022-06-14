import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import useSliderInfoContext from "@components/contexts/SliderContext/useSliderInfo";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { FC } from "react";
import tw from "twin.macro";

interface PaginationBtnProps {}
export const PaginationBtns: FC<PaginationBtnProps> = ({}) => {
  const { setIsOnAnimation, paginate, isOnAnimation } = useSliderInfoContext();
  const { isBgBlack } = useDarkBgContext();

  return (
    <>
      <div
        className="next group hidden "
        tw="hidden sm:flex"
        onClick={() => {
          if (isOnAnimation === true) return;
          setIsOnAnimation(true);
          paginate(1);
        }}
      >
        <ChevronRightIcon tw=" h-10 transition-all ease-in group-hover:(opacity-100)  opacity-0" />
      </div>
      <div
        tw="hidden sm:flex"
        className="prev group"
        onClick={() => {
          if (isOnAnimation === true) return;
          setIsOnAnimation(true);
          paginate(-1);
        }}
      >
        <ChevronLeftIcon tw=" h-10  transition-all ease-in group-hover:(opacity-100)  opacity-0" />
      </div>
      <style jsx>{`
        .next,
        .prev {
          min-width: 120px;
          width: 13vw;

          top: 0;
          justify-content: center;
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
          right: 0px;
        }

        .prev {
          left: 0px;
        }
      `}</style>
    </>
  );
};
export default PaginationBtns;
