import React from "react";
interface ImageContainerProps {
  imageRef;
  definition;
  setIsEndAnimation;
  page;
  direction;
  sliderVariants;
}
export function ImageContainer({
  imageRef,
  definition,
  setIsEndAnimation,
  page,
  direction,
  sliderVariants,
}) {
  return (
    <motion.div
      ref={imageRef}
      onAnimationComplete={(definition) => {
        setIsEndAnimation(true);
      }}
      style={{
        translateY,
      }}
      tw="z-[1] top-0 absolute h-full w-full bg-cover bg-no-repeat"
      key={page}
      custom={direction}
      variants={sliderVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: SLIDER_DURATION,
        ease: "easeInOut",
      }}
    ></motion.div>
  );
}
