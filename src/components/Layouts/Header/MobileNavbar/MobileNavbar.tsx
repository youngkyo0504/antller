import tw from "twin.macro";
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import { links } from "../header.data";
import Link from "next/link";
interface MobileNavbarProps {
  isMobileMenuOpen: boolean;
}

const WRAPPER_DURATION = 0.5;
const STAGGERCHILDREN = 0.1;
const itemVariants: Variants = {
  show: (index) => {
    return {
      scale: 1,
      opacity: [0, 0, 1],
      transition: {
        type: "tween",
        ease: [0.2727, 0.0986, 0.8333, 1],
        times: [0, 0.4, 1],
        duration: 0.325,
        delay: index * STAGGERCHILDREN,
      },
    };
  },
  hide: (index) => {
    return {
      scale: 0,
      opacity: [1, 1, 0],
      transition: {
        type: "tween",
        ease: [0.2727, 0.0986, 0.8333, 1],
        times: [0, 0.4, 1],
        duration: 0.325,
        delay: (links.length - 1 - index) * STAGGERCHILDREN,
      },
    };
  },
  initial: { scale: 0.7, opacity: 0 },
};

const wrapperVariants: Variants = {
  show: {
    opacity: 1,
    height: "100vh",

    transition: {
      ease: [0.32, 0.08, 0.24, 1],
      type: "tween",
      duration: WRAPPER_DURATION,
    },
  },
  hide: {
    opacity: 0,
    height: 0,
    transition: {
      ease: [0.32, 0.08, 0.24, 1],
      type: "tween",
      duration: WRAPPER_DURATION,
      delay: STAGGERCHILDREN * links.length,
    },
  },
  initial: { opacity: 0 },
};

const MobileNavbar: FC<MobileNavbarProps> = ({ isMobileMenuOpen }) => {
  return (
    <motion.div
      variants={wrapperVariants}
      animate={isMobileMenuOpen ? "show" : "hide"}
      initial="initial"
      tw=" bg-[rgba(0,0,0,0.9)] px-mo-content overflow-hidden pt-[103px] z-[29] text-antller-black flex flex-col fixed left-0 top-0 w-full "
    >
      <ul>
        {links.map((link, index) => (
          <li key={link}>
            <motion.div
              variants={itemVariants}
              tw="inline-block text-white py-2"
              animate={isMobileMenuOpen ? "show" : "hide"}
              initial="initial"
              custom={index}
            >
              <Link href={`/${link}`}>
                <a tw="uppercase text-lg  py-1 cursor-pointer">{link}</a>
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNavbar;
