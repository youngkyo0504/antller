import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import { ImageSliderHandle } from "@components/ImageSlider/ImageSlider";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { FC, useCallback } from "react";
import tw from "twin.macro";

interface PaginationBtnProps {
  carousel: React.RefObject<ImageSliderHandle>;
}
export const PaginationBtns: FC<PaginationBtnProps> = ({ carousel }) => {
  const { isBgBlack } = useDarkBgContext();

  const slideNext = useCallback(() => {
    if (carousel.current?.isAnimating() === true) return;
    carousel.current?.slideNext();
  }, [carousel]);

  const slidePrev = useCallback(() => {
    if (carousel.current?.isAnimating() === true) return;
    carousel.current?.slidePrev();
  }, [carousel]);

  return (
    <>
      <div
        className="next group hidden "
        tw="hidden sm:flex"
        onClick={slideNext}
      >
        <ChevronRightIcon tw=" h-10  group-hover:(opacity-100)  opacity-0" />
      </div>
      <div tw="hidden sm:flex" className="prev group" onClick={slidePrev}>
        <ChevronLeftIcon tw=" h-10   group-hover:(opacity-100)  opacity-0" />
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
