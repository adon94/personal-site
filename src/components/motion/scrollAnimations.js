import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { PortableText } from "@portabletext/react";
import AnimatedHero from "./animatedHero";

export default function ScrollAnimations({ children, copy }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["100vh end", "200vh end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <AnimatePresence>
      <div
        ref={containerRef}
        className="w-screen px-5 py-8 overflow-hidden text-black h-fill md:h-screen md:p-10 flex"
      >
        <motion.div
          className="flex flex-col items-center justify-between grow"
          style={{ scale }}
        >
          <motion.h1
            key="name"
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                translateX: -300,
              },
              animate: {
                translateX: 0,
              },
            }}
            className="self-start text-5xl md:text-6xl font-pacifico"
          >
            <PortableText value={copy.introTopLeft} />
          </motion.h1>
          <div className="anim-hero">
            <motion.div
              key="hero-anim"
              initial="initial"
              animate="animate"
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
              }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <AnimatedHero copy={copy} />
            </motion.div>
          </div>
          <motion.h1
            key="available"
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                translateX: 300,
              },
              animate: {
                translateX: 0,
              },
            }}
            className="self-end text-5xl text-right md:text-6xl font-pacifico"
          >
            <PortableText value={copy.introBottomRight} />
          </motion.h1>
          <div className="absolute bottom-8 left-8 md:-translate-x-1/2 md:left-1/2">
            <p className="text-6xl md:text-3xl animate-bounce">↓</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
