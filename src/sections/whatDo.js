import { PortableText } from "@portabletext/react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Flowers from "../components/motion/flowers";

export default function WhatDo({ copy }) {
  const { scrollYProgress } = useScroll({
    offset: ["200vh end", "300vh end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <AnimatePresence>
      <section
        id="lottie-container"
        className="h-screen sticky top-0 left-0 bg-texture"
      >
        <motion.div
          style={{ scale }}
          className="flex flex-col items-center justify-center py-10 md:py-20"
        >
          <div className="w-full p-6 mx-auto text-4xl md:text-5xl leading-normal md:leading-normal text-center text-black rounded-md font-pacifico md:px-5 md:w-1/2 md:py-8">
            <PortableText value={copy.whatDo} />
          </div>
          <Flowers />
        </motion.div>
      </section>
    </AnimatePresence>
  );
}
