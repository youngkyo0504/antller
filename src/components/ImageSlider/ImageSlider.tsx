import { ImageContainer } from "./ImageContainer";
import React, { FC, useEffect, useRef, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import "twin.macro";
import ProjectDescription from "./ProjectDescription";
import { useElementGeometry, useSliderPagination } from "@hooks";
import PaginationBtn from "./PaginationBtn";
import ProgressText from "./ProgressText";
import tw from "twin.macro";
import sliderMediaInfo from "./sliderMediaInfo.json";

interface HomeSliderProps {}

const SLIDER_DURATION = 1;

const ImageSlider: FC<HomeSliderProps> = () => {
  const { page, direction, paginate, imagePosition } =
    useSliderPagination(sliderMediaInfo);
  const [containerRef, containerHeight] = useElementGeometry<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, containerHeight], [0, 0.66]);
  const translateY = useTransform(scrollY, [0, containerHeight], [0, 300]);

  // local state
  const imageRef = useRef<HTMLDivElement>(null);
  const isOnAnimation = useRef<boolean>(false);
  console.log({ isAnimation: isOnAnimation.current });
  // const timerRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (imageRef.current) {
      // slide 이미지 변경
      imageRef.current.style.backgroundImage = `url('${sliderMediaInfo[page].imageSrc}')`;
    }
  }, [page]);

  return (
    <>
      <motion.header tw="relative w-full h-screen  flex flex-col justify-end  overflow-hidden">
        <motion.div
          ref={containerRef}
          tw="w-full h-full bg-black  absolute z-[12] top-0 left-0 "
          style={{ opacity }}
        />
        {sliderMediaInfo.map((media, index) => (
          <ImageContainer
            isOnAnimation={isOnAnimation}
            key={media.title}
            animationState={imagePosition[index]}
            index={index}
            direction={direction}
            duration={SLIDER_DURATION}
          />
        ))}
        <ProgressText
          {...{ page, isOnAnimation }}
          pagesLength={sliderMediaInfo.length}
          duration={SLIDER_DURATION}
          style={{ translateY }}
        />
        <ProjectDescription
          {...{ isOnAnimation }}
          delay={SLIDER_DURATION}
          description={{
            title: sliderMediaInfo[page].title,
            desc: sliderMediaInfo[page].desc,
          }}
          style={{ translateY }}
        />
        <PaginationBtn {...{ paginate, isOnAnimation }} />
      </motion.header>
    </>
  );
};

export default ImageSlider;
