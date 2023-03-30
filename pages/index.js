import { useRef } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Intro from "../components/intro";
import WhatDo from "../components/whatDo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import AnimatedHero from "../components/motion/animatedHero";

const ScrollAnimations = dynamic(
  () => import("../components/motion/scrollAnimations"),
  {
    ssr: false,
  }
);

export default function Home() {
  const scrollElement = useRef();
  return (
    <>
      <Head>
        <title>Front End Dev - Adam O&apos;Neill</title>
        <meta name="description" content="Front end developer for hire." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        ref={scrollElement}
        className="relative h-full overflow-scroll overflow-x-hidden bg-texture snap-mandatory snap-y"
      >
        <Intro>
          <ScrollAnimations scrollElement={scrollElement}>
            <AnimatedHero />
          </ScrollAnimations>
        </Intro>
        <WhatDo />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
