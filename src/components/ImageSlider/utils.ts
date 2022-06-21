import { MotionValue, animate, AnimationPlaybackControls } from "framer-motion";

export function animateSpring(
  index: MotionValue<number>,
  to: number,
  onComplete?: Function,
  onPlay?: (index: number) => void
): AnimationPlaybackControls {
  return animate(index, to, {
    bounce: 0,
    type: "spring",
    velocity: 0,
    onPlay() {
      onPlay && onPlay(to);
    },
    onComplete() {
      if (onComplete) {
        onComplete();
      }
    },
  });
}
