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

const UnderLine = tw.span`absolute left-0 bottom-[-10%] w-full transition-colors duration-500 group-hover:bg-antller-black h-[1px]`;
const ImageContainer = tw.div` h-auto  relative ease-out  overflow-hidden transition-all pb-[62.9032258065%] height[100%]`;
const Title = tw.h2`text-underline-offset[0.25rem] relative
text-xl font-semibold transition-all ease-in `;
const Container = tw.div`h-full flex flex-col justify-between   mb-6 cursor-pointer z-0`;

function WorkItem({ id, title, subCategory, index }: WorkItemProps) {
  return (
    <Link passHref href={`/work/${id}`}>
      <Container className="group">
        {/* Image Container */}
        <div tw="w-full relative block h-full">
          <ImageContainer>
            <Image layout="fill" src={`/work-img/img${index}.jpg`} alt="" />
          </ImageContainer>
        </div>
        <div tw="mt-2.5">
          <Title>
            <span tw="relative">
              {title}
              <UnderLine />
            </span>
          </Title>
        </div>
      </Container>
    </Link>
  );
}

export default WorkItem;
