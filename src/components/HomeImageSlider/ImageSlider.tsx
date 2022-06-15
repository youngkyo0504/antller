import { ImageContainer } from "./ImageContainer";
import React, { FC, useEffect, useRef } from "react";
import {
  animate,
  BoundingBox,
  motion,
  motionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import ProjectDescription from "./ProjectDescription";
import {
  useElementGeometry,
  useSliderPagination,
  useWindowGeometry,
} from "@hooks";
import PaginationBtn from "./PaginationBtn";
import ProgressText from "./ProgressText";
import sliderMediaInfo from "./sliderMediaInfo";
import { SliderInfoProvider } from "@components/contexts/SliderContext/SliderInfoProvider";
import tw from "twin.macro";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import useSliderInfoContext from "@components/contexts/SliderContext/useSliderInfo";

interface HomeSliderProps {}

const SLIDER_DURATION = 1;
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
const ImageSlider: FC<HomeSliderProps> = () => {
  const [containerRef, containerHeight] = useElementGeometry<HTMLDivElement>();
  const { windowWidth, windowHeight } = useWindowGeometry();
  const windowKey = `${windowWidth}${windowHeight}`;
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, containerHeight], [0, 0.66]);
  const translateY = useTransform(
    scrollY,
    [0, containerHeight],
    [0, containerHeight / 2]
  );
  const parallaxY = useTransform(
    scrollY,
    [0, containerHeight],
    [0, containerHeight / 2]
  );
  const { isBgBlack, setIsBgBlack } = useDarkBgContext();

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
  const ref = useRef<Partial<BoundingBox>>({ left: 0, right: 300 });
  const { paginate } = useSliderInfoContext();
  const x = motionValue<number>(0);

  useEffect(() => {}, []);
  return (
    <>
      <motion.header tw="relative w-full sm:h-screen h-[115.625vw]  flex flex-col justify-end  overflow-hidden">
        <motion.div
          ref={containerRef}
          tw="w-full h-full bg-black  absolute  top-0 left-0 z-10 pointer-events-none"
          style={{ opacity, translateY }}
        />
        <motion.div
          key={windowKey}
          drag={windowWidth < 630 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          tw="absolute top-0 left-0 w-full h-full will-change[transform]"
          style={{ translateY: parallaxY, x }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              animate(x, -500, {
                bounce: 0,
                type: "spring",
                velocity: 0,
              });
            } else if (swipe > swipeConfidenceThreshold) {
              animate(x, 500, {
                bounce: 0,
                type: "spring",
                velocity: 0,
              });
            }
          }}
          variants={{
            next: { x: "-100%" },
            pre: { x: "100%" },
          }}
        >
          {sliderMediaInfo.map((media, index) => (
            <ImageContainer
              key={media.title}
              index={index}
              duration={SLIDER_DURATION}
            />
          ))}
        </motion.div>
        <ProjectDescription delay={SLIDER_DURATION} style={{ translateY }} />
        <ProgressText
          pagesLength={sliderMediaInfo.length}
          duration={SLIDER_DURATION}
          style={{ translateY }}
        />

        <PaginationBtn />
      </motion.header>
    </>
  );
};

export default ImageSlider;
