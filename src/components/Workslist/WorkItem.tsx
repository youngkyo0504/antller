import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";
interface WorkItemProps {
  id: string;
  index: number;
  subCategory: string;
  category: string;
  title: string;
  pointOfInterest: number;
  theme?: string;
}
const variants: Variants = {
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: -15 },
  initial: { opacity: 0, y: 15 },
};

function WorkItem({ id, title, subCategory, index }: WorkItemProps) {
  return (
    <Link passHref href={`/work/${id}`}>
      <motion.li
        className="group"
        animate={"animate"}
        variants={variants}
        initial="initial"
        exit={"exit"}
        transition={{ type: "tween", duration: 0.15 }}
        tw="h-full flex flex-col justify-between   mb-6 cursor-pointer z-0 "
      >
        {/* Image Container */}
        <div tw="w-full  relative block h-full  ">
          <div
            // bg-[#1c1c1e]
            tw="   w-full  h-full mx-auto   rounded-2xl  "
          >
            <motion.div tw=" h-auto  relative ease-out  overflow-hidden transition-all  height[100%] ">
              {/* <img tw="rounded-2xl h-full " src={`/images/${id}.png`} alt="" /> */}
              <img
                tw="w-full h-full"
                src={`/work-img/img${index}.jpg`}
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <motion.div tw="mt-2.5">
          {/* <span tw=" text-sm uppercase">{subCategory}</span> */}
          <div>
            <h2
              className=""
              tw="text-underline-offset[0.25rem] relative
             text-xl font-semibold transition-all ease-in  "
            >
              {/* tw="group-hover:(background-image[linear-gradient(to bottom,#1a1a1a 75%,#1a1a1a 75%)] background-size[1px 1px] background-repeat[repeat-x] background-position[0 98%])" */}
              <span tw="relative  ">
                {title}
                <span tw="absolute left-0 bottom-[-10%] w-full transition-colors duration-500 group-hover:bg-antller-black h-[1px]"></span>
              </span>
            </h2>
          </div>
        </motion.div>
      </motion.li>
    </Link>
  );
}

export default WorkItem;
