import { motion } from "framer-motion";
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
  isHome?: boolean;
}

const UnderLine = tw.span`absolute left-0 bottom-[-10%] w-full transition-colors duration-500 group-hover:bg-antller-black h-[1px]`;
const ImageContainer = tw.div` h-auto  relative ease-out  overflow-hidden transition-all pb-[62.9032258065%] height[100%]`;
const Title = tw.span`text-underline-offset[0.25rem] relative
text-lg sm:text-xl font-semibold transition-all ease-in `;
const Container = tw.div` flex flex-col justify-between   mb-6 cursor-pointer z-0`;

function WorkItem({ isHome, id, title, subCategory, index }: WorkItemProps) {
  return (
    <Link passHref href={`/work/${id}`}>
      <a href="">
        <Container css={[isHome ? tw`h-full` : ""]} className="group">
          {/* Image Container */}
          <div
            className="group"
            tw="w-full relative block h-full   after:(transition-opacity top-0 left-0 content w-full h-full absolute bg-black opacity-0 z-20 group-hover:opacity-10 block  duration-[400ms] transition-timing-function[cubic-bezier(0.4, 0, 0.25, 1)])"
          >
            <ImageContainer>
              <Image
                tw="group-hover:scale-110 transition duration-[600ms] transition-timing-function[cubic-bezier(0.4, 0, 0.25, 1)]"
                layout="fill"
                objectFit="cover"
                src={`/images/works/${id}.png`}
                alt=""
              />
            </ImageContainer>
          </div>
          <div tw="mt-2.5">
            <Title>
              <span tw="relative ">{title}</span>
            </Title>
          </div>
        </Container>
      </a>
    </Link>
  );
}

export default WorkItem;
