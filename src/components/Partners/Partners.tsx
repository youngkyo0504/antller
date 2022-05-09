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
import Logos from "./logo.json";

interface PartnersProps {}

const Container = tw.div`bg-black text-white px-content max-w-content w-full mx-auto `;

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
        tw="h-[50vh] flex flex-col w-full overflow-hidden  z-index[1] relative "
      >
        <Container>
          <AboutSubTitle>Partnership</AboutSubTitle>
          <SubTitleDescription></SubTitleDescription>
        </Container>
        <div tw=" mt-32  relative flex ">
          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView={"visible"}
            tw="max-w-content px-content mx-auto gap-16 justify-center flex items-center w-full"
          >
            {Logos.map((logo) => (
              <motion.div variants={childVariants} tw="relative w-48 h-14">
                <Image
                  tw="invert select-none"
                  draggable={false}
                  alt={logo.name}
                  src={`/images/partnerLogo/${logo.src}`}
                  // width={200}
                  // height={42}
                  layout="fill"
                ></Image>
              </motion.div>
            ))}
            {/* <motion.div variants={childVariants} tw="relative w-48 h-16">
              <Image
                tw="invert select-none"
                draggable={false}
                alt="logo"
                src={"/images/partnerLogo/ch-black.svg"}
                // width={200}
                // height={42}
                layout="fill"
              ></Image>
            </motion.div>
            <motion.div variants={childVariants} tw="relative w-48 h-16">
              <Image
                tw="invert"
                alt="logo"
                src={"/images/partnerLogo/konkuk.svg"}
                // width={160}
                // height={60}
                layout="fill"
              ></Image>
            </motion.div>
            <motion.div variants={childVariants} tw="relative w-8 h-12">
              <Image
                tw="invert"
                alt="logo"
                src={"/images/partnerLogo/jineps.png"}
                // width={32.6}
                // height={60}
                layout="fill"
              ></Image>
            </motion.div>
            <motion.div variants={childVariants} tw="relative w-48 h-16">
              <Image
                tw="invert"
                alt="logo"
                src={"/images/partnerLogo/charatu.svg"}
                layout="fill"
              ></Image>
            </motion.div>
            <motion.div variants={childVariants} tw="relative w-48 h-16">
              <Image
                tw="invert"
                alt="logo"
                src={"/images/partnerLogo/nonghyup.svg"}
                layout="fill"
              ></Image>
            </motion.div> */}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Partners;
