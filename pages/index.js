import { useRef } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Intro from "../components/intro";
import WhatDo from "../components/whatDo";
import Contact from "../components/contact";
import Footer from "../components/footer";

const ScrollAnimations = dynamic(
  () => import("../components/scrollAnimations"),
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
        className="relative h-full overflow-scroll bg-texture snap-mandatory snap-y"
      >
        <Intro>
          <ScrollAnimations scrollElement={scrollElement} />
        </Intro>
        <WhatDo />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
