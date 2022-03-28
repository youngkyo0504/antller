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
      <motion.header className="relative w-full header-background   h-screen  flex flex-col justify-end  overflow-hidden ">
        <motion.div
          ref={containerRef}
          className="w-full h-full bg-black  absolute z-[2] top-0 left-0 "
          style={{ opacity }}
        />
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            ref={imageRef}
            onAnimationComplete={(definition) => {
              setIsEndAnimation(true);
            }}
            style={{ translateY }}
            className="z-[1] top-0 absolute h-full w-full bg-cover bg-no-repeat"
            key={page}
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
            <motion.div className="max-w-content h-full leading-normal  w-full pb-10 text-3xl flex justify-between  text-white mx-auto items-end z-[3] ">
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
              <div className="absolute bottom-0"></div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-10  text-white z-30 text-3xl  w-full mx-auto">
          <div className=" max-w-content mx-auto justify-end text-right flex items-center">
            <span className=" align-top inline-block leading-normal  ">1</span>

            {/* <motion.svg className={"h-8 w-8"}>
              <MinusIcon className="h-8  stroke-[1px]" />
            </motion.svg> */}
            <motion.span
              transition={{
                duration: SLIDER_DURATION,
                ease: "easeOut",
              }}
              variants={rotateVariants}
              animate={isEndAnimation ? "stop" : "rotate"}
              className="inline-block origin-center text-2xl mx-[0.7rem]"
            >
              /
            </motion.span>
            <span className="leading-normal">4</span>
          </div>
        </div>
        <div
          className="next"
          onClick={() => {
            if (isEndAnimation) {
              paginate(1);
              setIsEndAnimation(false);
              timerRef.current?.refresh();
            }
          }}
        >
          <ChevronRightIcon />
        </div>
        <div
          className="prev"
          onClick={() => {
            if (isEndAnimation) {
              paginate(-1);
              setIsEndAnimation(false);
              timerRef.current?.refresh();
            }
          }}
        >
          <ChevronLeftIcon />
        </div>
        <style jsx>{`
          .next,
          .prev {
            top: calc(50% - 20px);
            position: absolute;
            background: black;
            color: white;
            border-radius: 30px;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            user-select: none;
            cursor: pointer;
            font-weight: bold;
            font-size: 18px;
            z-index: 3;
          }
          .next {
            right: 10px;
          }

          .prev {
            left: 10px;
          }
        `}</style>
      </motion.header>
      <div className="h-screen "></div>
    </>
  );
};

export default HomeSlider;
