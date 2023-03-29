import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function ScrollAnimations({ scrollElement, children }) {
  const { scrollYProgress } = useScroll({
    container: scrollElement,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const slideRight = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const slideLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <AnimatePresence>
      <div className="flex flex-col items-center justify-between w-screen px-5 py-8 overflow-hidden text-black md:h-screen h-fill md:p-10">
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
          style={{ translateX: slideLeft }}
          transition={{ delay: 0.8 }}
          className="self-start text-5xl md:text-6xl font-pacifico"
        >
          Adam&nbsp;
          <br />
          O&apos;Neill
        </motion.h1>
        <motion.div
          key="hero-anim"
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              scale: 0,
            },
            animate: {
              scale: 1,
            },
          }}
          transition={{ delay: 0.8 }}
          style={{ scale: scale }}
        >
          {children}
        </motion.div>
        <motion.h1
          key="available"
          style={{ translateX: slideRight }}
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
          transition={{ delay: 0.8 }}
          className="self-end text-5xl text-right bottom-8 md:text-6xl font-pacifico"
        >
          Available
          <br />
          &nbsp;for hire
        </motion.h1>
        <div className="absolute bottom-8 left-8 md:-translate-x-1/2 md:left-1/2">
          <p className="text-6xl md:text-3xl animate-bounce">↓</p>
        </div>
      </div>
    </AnimatePresence>
  );
}
