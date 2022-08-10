import { useEffect } from 'react';
import Letterize from 'letterizejs'
import anime from 'animejs/lib/anime.es.js';
import { isMobile } from 'react-device-detect';

function AnimatedText() {
  return (
    <>
    <div className="text-1xl md:text-4xl text-center animate-me">
      fullstack_dev•adam_o_neill
    </div>

    <style jsx>{`
        .animate-me span {
          display: inline-block;
        }
        .animate-me {
          /* text-transform: uppercase; */
          letter-spacing: 3px;
          margin: 0;
        }
        @media screen and (min-width: 900px) {
          .animate-me {
            letter-spacing: 6px;
          }
        }
      `}</style>
    </>
  );
}

export default function Intro() {
  useEffect(() => {
    if(typeof window !== 'undefined') {
      const test = new Letterize({
        targets: ".animate-me"
      });
      console.log('0', test.list[0].length)
      console.log('1', test.list.length)

      const animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(100, {
          grid: [test.list[0].length, test.list.length],
          from: 'center'
        }),
        loop: true
      });

      animation
        .add({
          scale: 0.8,
        })
        .add({
          letterSpacing: isMobile ? '5px' : '10px'
        })
        .add({
          scale: 1
        })
        .add({
          letterSpacing: isMobile ? '3px' : '6px'
        });
    }
  }, [])
  
  return (
    <div className="h-screen container flex flex-col justify-center content-center">
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      <AnimatedText />
      {/* <div className="text-3xl md:text-8xl text-left my-5">
        <span>Fullstack</span>
        <br></br>
        <span>Dev</span>
      </div>
      <h1 data-scroll data-scroll-speed="8" data-scroll-position="top" className="text-3xl md:text-8xl text-right my-5 self-end">
        <span>Adam</span>
        <br></br>
        <span>O&apos;Neill</span>
      </h1> */}
    </div>
  )
}
