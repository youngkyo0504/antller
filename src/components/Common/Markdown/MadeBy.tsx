import { Children, FC } from "react";
import tw from "twin.macro";

const SubRole = ({ role, name }: { role: string; name: string }) => {
  return (
    <div tw="mr-5">
      <p tw="uppercase leading-tight text-xl mt-4   font-bold">{role}</p>
      <p tw="mt-0 leading-tight font-medium">{name}</p>
    </div>
  );
};

const MainRole = ({ role, name }: { role: string; name: string }) => {
  return (
    <div>
      <p tw="text-2xl uppercase font-bold"> {role}</p>
      <p tw="text-xl leading-loose font-medium ">{name}</p>
    </div>
  );
};
interface MadeByProps {
  main?: { key: string; name: string };
  content?: string;
  reverseOrder?: boolean;
}
const MadeBy: FC<MadeByProps> = ({ main, children }) => {
  return (
    <div tw="flex flex-col " className="not-prose font-bold">
      <MainRole name="©ANTTLER" role="PROVISION & PLANNING" />
      <MainRole name="나무거꾸로서다 (@treestands.film)" role="video by" />
      <div tw="flex flex-col">
        <div tw="flex">
          {[
            { role: "Director", name: "서준호" },
            { role: "producer", name: "이상윤" },
            { role: "music", name: "우혜원" },
          ].map((item) => (
            <SubRole key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MadeBy;
