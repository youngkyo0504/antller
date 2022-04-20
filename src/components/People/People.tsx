import tw from "twin.macro";
import React, { FC } from "react";

interface PeopleProps {}

const People: FC<PeopleProps> = ({}) => {
  return (
    <div tw="bg-black  items-center justify-center h-screen">
      People component{" "}
    </div>
  );
};

export default People;
