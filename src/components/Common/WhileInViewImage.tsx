import { motion } from "framer-motion";
import Image from "next/image";

const WhileInViewImage = ({ src }: { src: string }) => {
  return (
    <motion.div
      tw="overflow-hidden rounded-xl w-full"
      // initial={{ opacity: 0, y: 60 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{
      //   duration: 0.7,
      //   ease: "easeOut",
      //   opacity: { duration: 0.3 },
      // }}
      // viewport={{ once: true }}
    >
      <Image
        tw="scale-[1.2] w-full "
        layout="responsive"
        width={1920}
        height={1080}
        src={src}
      />
    </motion.div>
  );
};

export default WhileInViewImage;
