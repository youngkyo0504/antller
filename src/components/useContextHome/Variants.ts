import { Variants } from "framer-motion";
interface SliderCustom {
  direction: number;
  activeState: "current" | "next" | "pre";
}

const sliderVariants: Variants = {
  next: (direction: number) => {
    return {
      zIndex: direction > 0 ? 1 : 2,
      x: "100%",
    };
  },

  current: {
    zIndex: 10,
    x: "0%",
  },

  pre: (direction: number) => {
    return {
      zIndex: direction < 0 ? 1 : 2,
      x: "-100%",
    };
  },
};

export default sliderVariants;
