import { motion, Variants } from "framer-motion";
import { FC } from "react";
import { sortStrings } from "src/util";
import tw, { styled } from "twin.macro";
import historyData from "./history.data";

interface styledProps {
  isSelectedYear: boolean;
}
const Year = styled.div(({ isSelectedYear }: styledProps) => [
  tw`transition-all ease-in  cursor-pointer absolute -left-16 -top-2 text-lg text-gray`,
  isSelectedYear && tw`text-antller-black`,
]);
const YearGraphContainer = tw.li`relative h-20 w-14 `;

const Circle = styled.div(({ isSelectedYear }: styledProps) => [
  tw`transition-all ease-in  cursor-pointer absolute top-0 w-3 h-3 -left-1.5 bg-divider  rounded-full `,
  isSelectedYear && tw`bg-antller-black`,
]);

interface YearPickerProps {
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  selectedYear: string;
}
const variants: Variants = {
  initial: {
    y: 15,
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};
const YearPicker: FC<YearPickerProps> = ({
  children,
  selectedYear,
  setSelectedYear,
}) => {
  const setYear = (year: string) => {
    return () => {
      console.log({ year });
      setSelectedYear(year);
    };
  };
  return (
    <motion.ul
      tw="h-full border-l border-divider "
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      transition={{ delay: 0.8 }}
    >
      {sortStrings(historyData, "year", { isReverse: true }).map((history) => (
        <YearGraphContainer key={history.year}>
          <Circle
            isSelectedYear={history.year === selectedYear}
            onClick={setYear(history.year)}
          />
          <Year
            isSelectedYear={history.year === selectedYear}
            onClick={setYear(history.year)}
          >
            {history.year}
          </Year>
        </YearGraphContainer>
      ))}
    </motion.ul>
  );
};
export default YearPicker;
