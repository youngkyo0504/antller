import { motion, Variants } from "framer-motion";
import { FC } from "react";
import { sortStrings } from "src/util";
import tw, { css, styled } from "twin.macro";
import historyData from "./history.data";

interface styledProps {
  isSelectedYear: boolean;
}
const Year = styled.div(({ isSelectedYear }: styledProps) => [
  tw`transition-all ease-in  cursor-pointer  font-bold  text-lg -left-20 -top-2  text-historyColor sm:(absolute px-0 py-0 text-xl) py-3 px-mo-content
    mr-4 `,
  isSelectedYear && tw`text-historySelectedColor`,
]);
const YearGraphItemContainer = tw.li`relative sm:(h-20 w-20)`;

const scrollbarNoneStyle = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Circle = styled.div(({ isSelectedYear }: styledProps) => [
  tw`transition-all ease-in  cursor-pointer absolute top-0 w-3 h-3 -left-1.5  bg-historyColor rounded-full hidden sm:(block) `,
  isSelectedYear && tw`bg-historySelectedColor`,
]);
interface YearPickerProps {
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  selectedYear: string;
}

const variants: Variants = {
  initial: {
    y: 20,
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
      setSelectedYear(year);
    };
  };
  return (
    <motion.ul
      tw="h-full border-b flex sm:(flex-col border-l border-b-0) border-historyColor mb-6 w-full sm:(w-auto overflow-x-visible) overflow-x-auto"
      css={scrollbarNoneStyle}
      // variants={variants}
      // initial="initial"
      // animate="initial"
      // viewport={{ amount: 1 }}
      // whileInView="whileInView"
      transition={{ delay: 0.8 }}
    >
      {sortStrings(historyData, "year", { isReverse: true }).map((history) => (
        <YearGraphItemContainer key={history.year}>
          <button onClick={setYear(history.year)}>
            <Circle isSelectedYear={history.year === selectedYear} />
            <Year isSelectedYear={history.year === selectedYear}>
              {history.year}
            </Year>
          </button>
        </YearGraphItemContainer>
      ))}
    </motion.ul>
  );
};
export default YearPicker;
