import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { FC } from "react";
import "twin.macro";
interface PaginationBtnProps {
  isEndAnimation: boolean;
  paginate: Function;
  setIsEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}
export const PaginationBtns: FC<PaginationBtnProps> = ({
  isEndAnimation,
  paginate,
  setIsEndAnimation,
}) => {
  return (
    <>
      <div
        className="next group"
        tw=""
        onClick={() => {
          if (isEndAnimation) {
            paginate(1);
            setIsEndAnimation(false);
          } else {
            console.log("false임...");
          }
        }}
      >
        <ChevronRightIcon tw="mr-6 h-10 ease-in group-hover:(block opacity-100)  opacity-0" />
      </div>
      <div
        className="prev group"
        onClick={() => {
          if (isEndAnimation) {
            paginate(-1);
            setIsEndAnimation(false);
          }
        }}
      >
        <ChevronLeftIcon tw="ml-6 h-10  ease-in group-hover:(block opacity-100)  opacity-0" />
      </div>
      <style jsx>{`
        .next,
        .prev {
          min-width: 120px;
          width: 13vw;
          // top: calc(50% - 20px);
          top: 0;
          position: absolute;
          // background: black;
          color: white;
          border-radius: 30px;
          height: 100%;
          display: flex;
          align-items: center;
          user-select: none;
          cursor: pointer;
          font-weight: bold;
          font-size: 18px;
          z-index: 3;
        }
        .next {
          right: 0px;
          justify-content: end;
        }

        .prev {
          left: 0px;
        }
      `}</style>
    </>
  );
};
export default PaginationBtns;
