import { motion } from "framer-motion";
import Image from "next/image";
import tw from "twin.macro";
const WhileInViewImage = ({
  src,
  alt = "image",
}: {
  src: string;
  alt?: string;
}) => {
  return (
    <motion.div
      tw="overflow-hidden rounded-xl w-full h-full relative"
      // initial={{ opacity: 0, y: 60 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{
      //   duration: 0.7,
      //   ease: "easeOut",
      //   opacity: { duration: 0.3 },
      // }}
      // viewport={{ once: true }}
    >
      <div tw="scale-[1.22]">
        <Image
          alt={alt}
          className="hey"
          tw=" h-full rounded-xl w-full"
          width={450}
          height={253}
          src={src}
        />
      </div>
    </motion.div>
  );
};

export default WhileInViewImage;
