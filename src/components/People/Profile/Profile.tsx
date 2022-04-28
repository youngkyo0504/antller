import tw, { css } from "twin.macro";
import React, { FC } from "react";
import { motion, MotionConfig } from "framer-motion";
import profileData from "./profile.json";
interface ProfileProps {}
const Container = tw(
  motion.div
)`w-full rounded-xl max-w-content mx-auto relative z-index[3] flex`;
const Profile: FC<ProfileProps> = ({}) => {
  return (
    <Container
      css={{ cursor: "grab" }}
      drag="x"
      dragConstraints={{ right: 0, left: -1000 }}
    >
      {profileData.map((member, index) => (
        <motion.div
          tw="relative flex[0 0 auto]  lg:(ml-36 first:ml-0) w-1/2 overflow-hidden rounded-xl"
          key={member.name}
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
