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
      <div className="font-mono font-thin text-center text-white text-1xl md:text-2xl animate-me">
        Front•End•Developer
      </div>

      <style jsx>{`
        .animate-me {
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
          transform: scale(1);
        }
        /* .animate-me span {
          background-color: hsla(188, 100%, 54%, 1);
        } */
        @media screen and (min-width: 900px) {
          .animate-me {
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
    if (typeof window !== "undefined" && size.width) {
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
    <div className="flex flex-col justify-between w-screen h-screen p-10 text-black">
      <h1
        data-aos="slide-right"
        id="name"
        className="self-center text-3xl md:self-start font-pacifico"
      >
        Adam O&apos;Neill
      </h1>
      <div data-aos="fade-in" data-aos-delay="500">
        {[...Array(numRows)].map((value, index) => (
          <AnimatedText key={index} />
        ))}
      </div>
      <h1
        data-aos="slide-left"
        data-aos-anchor="#name"
        className="self-center text-3xl md:self-end font-pacifico"
      >
        Available for hire
      </h1>
      <div className="absolute bottom-0 -translate-x-1/2 left-1/2">
        <p className="text-md md:text-3xl animate-bounce">↓</p>
      </div>
    </div>
  );
}
