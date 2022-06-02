import tw from "twin.macro";
import React, { FC } from "react";
import { motion } from "framer-motion";
import profileData from "./profile.json";
import { useSlide, useWindowGeometry } from "@hooks";
import Image from "next/image";

interface ProfileProps {}

const Container = tw(
  motion.div
)`relative z-index[3] flex mt-mo-about-item sm:(mt-about-item pt-0 px-content)  max-w-content w-full pt-3 px-mo-content mx-auto `;

const Profile: FC<ProfileProps> = ({}) => {
  const { onPointerDown, onPointerMove, onPointerUp, onMouseLeave, slideRef } =
    useSlide();
  const { windowWidth } = useWindowGeometry();
  return (
    <Container css={{ cursor: "grab" }}>
      <motion.div
        key={windowWidth}
        ref={slideRef}
        draggable={false}
        tw="user-select[none] touch-action[pan-y] inline-block whitespace-nowrap transition-transform transition-duration[1s]  transition-timing-function[cubic-bezier(0, 0.55, 0.45, 1)]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerMove={onPointerMove}
        onMouseLeave={onMouseLeave}
      >
        {profileData.map((member, index) => (
          <div
            draggable={false}
            tw="user-select[none]  inline-block relative flex[0 0 auto] first-of-type:ml-0 mx-4  sm:(h-96 w-96) w-64 h-64 text-sm sm:text-base md:text-lg overflow-hidden "
            key={member.name}
          >
            <Image
              priority={true}
              layout="responsive"
              width={1}
              height={1}
              draggable={"false"}
              tw="user-select[none] w-full rounded-xl"
              src={`/images/people/${member.id}.jpg`}
              alt=""
            />
            <div tw="user-select[none]  text-white flex absolute left[5%] bottom[3%] text-center items-center">
              <p tw="sm:text-lg ">{member.name}</p>
              <div tw="ml-2 text-xs sm:text-sm text-gray relative before:(absolute w-[1px] top-[50%] left-0 h-[70%] translate-y-[-50%] content bg-gray)">
                <span tw="px-1  ">{member.role}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </Container>
  );
};

export default Profile;
