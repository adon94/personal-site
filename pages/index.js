import Head from "next/head";
import styles from "../styles/Home.module.css";
import Intro from "../components/intro";
import WhatDo from "../components/whatDo";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div data-scroll-section className={styles.container}>
      <Head>
        <title>Front End Dev - Adam O&apos;Neill</title>
        <meta name="description" content="Front end developer for hire." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Intro />
        <WhatDo />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <p>
          Created on&nbsp;
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="next-link"
          >
            Next.js
          </a>
          &nbsp;by Adam O&apos;Neill.
        </p>
      </footer>
      <style jsx>{`
        .next-link {
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
