import { ImageContainer } from "./ImageContainer";
import React, { FC, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import ProjectDescription from "./ProjectDescription";
import { useElementGeometry } from "@hooks";
import PaginationBtn from "./PaginationBtn";
import ProgressText from "./ProgressText";
import sliderMediaInfo from "./sliderMediaInfo";
import { SliderInfoProvider } from "@components/contexts/SliderContext/SliderInfoProvider";
import tw from "twin.macro";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";

interface HomeSliderProps {}

const SLIDER_DURATION = 1;

const ImageSlider: FC<HomeSliderProps> = () => {
  const [containerRef, containerHeight] = useElementGeometry<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, containerHeight], [0, 0.66]);
  const translateY = useTransform(scrollY, [0, containerHeight], [0, 300]);
  const parallaxY = useTransform(scrollY, [0, containerHeight], [0, 500]);
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
  return (
    <>
      <SliderInfoProvider>
        <motion.header tw="relative w-full sm:h-screen h-[115.625vw]  flex flex-col justify-end  overflow-hidden">
          <motion.div
            ref={containerRef}
            tw="w-full h-full bg-black  absolute  top-0 left-0 z-10 "
            style={{ opacity, translateY }}
          />
          <motion.div
            tw="absolute top-0 left-0 w-full h-full"
            style={{ translateY: parallaxY }}
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
      </SliderInfoProvider>
    </>
  );
};

export default ImageSlider;
