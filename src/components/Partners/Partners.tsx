import tw from "twin.macro";
import React, { FC } from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";
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

const parentVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.08 },
  },
};
const childVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      type: "tween",
      duration: 0.4,
    },
  },
};
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
          <AboutSubTitle>Partnership</AboutSubTitle>
          <SubTitleDescription></SubTitleDescription>
        </Container>
        <div tw=" mt-24  relative flex ">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView={"visible"}
            tw="max-w-content mx-auto gap-8 justify-center flex items-center w-full"
          >
            <motion.div variants={childVariants}>
              <Image
                tw="invert"
                alt="logo"
                src={"/images/partnerLogo/ch-black.svg"}
                width={200}
                height={42}
              ></Image>
            </motion.div>
            <motion.div variants={childVariants}>
              <Image
                tw="invert"
                alt="logo"
                src={"/images/partnerLogo/konkuk.svg"}
                width={160}
                height={60}
              ></Image>
            </motion.div>
            <motion.div variants={childVariants}>
              <Image
                tw="invert"
                alt="logo"
                src={"/images/partnerLogo/jineps.png"}
                width={32.6}
                height={40}
              ></Image>
            </motion.div>
            <motion.div variants={childVariants}>
              <Image
                tw="invert"
                alt="logo"
                src={"/images/partnerLogo/charatu.svg"}
                width={200}
                height={60}
              ></Image>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Partners;
