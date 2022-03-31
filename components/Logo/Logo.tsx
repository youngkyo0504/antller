import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";
import "twin.macro";
interface LogoProps {}

const line: Variants = {
  hidden: { pathLength: 0, opacity: 0, fill: "rgba(0, 0, 0, 0)" },
  animate: {
    pathLength: 1,
    opacity: 1,
    fill: "rgba(0, 0, 0, 0)",

    transition: {
      delay: 0.5,
      duration: 2,
      ease: "easeInOut",
      pathOffset: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.3 },
    },
  },
};
// const line = {
//   hidden: { pathLength: 0, opacity: 0 },
//   animate: (i: number) => {
//     const delay = 1 + i * 0.5;
//     return {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//         opacity: { delay, duration: 0.01 },
//       },
//     };
//   },
// };
// const icon: Variants = {
//   hidden: {
//     pathLength: 0,
//     opacity: 0,
//     fill: "transparent",
//   },
//   visible: {
//     fill: "black",
//     opacity: 1,
//     pathLength: 1,
//   },
// };
const Logo: FC<LogoProps> = () => {
  return <Image height={48} width={115} src={"/Antller_logotype_solid.png"} />;
};

export default Logo;

// logo
{
  /* <svg
className="h-16"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 202.52 163.28"
>
<g id="레이어_2" data-name="레이어 2">
  <g id="레이어_1-2" data-name="레이어 1">
    <path 
    d="M58.22,128.09c-4.86,14.4-10.79,29.88-14.13,35.19H72.25a190.12,190.12,0,0,0,9.56-24.12,76.59,76.59,0,0,0,17.62,2.63v.07l2,0,.32,0,1.35,0v0a76.59,76.59,0,0,0,17.62-2.63,190.12,190.12,0,0,0,9.56,24.12h28.16c-3.34-5.31-9.27-20.79-14.13-35.19A117.36,117.36,0,0,0,168.86,108h0c20.76-22,33.66-49.59,33.66-71.95A47,47,0,0,0,200.78,23c-3.24-11.31-10.9-19-21.56-21.81C168-1.71,156.76.73,146.57,8.25c-19.14,14.17-31.49,44.37-33,80.78a129.9,129.9,0,0,0,1.25,26,41.58,41.58,0,0,1-13.51,2.41A42.25,42.25,0,0,1,87.74,115,129.9,129.9,0,0,0,89,89c-1.55-36.42-13.9-66.62-33-80.8C45.75.73,34.46-1.71,23.3,1.18,12.64,3.94,5,11.68,1.74,23A47,47,0,0,0,0,36.07C0,58.43,12.9,86,33.66,108A117.3,117.3,0,0,0,58.22,128.09Zm79.93-38c1.48-34.24,13.39-54.81,23.13-62,3.1-2.29,6-3.41,8.87-3.41a12.06,12.06,0,0,1,2.89.39c1.4.38,3,1.09,4,4.77,3.64,12.64-5.14,39-26.14,61.25a98.35,98.35,0,0,1-12.71,11.4A120.94,120.94,0,0,1,138.15,90.09ZM25.45,29.81c1-3.67,2.63-4.38,4-4.75a11.74,11.74,0,0,1,2.9-.4c2.87,0,5.76,1.12,8.87,3.41,9.74,7.21,21.65,27.78,23.13,62a118,118,0,0,1-.07,12.37,98.35,98.35,0,0,1-12.71-11.4C30.59,68.82,21.81,42.46,25.45,29.81Z" />
  </g>
</g>
</svg> */
}
