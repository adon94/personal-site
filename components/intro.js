import { useEffect, useState } from "react";
import Letterize from "letterizejs";
import anime from "animejs/lib/anime.es.js";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function AnimatedText() {
  return (
    <>
      <div className="font-mono font-thin text-center text-white text-lg md:text-2xl animate-me bg-black md:bg-transparent w-fit md:w-full">
        Front_End_Developer
      </div>

      <style jsx>{`
        .animate-me {
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 3px;
          transform: scale(1);
        }
        /* .animate-me span {
          background-color: hsla(188, 100%, 54%, 1);
        } */
        @media screen and (min-width: 900px) {
          .animate-me {
            margin: 0;
            letter-spacing: 6px;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}

export default function Intro() {
  const size = useWindowSize();
  const isMobile = size.width < 768;
  useEffect(() => {
    if (typeof window !== "undefined" && size.width > 768) {
      const test = new Letterize({
        targets: ".animate-me",
      });

      const animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(200, {
          grid: [test.list[0].length, test.list.length],
          from: "center",
        }),
        // backgroundColor: ["hsla(188, 100%, 54%, 1)", "hsla(299, 100%, 54%, 1)"],
        loop: true,
        easing: "easeInOutElastic(1, .6)",
      });

      animation
        .add({
          scale: 0.8,
        })
        .add({
          letterSpacing: isMobile ? "3px" : "10px",
          borderRadius: 5,
        })
        .add({
          scale: 1,
        })
        .add({
          letterSpacing: isMobile ? "1px" : "6px",
        });
    }
  }, [size, isMobile]);

  if (!size.width)
    return (
      <div className="flex flex-col justify-between w-screen h-screen p-10 text-white"></div>
    );

  // set num of animated rows based on screen size
  const numRows = isMobile ? 8 : 13;

  return (
    <div className="flex flex-col justify-between items-center w-screen md:h-screen h-fill py-8 px-5 md:p-10 text-black overflow-hidden">
      <h1
        data-aos={!isMobile && "slide-right"}
        id="name"
        className="text-5xl md:text-6xl font-pacifico self-start"
      >
        Adam&nbsp;
        <br />
        O&apos;Neill
      </h1>
      <div data-aos={!isMobile && "fade-in"} data-aos-delay="500">
        {[...Array(numRows)].map((value, index) => (
          <AnimatedText key={index.toString()} />
        ))}
      </div>
      <h1
        data-aos={!isMobile && "slide-left"}
        data-aos-anchor="#name"
        className="text-5xl md:text-6xl self-end text-right font-pacifico"
      >
        Available
        <br />
        &nbsp;for hire
      </h1>
      <div className="absolute bottom-8 left-8 md:-translate-x-1/2 md:left-1/2">
        <p className="text-6xl md:text-3xl animate-bounce">↓</p>
      </div>
    </div>
  );
}
