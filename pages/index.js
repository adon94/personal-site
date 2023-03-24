import Head from "next/head";
import Intro from "../components/intro";
import WhatDo from "../components/whatDo";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { useEffect, useRef } from "react";
// import Portfolio from "../components/portfolio";

export default function Home() {
  const scrollElement = useRef();
  useEffect(() => {
    const scrollE = scrollElement.current;
    function handleScroll() {
      window.document.body.style.setProperty(
        "--scroll",
        scrollE.scrollTop / (scrollE.scrollHeight - scrollE.offsetHeight)
      );
    }
    scrollE.addEventListener("scroll", handleScroll);
    return () => scrollE.removeEventListener("scroll", handleScroll);
  }, []);
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
        <Intro />
        <WhatDo />
        {/* <Portfolio /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
