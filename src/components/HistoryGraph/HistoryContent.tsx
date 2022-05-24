import { AnimatePresence, motion, Variants } from "framer-motion";
import { FC } from "react";
import tw from "twin.macro";
import historyData from "./history.data";
interface HistoryContentProps {
  selectedYear: string;
}
const variants: Variants = {
  exit: { opacity: 0, y: -15 },
  initial: { opacity: 0, y: 15 },
  animate: {
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
    <AnimatePresence exitBeforeEnter>
      {historyData
        .filter((history) => history.year === selectedYear)
        .map((selectedHistory) => (
          <motion.ul
            {...{ ...variants }}
            transition={{ type: "tween", duration: 0.2 }}
            tw="h-full   relative -top-1.5 px-mo-content sm:(px-0 text-lg) w-full "
            key={selectedYear}
          >
            {selectedHistory.monthContent
              .sort((a, b) => Number(a.month) - Number(b.month))
              .map((monthWork, index) => (
                <motion.li key={monthWork.month + index} tw="mb-5 ">
                  <p tw="mb-0.5  font-bold  text-gray">
                    {`${selectedHistory.year}.${monthWork.month}`}
                  </p>
                  {monthWork.content.map((content, index) => (
                    <p tw="mb-1 text-white" key={index}>
                      - {content}
                    </p>
                  ))}
                </motion.li>
              ))}
          </motion.ul>
        ))}
    </AnimatePresence>
  );
};
export default HistroyContent;
