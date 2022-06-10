import { motion } from "framer-motion";
import { FC } from "react";
import pageTransitionVariants from "src/datas/variants/pageTransitionVariants";
import tw from "twin.macro";
const InOutTransitionContainer: FC = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
    >
      {children}
    </motion.div>
  );
};

export default InOutTransitionContainer;
