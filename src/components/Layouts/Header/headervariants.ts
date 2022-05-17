import { Variants } from "framer-motion";
import { links } from "./header.data";

const WRAPPER_DURATION = 0.5;
const STAGGERCHILDREN = 0.1;

export const wrapperVariants: Variants = {
  show: {
    height: "100vh",
    backgroundColor: "blue",
    transition: {
      ease: [0.32, 0.08, 0.24, 1],
      type: "tween",
      duration: WRAPPER_DURATION,
    },
  },
  hide: {
    backgroundColor: "blue",
    height: "3.75rem",
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

export const itemVariants: Variants = {
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
  initial: { scale: 0.7, opacity: 1 },
};
