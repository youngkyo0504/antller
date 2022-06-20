import tw from "twin.macro";
import React, { FC, useCallback, useEffect } from "react";
import Profile from "./Profile";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useElementGeometry } from "@hooks";
import {
  AboutSubTitle,
  SubTitleDescription,
} from "styles/globalStyleComponent";

interface PeopleProps {}

const Container = tw.div`bg-black text-white max-w-content w-full mx-auto sm:px-content px-mo-content`;

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
          <AboutSubTitle>People</AboutSubTitle>
          <SubTitleDescription>앤틀러의 얼굴들</SubTitleDescription>
        </Container>
        <Profile />
      </motion.section>
    </>
  );
};

export default People;
