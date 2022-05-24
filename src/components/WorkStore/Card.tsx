import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";
interface PortfolioItemProps {
  id: string;
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

function PortfolioItem({ id, title, subCategory }: PortfolioItemProps) {
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
          <div tw="   w-full  h-full mx-auto   rounded-2xl  ">
            <motion.div tw=" h-auto  relative pb-[62.9032258065%] ease-out  overflow-hidden transition-all  height[100%] ">
              <Image
                layout="fill"
                tw="w-full h-full"
                src={`/images/${id}.png`}
                objectFit={"cover"}
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <motion.div tw="mt-2">
          <div>
            <h2
              className=""
              tw="text-underline-offset[0.25rem] relative
             text-2xl font-bold transition-all ease-in  "
            >
              <span tw="relative ">
                {title}
                <span tw="absolute left-0 bottom-[-5%] w-full transition-colors duration-300 group-hover:bg-antller-black h-[1px]"></span>
              </span>
            </h2>
          </div>
        </motion.div>
      </motion.li>
    </Link>
  );
}

export default PortfolioItem;
