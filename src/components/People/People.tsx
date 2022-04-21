import tw from "twin.macro";
import React, { FC } from "react";
import AnimatedText from "@components/Common/AnimatedText";

interface PeopleProps {}
const Container = tw.div`bg-black text-white max-w-content h-screen mx-auto py-36`;
const People: FC<PeopleProps> = ({}) => {
  return (
    <Container>
      <AnimatedText titleOption={{ text: "People", color: "#4D90F4" }}>
        앤틀러의 얼굴들
      </AnimatedText>
    </Container>
  );
};

export default People;
