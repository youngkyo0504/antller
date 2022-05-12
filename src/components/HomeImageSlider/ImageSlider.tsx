import { ImageContainer } from "./ImageContainer";
import React, { FC, useEffect, useRef, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import ProjectDescription from "./ProjectDescription";
import { useElementGeometry, useSliderPagination } from "@hooks";
import PaginationBtn from "./PaginationBtn";
import ProgressText from "./ProgressText";
import tw from "twin.macro";
import sliderMediaInfo from "./sliderMediaInfo";
import { SliderInfoProvider } from "@components/contexts/SliderContext/SliderInfoProvider";

interface HomeSliderProps {}

const SLIDER_DURATION = 1;

const ImageSlider: FC<HomeSliderProps> = () => {
  const [containerRef, containerHeight] = useElementGeometry<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, containerHeight], [0, 0.66]);
  const translateY = useTransform(scrollY, [0, containerHeight], [0, 300]);

  return (
    <>
      <SliderInfoProvider>
        <motion.header tw="relative w-full h-screen  flex flex-col justify-end  overflow-hidden">
          <motion.div
            ref={containerRef}
            tw="w-full h-full bg-black  absolute z-[12] top-0 left-0 "
            style={{ opacity }}
          />
          {sliderMediaInfo.map((media, index) => (
            <ImageContainer
              key={media.title}
              index={index}
              duration={SLIDER_DURATION}
            />
          ))}
          <ProgressText
            pagesLength={sliderMediaInfo.length}
            duration={SLIDER_DURATION}
            style={{ translateY }}
          />
          <ProjectDescription delay={SLIDER_DURATION} style={{ translateY }} />
          <PaginationBtn />
        </motion.header>
      </SliderInfoProvider>
    </>
  );
};

export default ImageSlider;
