const pageTransitionVariants = {
  initial: { opacity: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default pageTransitionVariants;
