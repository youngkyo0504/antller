import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
interface PaginationBtnsProps {
  isEndAnimation: boolean;
  paginate: Function;
  setIsEndAnimation: Function;
}
export function PaginationBtns({
  isEndAnimation,
  paginate,
  setIsEndAnimation,
}: PaginationBtnsProps) {
  return (
    <>
      {" "}
      <div
        className="next"
        onClick={() => {
          if (isEndAnimation) {
            paginate(1);
            setIsEndAnimation(false);
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
}
