import { links } from "@components/Layouts/Header/header.data";
import { Variants } from "framer-motion";

const WRAPPER_DURATION = 0.5;
const STAGGERCHILDREN = 0.1;

export const wrapperVariants: Variants = {
  show: {
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.95)",
    transition: {
      ease: [0.32, 0.08, 0.24, 1],
      type: "tween",
      duration: WRAPPER_DURATION,
    },
  },
  hide: {
    height: "3.75rem",
    backgroundColor: "rgba(0,0,0,0)",
    transition: {
      ease: [0.32, 0.08, 0.24, 1],
      times: [0, 1],
      type: "tween",
      duration: WRAPPER_DURATION,
      delay: STAGGERCHILDREN * links.length,
    },
  },
  initial: { opacity: 1 },
};
export const MobileHeaderVariants: Variants = {
  show: {
    // height: "100vh",
    opacity: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    transition: {
      ease: [0.32, 0.08, 0.24, 1],
      type: "tween",
      duration: WRAPPER_DURATION,
    },
  },

  hide: {
    // height: "3.75rem",
    backgroundColor: "rgba(0,0,0,0)",
    opacity: 0,
    transition: {
      ease: [0.32, 0.08, 0.24, 1],
      times: [0, 1],
      type: "tween",
      duration: WRAPPER_DURATION,
      delay: STAGGERCHILDREN * links.length,
    },
  },
  initial: { opacity: 0 },
};
export const itemVariants: Variants = {
  show: (index) => {
    return {
      scale: 1,
      opacity: [0, 0, 1],
      // display: "inline-block",
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
      // display: ["inline-block", "inline-block", "hidden"],
      transition: {
        type: "tween",
        ease: [0.2727, 0.0986, 0.8333, 1],
        times: [0, 0.4, 1],
        duration: 0.325,
        delay: (links.length - 1 - index) * STAGGERCHILDREN,
      },
    };
  },
  notMobile: {
    display: "inline-block",
  },

  initial: { scale: 1, opacity: 1 },
};
