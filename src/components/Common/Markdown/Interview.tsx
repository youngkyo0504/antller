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
const Interview: FC<InterviewProps> = ({
  name,
  position,
  content,
  reverseOrder,
  imgUrl,
  children,
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      viewport={{ amount: 0.2, once: true }}
      className="not-prose"
      tw="flex sm:(flex-row) flex-col md:(mb-36)"
    >
      <div
        css={[
          tw` sm:(w-1/2)  flex items-center`, // Add base styles first
          reverseOrder && tw`sm:(order-2)`, // Then add conditional styles
        ]}
      >
        <WhileInViewImage src={imgUrl} />
      </div>
      <div tw="sm:(w-1/2 p-8 text-[1.2rem]) text-sm py-4 flex flex-col justify-center  font-semibold  leading-normal">
        {content}
        <p tw="mt-4 pr-4 text-[#94A3B8] sm:(text-base) text-xs font-medium">
          <span>{name}</span> <span className="text-sm">{position}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Interview;
