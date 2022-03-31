import { motion } from "framer-motion";
import { FC } from "react";
import pageTransitionVariants from "../../data/variants/pageTransitionVariants";

const TransitionContainer: FC = ({ children }) => {
  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={pageTransitionVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TransitionContainer;
