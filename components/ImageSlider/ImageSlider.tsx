import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { FC, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

interface ImageSliderProps {}

const variants = {
  enter: (direction: number) => {
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

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const images = [
  "https://pentagram-production.imgix.net/e83cc41b-a699-4e6f-8892-388ec0c050b2/MG_NGA_2.jpg?rect=0%2C0%2C3000%2C2000&w=2000&fm=jpg&q=70&auto=format",
  "https://pentagram-production.imgix.net/cc2fd252-714c-40e4-b0b4-ac5200fe99b7/EO_Dally.png?rect=366%2C0%2C4221%2C2813&w=2000&fm=jpg&q=70&auto=format",
  "https://pentagram-production.imgix.net/4208dca0-4a24-469f-b470-ab0e995d9fe5/TPR_Cover_Cropped.jpg?rect=352%2C0%2C5627%2C3750&w=2000&fm=jpg&q=70&auto=format",
];

const ImageSlider: FC<ImageSliderProps> = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isEndAnimation, setIsEndAnimation] = useState(true);
  // const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection: number) => {
    setPage(([page, direction]) => {
      console.log(page, direction);
      if (page + newDirection === images.length) {
        return [0, newDirection];
      } else if (page + newDirection < 0) {
        return [images.length - 1, newDirection];
      } else {
        return [page + newDirection, newDirection];
      }
    });
  };
  return (
    <div className="example-container overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          onAnimationComplete={(definition) => {
            console.log(definition);
            setIsEndAnimation(true);
          }}
          className="w-full  absolute"
          key={page}
          src={images[page]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              console.log("오른쪽");
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              console.log("왼쪽");
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        className="next"
        onClick={() => {
          if (isEndAnimation) {
            paginate(1);
            setIsEndAnimation(false);
          }
        }}
      >
        {"‣"}
      </div>
      <div
        className="prev"
        onClick={() => {
          if (isEndAnimation) {
            paginate(-1);
            setIsEndAnimation(false);
          }
        }}
      >
        {"‣"}
      </div>
      <style jsx>{`
        .example-container {
          height: 100vh;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .next,
        .prev {
          top: calc(50% - 20px);
          position: absolute;
          background: black;
          color: white;
          border-radius: 30px;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
          cursor: pointer;
          font-weight: bold;
          font-size: 18px;
          z-index: 2;
        }
        .next {
          right: 10px;
        }

        .prev {
          left: 10px;
          transform: scale(-1);
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
