import tw from "twin.macro";
import React, { FC, forwardRef, RefObject, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import { useElementClientHeight } from "@hooks";
import useWindowHeight from "src/hooks/useWindowHeight";
import AnimatedText from "@components/Common/AnimatedText";

const boxVariants: Variants = {
  out: {
    y: 0,
  },
  in: {
    y: 0,
    transition: {
      duration: 0.3,
      // first child는 parent가 나타나고 0.5s 후에 나타난다.
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

interface IntroductionProps {
  contentHeights: number[];
}

const Introduction = forwardRef<HTMLDivElement, IntroductionProps>(
  ({ contentHeights }, ref) => {
    const { windowHeight } = useWindowHeight();
    const { scrollY } = useViewportScroll();
    console.log(contentHeights);
    const opacity = useTransform(
      scrollY,
      // scroll animation element의 opacity가 0이 될 때
      [
        contentHeights[0] - 1.5 * windowHeight,
        contentHeights[0] - windowHeight,
      ],
      [1, 0],
      {
        clamp: false,
      }
    );
    return (
      <motion.div
        ref={ref}
        initial="out"
        animate="in"
        variants={boxVariants}
        tw="max-w-content w-full h-[350vh] mx-auto relative text-white text-2xl flex justify-center  "
      >
        <motion.div
          whileInView={{ visibility: "visible", zIndex: 0 }}
          style={{
            opacity: opacity,
          }}
          tw=" fixed top-0 translate-x-[-50%] left-[50%] h-screen w-full flex items-center max-w-content opacity-0"
        >
          <motion.div tw=" w-1/2">
            <AnimatedText titleOption={{ text: "Mission", color: "#D84624" }}>
              다음 세대를 위한
              <br />
              단단한 축산
            </AnimatedText>
          </motion.div>
          <div tw="w-1/2">
            <ScrollAnimation
              messages={[
                "우리의 미션은 데이터를 통해 축산농가의 생산성과 경제성을 최적화하고 환경에 미치는 영향을 최소화시킴으로써",
                "이 산업이 사람들에게 받던 사랑과 존경을 회복하고 더 지속가능하게 만드는 것 입니다.",
              ]}
            ></ScrollAnimation>
          </div>
        </motion.div>
      </motion.div>
    );
  }
);

export default Introduction;
