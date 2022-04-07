import { motion, MotionStyle } from "framer-motion";
import { FC } from "react";
import { rotateVariants } from "../../datas/variants";
interface ProgressTextProps {
  style?: MotionStyle | undefined;
  isEndAnimation: boolean;
  duration: any;
  page: number;
  pagesLength: number;
}
import "twin.macro";
const ProgressText: FC<ProgressTextProps> = ({
  duration,
  style,
  page,
  isEndAnimation,
  pagesLength,
}) => {
  return (
    <motion.div
      style={{ ...style }}
      tw="absolute bottom-10 text-white z-30 text-3xl  w-full mx-auto"
    >
      <div tw=" max-w-content mx-auto justify-end text-right flex items-center">
        <span tw="align-top inline-block origin-center   ">{page + 1}</span>
        {/* <div tw="origin-center  h-full w-8 pb-1.5"> */}
        <motion.span
          transition={{
            duration: duration,
            ease: "easeOut",
          }}
          variants={rotateVariants}
          animate={isEndAnimation ? "stop" : "rotate"}
          tw="inline-block origin-[center center 0] text-2xl mx-[0.7rem]  "
        >
          /
        </motion.span>
        {/* </div> */}

        <span tw="leading-normal">{pagesLength}</span>
      </div>
    </motion.div>
  );
};

export default ProgressText;
