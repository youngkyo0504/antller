import tw from "twin.macro";
import React, { FC } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useElementGeometry } from "@hooks";
import {
  AboutSubTitle,
  SubTitleDescription,
} from "styles/globalStyleComponent";
import MobilePartners from "./MobilePartners";
import useIsMobile from "src/hooks/useIsMobile";
import PartnersLogos from "./PartnersLogos";

interface PartnersProps {}

const Container = tw.div`bg-black text-white sm:(px-content) px-mo-content max-w-content w-full mx-auto `;

const Partners: FC<PartnersProps> = ({}) => {
  const [ref, elementHeight, offsetTop] = useElementGeometry<HTMLDivElement>();
  const { scrollY } = useViewportScroll();
  const [isMobile] = useIsMobile();
  const opacity = useTransform(
    scrollY,
    // scroll animation element의 opacity가 0이 될 때
    [
      offsetTop - elementHeight * 2,
      offsetTop - elementHeight,
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
        tw="h-[50vh]  w-full   z-index[1] relative "
      >
        <Container>
          <AboutSubTitle>Partnership</AboutSubTitle>
          <SubTitleDescription></SubTitleDescription>
        </Container>
        <div tw=" mt-32  overflow-x-hidden relative ">
          <MobilePartners />
          <PartnersLogos />
        </div>
      </motion.section>
    </>
  );
};

export default Partners;
