import tw from "twin.macro";
import React, { FC } from "react";
import Logos from "./logo.json";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
interface PartnersLogoProps {}

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

const PartnersLogos: FC<PartnersLogoProps> = ({}) => {
  return (
    <div tw="hidden sm:block">
      <div tw=" max-w-content px-mo-content mx-auto sm:(px-content gap-y-14) gap-y-6 gap-x-4  grid  grid-cols-3  overflow-hidden items-center w-full">
        {Logos.map((logo) => (
          // 나눔고딕, 굵은고딕
          <div
            key={logo.name}
            tw=" relative w-full h-8 items-center inline-block"
          >
            <Image
              tw=" select-none fill-[white]"
              draggable={false}
              alt={logo.name}
              src={`/images/partnerLogo/${logo.src}`}
              layout="fill"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersLogos;
