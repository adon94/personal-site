import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import StyledLink from "@/components/styledLink";
import { useDimensions, useIsMobile } from "@/utils/index";
import { urlFor } from "@/utils/sanity";

function useParallax(value, distance) {
  return useTransform(value, [0, 0.5], [distance * 1.2, 0]);
}

function AboutProject({ project }) {
  return (
    <div className="flex flex-col-reverse px-4 py-5 bg-white border-2 border-black rounded-lg md:py-10 md:px-7 md:flex-row md:justify-between">
      <div>
        <h3 className="mb-4 text-3xl text-left md:text-4xl">
          <StyledLink href={project.showcaseUrl}>{project.title}</StyledLink>
        </h3>
        <code>{project.description}</code>
      </div>
    </div>
  );
}

function ProjectPhoto({ image, alt }) {
  return (
    <div className="cursor-go relative w-[141px] h-[250px] md:w-[225px] md:h-[400px]">
      <Image
        src={urlFor(image).height(400).url()}
        fill
        alt={alt}
        sizes="(max-width: 768px) 141px 250px, (max-width: 1200px) 225px, 400px"
      />
    </div>
  );
}

export default function Portfolio({ projects }) {
  const { width, height } = useDimensions();
  const isMobile = useIsMobile();
  const half = isMobile ? height / 2 : width / 2;
  const { scrollYProgress } = useScroll({
    offset: ["200vh end", "400vh end"],
  });
  const slideOne = useTransform(scrollYProgress, [0, 0.5], [-half, 0]);
  const slideTwo = useTransform(scrollYProgress, [0, 0.5], [half, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  const followOne = useParallax(scrollYProgress, -half);
  const followTwo = useParallax(scrollYProgress, half);

  return (
    <AnimatePresence>
      <section
        key="projects-section"
        className="sticky top-0 left-0 w-full"
        style={{ marginTop: "-100vh" }}
      >
        <motion.div
          key="portfolio"
          style={{ scale }}
          className="h-screen overflow-hidden w-full flex flex-col md:flex-row text-black"
        >
          <motion.div
            key="slide-one"
            className="w-full h-1/2 md:h-full md:w-1/2 bg-texture flex justify-center items-center md:items-center md:justify-end md:pr-10"
            style={{
              translateX: isMobile ? 0 : slideOne,
              translateY: isMobile ? slideOne : 0,
            }}
          >
            <motion.div
              key="follow-one"
              style={{ translateX: followOne }}
              className="px-5 md:p-0"
            >
              <h2 className="mb-6 text-2xl font-light font-pacifico md:text-md">
                Past project
              </h2>
              <AboutProject project={projects.value} />
            </motion.div>
          </motion.div>
          <motion.div
            key="slide-two"
            className="w-full h-1/2 md:h-full md:w-1/2 bg-texture flex justify-center items-start md:items-center md:justify-start px-5 md:px-0 md:pl-10"
            style={{
              translateX: isMobile ? 0 : slideTwo,
              translateY: isMobile ? slideTwo : 0,
            }}
          >
            <motion.div key="follow-two" style={{ translateX: followTwo }}>
              <ProjectPhoto
                image={projects.value.screenshot}
                alt={projects.value.title}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <div className="h-screen" />
    </AnimatePresence>
  );
}
