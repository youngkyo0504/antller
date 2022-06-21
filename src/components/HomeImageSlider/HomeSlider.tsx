import React, { FC, useEffect, useRef } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import tw from "twin.macro";
import { useElementGeometry, useSliderPagination } from "@hooks";
import PaginationBtn from "./PaginationBtn";
import ProgressText from "./ProgressText";
import sliderMediaInfo from "./sliderMediaInfo";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import ImageSlider from "@components/ImageSlider";
import { ImageSliderHandle } from "@components/ImageSlider/ImageSlider";
import { ItemContainer } from "./ItemContainer";
import useIsTouchDevice from "src/hooks/useIsTouchDevice";

interface HomeSliderProps {}

const HomeSlider: FC<HomeSliderProps> = () => {
  const [containerRef, containerHeight] = useElementGeometry<HTMLDivElement>();
  const isTouchDevice = useIsTouchDevice();
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, containerHeight], [0, 0.66]);

  const translateY = useTransform(
    scrollY,
    [0, containerHeight],
    [0, containerHeight / 2]
  );
  const { isBgBlack, setIsBgBlack } = useDarkBgContext();

  // const { paginate, goto, page, direction } = useSliderInfoContext();
  const { goto, page } = useSliderPagination(sliderMediaInfo);
  const carousel = useRef<ImageSliderHandle>(null);

  useEffect(() => {
    setTimeout(() => {
      document.body.style.background = "white";
    }, 0);
    return () => {
      if (isBgBlack) {
        document.body.style.backgroundColor = "black";
      }
    };
  }, [isBgBlack]);

  return (
    <>
      <header tw="relative w-full sm:h-screen h-[115.625vw]  flex flex-col justify-end  overflow-hidden">
        <motion.div
          ref={containerRef}
          tw="w-full h-full bg-black  absolute  top-0 left-0 z-10 pointer-events-none"
          style={{ opacity, translateY }}
        />

        <ImageSlider
          style={{ translateY }}
          tw="w-full h-full"
          ref={carousel}
          count={1}
          margin={0}
          autoplayInterval={3000}
          onComplete={() => {
            // setIsBgBlack(sliderMediaInfo[page].isBgBlack);
          }}
          draggable={isTouchDevice ? true : false}
          onChange={(newIndex: number): void => {
            setIsBgBlack(sliderMediaInfo[newIndex].isBgBlack);
            goto(newIndex);
          }}
        >
          {sliderMediaInfo.map((media, index) => (
            <ItemContainer key={media.title} index={index} />
          ))}
        </ImageSlider>

        <ProgressText
          pagesLength={sliderMediaInfo.length}
          style={{ translateY }}
          page={page}
        />

        <PaginationBtn {...{ carousel }} />
      </header>
    </>
  );
};

export default HomeSlider;
