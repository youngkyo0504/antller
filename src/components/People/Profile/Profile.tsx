import tw, { css } from "twin.macro";
import React, { FC } from "react";
import { motion, MotionConfig } from "framer-motion";

interface ProfileProps {}
const Container = tw(
  motion.div
)`w-full rounded-xl max-w-content mx-auto relative z-index[3] flex`;
const Profile: FC<ProfileProps> = ({}) => {
  return (
    <Container drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={1}>
      {["1", "2", "3", "4"].map((number) => (
        <motion.img
          draggable={false}
          key={number}
          tw="user-select[none] w-1/2 ml-10 first:ml-0"
          src={`/images/people/${number}.png`}
          alt=""
        />
      ))}
      sd
    </Container>
  );
};

export default Profile;
