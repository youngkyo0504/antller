import { AnimatePresence, motion, Variants } from "framer-motion";
import { FC } from "react";
import { sortStrings } from "src/util";
import tw from "twin.macro";
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
    <AnimatePresence exitBeforeEnter>
      <ul tw="h-full relative -top-1.5" key={"historyContainer"}>
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
                  <p tw="mb-0.5 font-bold lg:(text-lg) text-gray">
                    {`${selectedHistory.year}.${monthWork.month}`}
                  </p>
                  {monthWork.content.map((content, index) => (
                    <p tw="lg:(text-xl) text-white" key={index}>
                      {content}
                    </p>
                  ))}
                </motion.li>
              )
            )
          )}
      </ul>
    </AnimatePresence>
  );
};
export default HistroyContent;
