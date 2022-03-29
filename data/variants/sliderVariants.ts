const sliderVariants = {
  enter: (direction: number) => {
    console.log("sfsdf", document.documentElement.clientWidth);
    return {
      x:
        direction > 0
          ? document.documentElement.clientWidth
          : -document.documentElement.clientWidth,
      opacity: 1,
      zIndex: 1,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x:
        direction < 0
          ? document.documentElement.clientWidth
          : -document.documentElement.clientWidth,
      opacity: 1,
    };
  },
};

export default sliderVariants;
