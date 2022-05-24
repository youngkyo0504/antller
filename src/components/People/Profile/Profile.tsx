import tw, { css } from "twin.macro";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { motion, MotionConfig, motionValue, Variants } from "framer-motion";
import profileData from "./profile.json";
import { useElementWIdth, useWindowHeight } from "@hooks";
interface ProfileProps {}
const Container = tw(
  motion.div
)`relative z-index[3] flex mt-mo-about-item sm:(mt-about-item pt-0 )max-w-content w-full pt-3  mx-auto `;

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
  const { windowWidth } = useWindowHeight();
  const [grabConstraintsX, setGrabConstraintsX] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    // const itemWidth = windowWidth * 0.5;
    const itemWidth = sliderRef.current.offsetWidth * 0.5;
    const allMargin = windowWidth * 0.25; // 어림잡아 놓은 값
    const newValue = windowWidth - (itemWidth * 4 + allMargin);

    setGrabConstraintsX(newValue);
    console.log(newValue);
  }, [windowWidth]);
  const getdragConstraints = () => {
    return {
      right: 0,
      left: grabConstraintsX,
    };
  };
  return (
    <Container
      key={grabConstraintsX}
      css={{ cursor: "grab" }}
      drag="x"
      ref={sliderRef}
      dragElastic={0.2}
      dragConstraints={{
        right: 0,
        left: grabConstraintsX || -500,
      }}
    >
      {profileData.map((member, index) => (
        <div
          tw="relative flex[0 0 auto] mx-4  w-1/2 text-sm sm:text-base md:text-lg overflow-hidden "
          key={member.name}
        >
          <img
            draggable={false}
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
    </Container>
  );
};

export default Profile;

{
  /* <div tw="max-w-content mx-auto">
<motion.div tw="overflow-visible relative mt-mo-about-item sm:mt-about-item mx-auto">
  <motion.div
    tw="relative w-full flex"
    // key={grabConstranitsY}
    css={{ cursor: "grab" }}
    drag="x"
    ref={sliderRef}
    // dragElastic={0.5}
    dragConstraints={constraintRef}
    // dragConstraints={{
    //   right: 0,
    //   left: grabConstranitsY,
    //   // https://codesandbox.io/s/framer-motion-slider-ref-pg8dfc?file=/src/App.js:347-362
    //   // 여기서 해결 방법 찾기
    //   // https://merrily-code.tistory.com/46
    // }}
  >
    {profileData.map((member, index) => (
      <div
        tw="relative flex[0 0 auto] mx-4   w-64 overflow-hidden "
        key={member.name}
      >
        <img
          draggable={false}
          tw="user-select[none] w-full rounded-xl"
          src={`/images/people/${index + 1}.png`}
          alt=""
        />
        <div tw="user-select[none] sm:pl-content pl-mo-content text-white flex absolute left[5%] bottom[3%] text-center items-center">
          <p tw="sm:text-lg ">{member.name}</p>
          <div tw="ml-2 text-xs sm:text-sm text-gray relative before:(absolute w-[1px] top-[50%] left-0 h-[70%] translate-y-[-50%] content bg-gray)">
            <span tw="px-1  ">{member.role}</span>
          </div>
        </div>
      </div>
    ))}
  </motion.div>
  <motion.div tw="absolute" style={constraintStyle} ref={constraintRef} />
</motion.div>
</div> */
}
