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
        className="next"
        onClick={() => {
          if (isEndAnimation) {
            paginate(1);
            setIsEndAnimation(false);
          } else {
            console.log("false임...");
          }
        }}
      >
        <ChevronRightIcon />
      </div>
      <div
        className="prev"
        onClick={() => {
          if (isEndAnimation) {
            paginate(-1);
            setIsEndAnimation(false);
          }
        }}
      >
        <ChevronLeftIcon />
      </div>
      <style jsx>{`
        .next,
        .prev {
          top: calc(50% - 20px);
          position: absolute;
          background: black;
          color: white;
          border-radius: 30px;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
          cursor: pointer;
          font-weight: bold;
          font-size: 18px;
          z-index: 3;
        }
        .next {
          right: 10px;
        }

        .prev {
          left: 10px;
        }
      `}</style>
    </>
  );
};
export default PaginationBtns;
