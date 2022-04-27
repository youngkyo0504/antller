import tw from "twin.macro";
import React, { FC, forwardRef, RefObject } from "react";
import AnimatedText from "@components/Common/AnimatedText";
import Profile from "./Profile";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useWindowHeight from "src/hooks/useWindowHeight";
import { useElementClientHeight } from "@hooks";

interface PeopleProps {
  contentHeights: number[];
}
const Container = tw.div`bg-black text-white max-w-content w-full mx-auto `;

const People = forwardRef<HTMLDivElement, PeopleProps>(
  ({ contentHeights }, ref) => {
    const { windowHeight } = useWindowHeight();
    const { scrollY } = useViewportScroll();
    // const [ref, height] = useElementClientHeight<HTMLDivElement>();
    const opacity = useTransform(
      scrollY,
      // scroll animation element의 opacity가 0이 될 때
      [
        contentHeights[0] - contentHeights[1],
        contentHeights[0],
        contentHeights[0] + contentHeights[1] - windowHeight / 2,
      ],
      [0, 1, 0],
      {
        clamp: false,
      }
    );
    return (
      <section
        ref={ref}
        tw="h-[100vh] flex justify-center flex-col w-full overflow-hidden  z-index[1] relative"
      >
        <Container>
          <AnimatedText titleOption={{ text: "People", color: "#fff" }}>
            {/* #4D90F4 */}
          </AnimatedText>
        </Container>
        <motion.div
          style={{
            opacity: opacity,
          }}
        >
          <div tw=" mt-24 overflow-hidden relative">
            <Profile />
          </div>
        </motion.div>
      </section>
    );
  }
);

export default People;
