import dynamic from "next/dynamic";
import Head from "next/head";
import Intro from "../sections/intro";
import WhatDo from "../sections/whatDo";
import Portfolio from "../sections/portfolio";
import Contact from "../sections/contact";
import Footer from "../components/footer";
import AnimatedHero from "../components/motion/animatedHero";

import { getCopy, getMeta, getProjects } from "@/utils/sanity";

const ScrollAnimations = dynamic(
  () => import("../components/motion/scrollAnimations"),
  {
    ssr: false,
  }
);

export default function Home({ copy, meta, projects }) {
  return (
    <>
      <Head>
        <title>{meta.value.title}</title>
        <meta name="description" content={meta.value.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://assets4.lottiefiles.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>

      <main className="min-h-screen bg-texture">
        <Intro>
          <ScrollAnimations copy={copy.value}>
            <AnimatedHero copy={copy.value} />
          </ScrollAnimations>
        </Intro>
        <WhatDo copy={copy.value} />
        <Portfolio projects={projects} />
        <Contact copy={copy.value} />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const [copy, meta, projects] = await Promise.allSettled([
    getCopy(),
    getMeta(),
    getProjects(),
  ]);
  return {
    props: {
      copy,
      meta,
      projects,
    },
  };
}
