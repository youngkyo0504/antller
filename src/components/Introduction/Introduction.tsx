import tw from "twin.macro";
import React, { FC } from "react";

interface IntroductionProps {}

const Introduction: FC<IntroductionProps> = ({}) => {
  return (
    <div tw="flex items-center justify-center h-screen">
      Introduction component{" "}
    </div>
  );
};

export default Introduction;
