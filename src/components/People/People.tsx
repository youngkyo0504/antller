import tw from "twin.macro";
import React, { FC } from "react";
import AnimatedText from "@components/Common/AnimatedText";
import Profile from "./Profile";

interface PeopleProps {}
const Container = tw.div`bg-black text-white max-w-content mx-auto pt-36`;
const People: FC<PeopleProps> = ({}) => {
  return (
    <section tw="min-h-screen w-full overflow-hidden  z-index[1] relative">
      <Container>
        <AnimatedText titleOption={{ text: "People", color: "#4D90F4" }}>
          앤틀러의 얼굴들
        </AnimatedText>
      </Container>
      <div tw="mt-10 overflow-hidden relative">
        <Profile />
      </div>
    </section>
  );
};

export default People;
