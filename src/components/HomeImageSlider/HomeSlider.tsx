import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  motionValue,
  useMotionTemplate,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import ProjectDescription from "./ProjectDescription";
import { useElementGeometry, useWindowGeometry } from "@hooks";
import PaginationBtn from "./PaginationBtn";
import ProgressText from "./ProgressText";
import sliderMediaInfo from "./sliderMediaInfo";
import tw from "twin.macro";
import useDarkBgContext from "@components/contexts/DarkBgContext/useDarkBgContext";
import useSliderInfoContext from "@components/contexts/SliderContext/useSliderInfo";
import { NewImageContainer } from "./NewImageContainer";
import ImageSlider from "@components/ImageSlider";
import { ImageSliderHandle } from "@components/ImageSlider/ImageSlider";
import { ItemContainer } from "./ItemContainer";
import { rotateVariants } from "src/datas/variants";

interface HomeSliderProps {}

const SLIDER_DURATION = 1;
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const HomeSlider: FC<HomeSliderProps> = () => {
  const [containerRef, containerHeight] = useElementGeometry<HTMLDivElement>();
  const { windowWidth, windowHeight } = useWindowGeometry();
  const { scrollY } = useViewportScroll();

  const opacity = useTransform(scrollY, [0, containerHeight], [0, 0.66]);
  const windowKey = `${windowWidth}${windowHeight}`;

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

  const x = motionValue<number>(0);
  const { paginate, goto, setIsOnAnimation, direction } =
    useSliderInfoContext();
  const transform = useMotionTemplate`translateY(${translateY}px) translateX(${x}%)`;

  const onDragEnd = useCallback((e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      animate(x, -100, {
        bounce: 0,
        type: "spring",
        velocity: 0,
        onComplete() {
          console.log(x.get());
          console.log("끝???");
          // 아이템들의 위치를 바꾼다.
        },
      });
    } else if (swipe > swipeConfidenceThreshold) {
      animate(x, 100, {
        bounce: 0,
        type: "spring",
        velocity: 0,
        onComplete() {
          // 위치를 바꾼다. 아이템들의
        },
      });
    }
  }, []);

  const onRightClick = () => {
    animate(x, -100, {
      bounce: 0,
      type: "spring",
      velocity: 0,
      onComplete() {
        requestAnimationFrame(() => {
          paginate(1);
          x.set(0);
          setIsOnAnimation(false);
        });
      },
    });
  };
  const onLeftClick = () => {
    animate(x, 100, {
      bounce: 0,
      type: "spring",
      velocity: 0,
      onComplete() {
        paginate(-1);
        x.set(0);
        // setIsOnAnimation(false);
      },
    });
  };
  const animatedState = {
    "-1": "100%",
    "0": "0",
    "1": "-100%",
  };
  const carousel = useRef<ImageSliderHandle>(null);
  const [index, setIndex] = useState(0);
  return (
    <>
      <header tw="relative w-full sm:h-screen h-[115.625vw]  flex flex-col justify-end  overflow-hidden">
        <motion.div
          ref={containerRef}
          tw="w-full h-full bg-black  absolute  top-0 left-0 z-10 pointer-events-none"
          style={{ opacity, translateY }}
        />

        <ImageSlider
          tw="w-full h-full"
          ref={carousel}
          count={1}
          margin={0}
          autoplayInterval={3000}
          onComplete={() => {
            setIsOnAnimation(false);
          }}
          onChange={(newIndex: number): void => {
            // console.log(newIndex);
            // paginate(newIndex);
            // setIndex(newIndex);
            setIsOnAnimation(true);
            goto(newIndex);
          }}
        >
          {sliderMediaInfo.map((media, index) => (
            <ItemContainer
              key={media.title}
              index={index}
              duration={SLIDER_DURATION}
            />
          ))}
        </ImageSlider>
        {/* 
        <ProjectDescription delay={SLIDER_DURATION} style={{ translateY }} /> */}
        <ProgressText
          pagesLength={sliderMediaInfo.length}
          duration={SLIDER_DURATION}
          style={{ translateY }}
        />

        <PaginationBtn {...{ carousel, onRightClick, onLeftClick }} />
      </header>
    </>
  );
};

export default HomeSlider;
