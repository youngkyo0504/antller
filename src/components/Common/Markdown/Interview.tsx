import { Children, FC } from "react";
import tw from "twin.macro";
import WhileInViewImage from "../WhileInViewImage";
interface InterviewProps {
  name: string;
  position?: string;
  content: string;
  reverseOrder?: boolean;
  imgUrl: string;
}
const Interview: FC<InterviewProps> = ({
  name,
  position,
  content,
  reverseOrder,
  imgUrl,
  children,
}) => {
  return (
    <div tw="flex flex-row my-16" className="not-prose">
      <div
        css={[
          tw`w-1/2 overflow-hidden flex items-center`, // Add base styles first
          reverseOrder && tw`order-2`, // Then add conditional styles
        ]}
      >
        <WhileInViewImage src={imgUrl} />
      </div>
      <div
        tw=" w-1/2 p-8 flex flex-col justify-center  font-bold text-[1.7rem]  leading-10"
        style={{ wordBreak: "keep-all" }}
      >
        {children}
        <p tw="mt-4 pr-4 text-[#94A3B8] text-lg font-medium">
          <span>{name}</span> <span className="text-sm">{position}</span>
        </p>
      </div>
    </div>
  );
};

export default Interview;
