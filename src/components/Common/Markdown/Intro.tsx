import { Children, FC, PropsWithChildren } from "react";
import tw from "twin.macro";

interface IntroProps {
  content: string;
  color?: string; // rgba, rgb, HexCode
}
const Intro = ({ content, color }: IntroProps) => {
  return (
    <div className="sm:my-[1.333em] my-[1.25em]  text-center justify-end  font-bold text-xl sm:text-2xl not-prose mb-5 ">
      <p
        style={{
          backgroundImage: color ? `linear-gradient(${color}, ${color})` : "",
        }}
        className="  inline bg-[length:100%_0.7em] bg-no-repeat bg-[0_140%] text-center "
      >
        {`“${content}”`}
      </p>
    </div>
  );
};

export default Intro;
