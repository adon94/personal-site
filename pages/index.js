import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Intro from '../components/intro';
import WhatDo from '../components/whatDo';

export default function Home() {
  return (
    <div data-scroll-section className={styles.container}>
      <Head>
        <title>Fullstack Dev - Adam O&apos;Neill</title>
        <meta name="description" content="I bring websites to life." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Intro />
        <WhatDo />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Adam O&apos;Neill.
        </a>
      </footer>
    </div>
  )
}
