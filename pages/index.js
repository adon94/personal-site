import { useRef } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { createClient } from "next-sanity";
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

export default function Home({ copy }) {
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
          <ScrollAnimations copy={copy} scrollElement={scrollElement}>
            <AnimatedHero copy={copy} />
          </ScrollAnimations>
        </Intro>
        <WhatDo copy={copy} />
        <Contact copy={copy} />
        <Footer />
      </main>
    </>
  );
}

const client = createClient({
  projectId: process.env.SANITY_ID,
  dataset: process.env.SANITY_ENV,
  useCdn: false,
});

export async function getStaticProps() {
  const copy = await client.fetch(`*[_type == "site-copy"][0]`);

  return {
    props: {
      copy,
    },
  };
}
