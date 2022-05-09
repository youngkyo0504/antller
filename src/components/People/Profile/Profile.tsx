import tw, { css } from "twin.macro";
import React, { FC } from "react";
import { motion, MotionConfig, Variants } from "framer-motion";
import profileData from "./profile.json";
interface ProfileProps {}
const Container = tw(
  motion.div
)`w-full rounded-xl px-content max-w-content mx-auto relative z-index[3] flex`;

const variants: Variants = {
  onView: {
    transition: {
      duration: 0.3,
      // first child는 parent가 나타나고 0.5s 후에 나타난다.
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  hidden: {},
  transition: {},
};
const personVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  onView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};
const Profile: FC<ProfileProps> = ({}) => {
  return (
    <Container
      css={{ cursor: "grab" }}
      drag="x"
      dragConstraints={{ right: 0, left: -1000 }}
      variants={variants}
      initial={"hidden"}
      whileInView={"onView"}
    >
      {profileData.map((member, index) => (
        <motion.div
          tw="relative flex[0 0 auto]  lg:(ml-36 first:ml-0) w-1/2 overflow-hidden rounded-xl"
          variants={personVariants}
          key={member.name}
          viewport={{ amount: 1 }}
        >
          <img
            draggable={false}
            tw="user-select[none] w-full "
            src={`/images/people/${index + 1}.png`}
            alt=""
          />
          <div tw="text-white flex absolute left[5%] bottom[3%] text-center items-center">
            <p tw="text-lg">{member.name}</p>
            <div tw="ml-2 text-sm text-gray relative before:(absolute w-[1px] top-[50%] left-0 h-[70%] translate-y-[-50%] content bg-gray)">
              <span tw="px-1  ">{member.role}</span>
            </div>
          </div>
        </motion.div>
      ))}
      sd
    </Container>
  );
};

export default Profile;
