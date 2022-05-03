import tw from "twin.macro";
import React, { FC } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useElementGeometry } from "@hooks";
import {
  AboutSubTitle,
  SubTitleDescription,
} from "styles/globalStyleComponent";
import Image from "next/image";
import Logo1 from "./partnerLogo/1.svg";
import Logo2 from "./partnerLogo/2.svg";
import Logo3 from "./partnerLogo/3.svg";
import Logo4 from "./partnerLogo/4.svg";
import Logo5 from "./partnerLogo/5.svg";
import Logo6 from "./partnerLogo/6.svg";
import Logo7 from "./partnerLogo/7.svg";
interface PartnersProps {}
const Container = tw.div`bg-black text-white max-w-content w-full mx-auto `;

const Partners: FC<PartnersProps> = ({}) => {
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
          <AboutSubTitle>Partners</AboutSubTitle>
          <SubTitleDescription>함께하는 앤틀러</SubTitleDescription>
        </Container>
        <div tw=" mt-24  relative flex">
          <div tw="max-w-content mx-auto flex items-center w-full">
            <div>
              <Logo1 tw="h-8 invert" />
            </div>
            <Logo2 tw="h-10 invert" />
            <Logo3 tw="h-10 invert" />
            <Logo4 tw="h-10 invert" />
            <Logo5 tw="h-8 invert " />
            <Logo6 tw="h-10 invert" />
            <Logo7 tw="h-10 invert " />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Partners;
