import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import StyledLink from "../components/styledLink";
import { useDimensions, useIsMobile } from "../utils";

function AboutProject() {
  return (
    <div className="flex flex-col-reverse px-4 py-5 bg-white border-2 border-black rounded-lg md:py-10 md:px-7 md:flex-row md:justify-between">
      <div>
        <h3 className="mb-4 text-3xl text-left md:text-4xl">
          <StyledLink href="https://phasecraft.io/">Phasecraft.io</StyledLink>
        </h3>
        <code>React, Gatsby.js, styled-components</code>
      </div>
    </div>
  );
}

function ProjectPhoto() {
  return (
    <div className="cursor-go relative h-[250px] w-[141px] md:h-[400px] md:w-[225]">
      <Image src="/phasecraft.png" fill alt="Phasecraft homepage" />
    </div>
  );
}

export default function Portfolio() {
  const targetRef = useRef(null);
  const { width, height } = useDimensions();
  const isMobile = useIsMobile();
  const half = isMobile ? height / 2 : width / 2;
  const { scrollYProgress } = useScroll({
    offset: ["200vh end", "400vh end"],
  });
  const slideOne = useTransform(scrollYProgress, [0, 0.5], [-half, 0]);
  const slideTwo = useTransform(scrollYProgress, [0, 0.5], [half, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <AnimatePresence>
      <section
        className="sticky top-0 left-0 w-full"
        style={{ marginTop: "-100vh" }}
      >
        <motion.div
          style={{ scale }}
          className="h-screen overflow-hidden w-full flex flex-col md:flex-row text-black"
        >
          <motion.div
            className="w-full h-1/2 md:h-full md:w-1/2 bg-texture flex justify-center items-center md:items-center md:justify-end md:pr-10"
            style={{
              translateX: isMobile ? 0 : slideOne,
              translateY: isMobile ? slideOne : 0,
            }}
          >
            <div className="px-5 md:p-0">
              <h2 className="mb-6 text-2xl font-light font-pacifico md:text-md">
                Past project
              </h2>
              <AboutProject />
            </div>
          </motion.div>
          <motion.div
            className="w-full h-1/2 md:h-full md:w-1/2 bg-texture flex justify-center items-start md:items-center md:justify-start px-5 md:px-0 md:pl-10"
            style={{
              translateX: isMobile ? 0 : slideTwo,
              translateY: isMobile ? slideTwo : 0,
            }}
          >
            <ProjectPhoto />
          </motion.div>
        </motion.div>
      </section>
      <div ref={targetRef} className="h-screen" />
    </AnimatePresence>
  );
}
