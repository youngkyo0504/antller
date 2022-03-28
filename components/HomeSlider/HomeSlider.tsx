import { ImageContainer } from "./ImageContainer";
import { ProgressText } from "./ProgressText";
import { PaginationBtns } from "./PaginationBtns";
import React, { FC, useEffect, useRef, useState } from "react";
import sliderImagesInfo from "../../data/imagesInfo/imageSlider";
import {
  onVariants,
  rotateVariants,
  sliderVariants,
} from "../../data/variants";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  MinusIcon,
} from "@heroicons/react/outline";
import { useElementClientHeight, useSliderPagination } from "../../hooks";
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import usePreloadImage from "../../hooks/usePreloadImage";
import "twin.macro";
interface HomeSliderProps {}

// TODO
// - [] 버튼 태그 만들기 (prev,next)
//      - [] 호버시 버튼 보이기
//      - []
// - [] 코드 깔끔하게

const SLIDER_DURATION = 0.5;

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
  const timerRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (imageRef.current)
      imageRef.current.style.backgroundImage = `url('${sliderImagesInfo[page].src}')`;
  }, [page]);

  return (
    <>
      <motion.header tw="relative w-full   h-screen  flex flex-col justify-end  overflow-hidden ">
        <motion.div
          ref={containerRef}
          tw="w-full h-full bg-black  absolute z-[2] top-0 left-0 "
          style={{ opacity }}
        />
        <AnimatePresence initial={false} custom={direction}>
          <ImageContainer
            imageRef={imageRef}
            setIsEndAnimation={setIsEndAnimation}
            page={page}
            direction={direction}
          />
          <motion.div tw="max-w-content h-full leading-normal  w-full pb-10 text-3xl flex justify-between  text-white mx-auto items-end z-[3] ">
            <motion.div
              animate="visible"
              variants={onVariants}
              custom={""}
              initial="hidden"
              transition={{
                delay: SLIDER_DURATION,
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h2>National Gallery</h2>
              <h3>
                Industrial design of IPU and Rack Mount Chassis for a machine
                learning start-up
              </h3>
            </motion.div>
            <div tw="absolute bottom-0"></div>
          </motion.div>
        </AnimatePresence>
        <ProgressText
          duration={SLIDER_DURATION}
          isEndAnimation={isEndAnimation}
        />
        <PaginationBtns
          isEndAnimation={isEndAnimation}
          paginate={paginate}
          setIsEndAnimation={setIsEndAnimation}
        />
      </motion.header>
      <div className="h-screen "></div>
    </>
  );
};

export default HomeSlider;
