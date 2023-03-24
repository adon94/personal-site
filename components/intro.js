import { useEffect, useRef, useState } from "react";
import Letterize from "letterizejs";
import anime from "animejs/lib/anime.es.js";

function useIsMobile() {
  // Initialize state with undefined width/height so server and client renders match
  const [isMobile, setIsMobile] = useState(false);

  function checkDevices() {
    return (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
  }

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setIsMobile(checkDevices() || window.innerWidth < 768);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return isMobile;
}

function AnimatedText() {
  const isMobile = useIsMobile();
  const text = "Front_End_Developer";
  if (isMobile) {
    return (
      <>
        {[...Array(6)].map((value, index) => (
          <div
            key={"mob" + index.toString()}
            className="px-5 my-1 font-mono text-lg font-thin text-center text-white bg-black w-fit"
          >
            {text}
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      {[...Array(13)].map((value, index) => (
        <div
          key={index.toString()}
          className="font-mono text-2xl font-thin text-center text-white animate-me md:w-full"
        >
          {text}
        </div>
      ))}

      <style jsx>{`
        .animate-me {
          text-transform: uppercase;
          margin: 0;
          letter-spacing: 6px;
          transform: none;
        }
      `}</style>
    </>
  );
}

export default function Intro() {
  const animation = useRef();
  const test = useRef();
  const isMobile = useIsMobile();
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setPageReady(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  useEffect(() => {
    if (test.current && test.current.targets) test.current.deletterize();
    if (typeof window !== "undefined" && !isMobile && pageReady) {
      test.current = new Letterize({
        targets: ".animate-me",
      });

      animation.current = anime({
        targets: test.current.listAll,
        delay: anime.stagger(250, {
          grid: [test.current.list[0].length, test.current.list.length],
          from: "center",
        }),
        scale: [
          { value: 0.7, easing: "easeOutSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 1200 },
        ],
        loop: true,
        complete: function (anim) {
          test?.current.deletterize();
        },
      });
    }
  }, [isMobile, pageReady]);

  if (!pageReady) {
    return (
      <div className="flex items-center justify-center w-screen h-screen text-5xl text-black snap-start"></div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-between w-screen px-5 py-8 overflow-hidden text-black snap-start md:h-screen h-fill md:p-10">
      <h1 className="self-start text-5xl slide-left md:text-6xl font-pacifico text-shadow-white">
        Adam&nbsp;
        <br />
        O&apos;Neill
      </h1>
      <div className="shrink-out">
        <AnimatedText />
      </div>
      <h1 className="self-end text-5xl text-right slide-right bottom-8 md:text-6xl font-pacifico text-shadow-white">
        Available
        <br />
        &nbsp;for hire
      </h1>
      <div className="absolute shrink-out bottom-8 left-8 md:-translate-x-1/2 md:left-1/2">
        <p className="text-6xl md:text-3xl animate-bounce">↓</p>
      </div>
    </section>
  );
}
