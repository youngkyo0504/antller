import { MotionValue, animate, AnimationPlaybackControls } from "framer-motion";

export function animateSpring(
  index: MotionValue<number>,
  to: number,
  onComplete?: Function
): AnimationPlaybackControls {
  return animate(index, to, {
    bounce: 0,
    type: "spring",
    velocity: 0,
    onComplete() {
      if (onComplete) {
        onComplete();
      }
    },
  });
}
