import { useRef } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { createClient } from "next-sanity";
import Intro from "../sections/intro";
import WhatDo from "../sections/whatDo";
import Contact from "../sections/contact";
import Footer from "../components/footer";
import AnimatedHero from "../components/motion/animatedHero";

const ScrollAnimations = dynamic(
  () => import("../components/motion/scrollAnimations"),
  {
    ssr: false,
  }
);

export default function Home({ copy, meta }) {
  const scrollElement = useRef();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://assets4.lottiefiles.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>

      <main
        ref={scrollElement}
        className="relative h-full overflow-x-hidden bg-texture"
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
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
});

export async function getStaticProps() {
  const [copy, meta] = await client.fetch(`*[_type in ["site-copy", "meta"]]`);
  return {
    props: {
      copy,
      meta,
    },
  };
}
