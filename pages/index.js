import Head from "next/head";
import WhatDo from "../components/whatDo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { useRef } from "react";
// import Portfolio from "../components/portfolio";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("../components/intro"), {
  ssr: false,
});

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
        <Intro scrollElement={scrollElement} />
        <WhatDo />
        {/* <Portfolio /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
