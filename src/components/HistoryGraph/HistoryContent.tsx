import { AnimatePresence, motion, Variants } from "framer-motion";
import { FC } from "react";
import { sortStrings } from "src/util";
import historyData from "./history.data";

interface HistoryContentProps {
  selectedYear: string;
}
const variants: Variants = {
  exit: { opacity: 0, y: -15 },
  initial: { opacity: 0, y: 15 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.4 },
  },
};
const HistroyContent: FC<HistoryContentProps> = ({
  children,
  selectedYear,
}) => {
  return (
    <ul tw="h-full relative    -top-1.5 ">
      <AnimatePresence exitBeforeEnter>
        {historyData
          .filter((history) => history.year === selectedYear)
          .map((selectedHistory) =>
            sortStrings(selectedHistory.monthContent, "month").map(
              (monthWork, index) => (
                <motion.li
                  viewport={{ once: true }}
                  key={monthWork.month + index}
                  tw="mb-5"
                  {...{ ...variants }}
                  variants={variants}
                  transition={{ type: "tween", duration: 0.2 }}
                >
                  <p tw="mb-0.5 text-gray">
                    {`${selectedHistory.year}.${monthWork.month}`}
                  </p>
                  {monthWork.content.map((content) => (
                    <p>{content}</p>
                  ))}
                </motion.li>
              )
            )
          )}
      </AnimatePresence>
    </ul>
  );
};
export default HistroyContent;