import tw from "twin.macro";
import React, {
  FC,
  forwardRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import AnimatedText from "@components/Common/AnimatedText";
import Profile from "./Profile";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useWindowHeight from "src/hooks/useWindowHeight";
import { useElementGeometry } from "@hooks";

interface PeopleProps {}

const Container = tw.div`bg-black text-white max-w-content w-full mx-auto `;

const People: FC<PeopleProps> = ({}) => {
  const [ref, elementHeight, offsetTop] = useElementGeometry<HTMLDivElement>();
  const { scrollY } = useViewportScroll();

  const opacity = useTransform(
    scrollY,
    // scroll animation element의 opacity가 0이 될 때
    [
      offsetTop - elementHeight,
      offsetTop,
      offsetTop + elementHeight * 0.3,
      offsetTop + elementHeight * 0.7,
    ],
    [0, 1, 1, 0],
    {
      clamp: false,
    }
  );
  return (
    <>
      <motion.section
        style={{
          opacity: opacity,
        }}
        ref={ref}
        tw="h-[100vh] flex justify-center flex-col w-full overflow-hidden  z-index[1] relative"
      >
        <Container>
          <motion.p tw="text-5xl font-bold tracking-wide text-white">
            People
          </motion.p>
          <p tw="mt-4 text-xl">앤틀러의 얼굴들 </p>
          {/* <AnimatedText titleOption={{ text: "People", color: "#fff" }}> */}
          {/* #4D90F4 */}
          {/* </AnimatedText> */}
        </Container>
        <motion.div>
          <div tw=" mt-24 overflow-hidden relative">
            <Profile />
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default People;
