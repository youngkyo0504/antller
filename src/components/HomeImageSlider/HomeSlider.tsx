import React, { FC, useRef } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import tw from "twin.macro";
import { useElementGeometry, useSliderPagination } from "@hooks";
import PaginationBtn from "./PaginationBtn";
import ProgressText from "./ProgressText";
import sliderMediaInfo from "./sliderMediaInfo";
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

  const { page, onPlay } = useSliderPagination(sliderMediaInfo);
  const carousel = useRef<ImageSliderHandle>(null);

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
          onComplete={() => {}}
          draggable={isTouchDevice ? true : false}
          onPlay={onPlay}
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
