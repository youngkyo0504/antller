import { motion } from "framer-motion";
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
const InterviewCol: FC<InterviewProps> = ({
  name,
  position,
  content,
  reverseOrder,
  imgUrl,
  children,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      tw="flex flex-col mb-48"
      className="not-prose"
      viewport={{ margin: "0px -20px 0px -500px", amount: 0.5, once: true }}
    >
      <div
        css={[
          tw`  flex items-center`, // Add base styles first
          reverseOrder && tw`order-2`, // Then add conditional styles
        ]}
      >
        <WhileInViewImage src={imgUrl} />
      </div>
      <div
        tw=" p-8 flex flex-col justify-center  font-bold text-[1.4rem]  leading-7"
        style={{ wordBreak: "keep-all" }}
      >
        {content}
        <p tw="mt-4 pr-4 text-[#94A3B8] text-lg font-medium">
          <span>{name}</span> <span className="text-sm">{position}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default InterviewCol;
