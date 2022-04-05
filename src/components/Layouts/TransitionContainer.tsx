import { motion } from "framer-motion";
import { FC } from "react";
import pageTransitionVariants from "src/datas/variants/pageTransitionVariants";
const InOutTransitionContainer: FC = ({ children }) => {
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

export default InOutTransitionContainer;
