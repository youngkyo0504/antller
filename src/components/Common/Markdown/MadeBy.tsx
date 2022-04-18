import { Children, FC } from "react";
import tw from "twin.macro";
interface MadeByProps {
  main?: { key: string; name: string };
  content?: string;
  reverseOrder?: boolean;
}
const MadeBy: FC<MadeByProps> = ({ main, children }) => {
  return (
    <div tw="flex flex-col " className="not-prose font-bold">
      <p tw="text-3xl     font-bold"> PROVISION & PLANNING</p>
      <p tw="text-2xl leading-loose font-medium ">©ANTTLER</p>
      <p tw="mt-4 text-3xl   font-bold">VIDEO BY</p>
      <p tw="text-2xl leading-loose ">나무거꾸로서다 (@treestands.film)</p>

      <div tw="flex flex-col">
        <div tw="flex">
          <div tw="mr-5">
            <p tw="leading-tight text-2xl mt-4  font-bold">DIRECTOR</p>
            <p tw="mt-0 leading-tight font-medium">서준호</p>
          </div>
          <div tw="mr-5">
            <p tw="leading-tight text-2xl mt-4   font-bold">PRODUCER</p>
            <p tw="mt-0 leading-tight font-medium">이상윤</p>
          </div>
          <div>
            <p tw="leading-tight text-2xl mt-4  font-bold">MUSIC</p>
            <p tw="mt-0 leading-tight font-medium  ">우혜원</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeBy;
