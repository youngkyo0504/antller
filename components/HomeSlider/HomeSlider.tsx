import { ImageContainer } from "./ImageContainer";
import { PaginationBtns } from "./PaginationBtn";
import React, { FC, useEffect, useRef, useState } from "react";
import sliderImagesInfo from "../../data/imagesInfo/imageSlider";
import { sliderVariants } from "../../data/variants";
import { useElementClientHeight, useSliderPagination } from "../../hooks";
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import usePreloadImage from "../../hooks/usePreloadImage";
import "twin.macro";
import ProgressText from "./progressText";
import ProjectDescription from "./ProjectDescription";
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
  // const timerRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (imageRef.current)
      // slide 이미지 변경
      imageRef.current.style.backgroundImage = `url('${sliderImagesInfo[page].src}')`;
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
          <motion.div
            ref={imageRef}
            onAnimationComplete={(definition) => {
              setIsEndAnimation(true);
              console.log("애니메이션 끝");
            }}
            style={{ translateY }}
            tw="z-[1] top-0 absolute h-full w-full bg-cover bg-no-repeat "
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: SLIDER_DURATION,
              ease: "easeInOut",
            }}
          >
            <ProjectDescription
              delay={SLIDER_DURATION}
              description={{
                title: "National Gallery",
                desc: "Industrial design of IPU and Rack Mount Chassis for a machine learning start-up",
              }}
            />
            <ProgressText
              isEndAnimation={isEndAnimation}
              duration={SLIDER_DURATION}
            />
          </motion.div>
        </AnimatePresence>

        <PaginationBtns
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
