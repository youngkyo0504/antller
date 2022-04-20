import { ImageContainer } from "./ImageContainer";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import "twin.macro";
import ProjectDescription from "./ProjectDescription";
import sliderImagesInfo from "src/datas/imagesInfo/imageSliderData";
import {
  useElementClientHeight,
  usePreloadImage,
  useSliderPagination,
} from "@hooks";
import PaginationBtn from "./PaginationBtn";
import ProgressText from "./ProgressText";
import tw from "twin.macro";
interface HomeSliderProps {}
const SLIDER_DURATION = 0.8;

const HomeSlider: FC<HomeSliderProps> = () => {
  usePreloadImage(sliderImagesInfo);
  const { page, direction, paginate } = useSliderPagination(sliderImagesInfo);
  const [containerRef, containerHeight] =
    useElementClientHeight<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, containerHeight], [0, 0.66]);
  const translateY = useTransform(scrollY, [0, containerHeight], [0, 300]);

  // local state
  const [isEndAnimation, setIsEndAnimation] = useState(true);
  const imageRef = useRef<HTMLDivElement>(null);
  // const timerRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (imageRef.current) {
      // slide 이미지 변경
      imageRef.current.style.backgroundImage = `url('${sliderImagesInfo[page].src}')`;
    }
  }, [page]);

  return (
    <>
      <motion.header tw="relative w-full h-screen  flex flex-col justify-end  overflow-hidden">
        <motion.div
          ref={containerRef}
          tw="w-full h-full bg-black  absolute z-[2] top-0 left-0 "
          style={{ opacity }}
        />
        <AnimatePresence initial={false} custom={direction}>
          <ImageContainer
            key={page}
            duration={SLIDER_DURATION}
            setIsEndAnimation={setIsEndAnimation}
            direction={direction}
            imageRef={imageRef}
            style={{ translateY }}
          >
            <div tw="w-full h-screen absolute z-[-1]"></div>
            <ProjectDescription
              delay={SLIDER_DURATION}
              description={{
                title: "National Gallery",
                desc: "Industrial design of IPU and Rack Mount Chassis for a machine learning start-up",
              }}
            />
          </ImageContainer>
          <ProgressText
            page={page}
            pagesLength={sliderImagesInfo.length}
            isEndAnimation={isEndAnimation}
            duration={SLIDER_DURATION}
            style={{ translateY }}
          />
        </AnimatePresence>

        <PaginationBtn
          isEndAnimation={isEndAnimation}
          paginate={paginate}
          setIsEndAnimation={setIsEndAnimation}
        />
      </motion.header>
      <div className="h-screen"></div>
    </>
  );
};

export default HomeSlider;
