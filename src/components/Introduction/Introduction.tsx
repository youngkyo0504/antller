import tw from "twin.macro";
import React, { FC } from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import { useElementGeometry } from "@hooks";
import useWindowGeometry from "src/hooks/useWindowGeometry";
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

interface IntroductionProps {}

const Introduction: FC<IntroductionProps> = () => {
  const [ref, elementHeight] = useElementGeometry<HTMLDivElement>();
  const { windowHeight } = useWindowGeometry();
  const { scrollY } = useViewportScroll();

  const opacity = useTransform(
    scrollY,
    // scroll animation element의 opacity가 0이 될 때
    [elementHeight - 1.5 * windowHeight, elementHeight - windowHeight],
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
      tw="max-w-content w-full h-[350vh] mx-auto relative text-white lg:text-2xl md:text-xl sm:text-lg  flex justify-center px-content "
    >
      <motion.div
        whileInView={{ visibility: "visible", zIndex: 0 }}
        style={{
          opacity: opacity,
        }}
        tw=" fixed top-0 translate-x-[-50%] left-[50%] h-screen w-full flex md:flex-row justify-center md:(justify-start) flex-col items-center max-w-content px-mo-content sm:(px-content )   opacity-0"
      >
        <motion.div tw="w-full md:w-1/2">
          <AnimatedText titleOption={{ text: "Mission", color: "#D84624" }}>
            다음 세대를 위한
            <br />
            단단한 축산
          </AnimatedText>
        </motion.div>
        <div tw="md:w-1/2 w-full margin-top[5vh] md:(margin-top[5vh])">
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
};

export default Introduction;
