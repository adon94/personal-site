import { useEffect, useRef } from "react";
import Letterize from "letterizejs";
import anime from "animejs/lib/anime.es.js";
import { useIsMobile, usePageReady } from "../utils";

export default function AnimatedHero() {
  const animation = useRef();
  const test = useRef();
  const isMobile = useIsMobile();
  const pageReady = usePageReady();
  const text = "Front_End_Developer";

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
    return <div></div>;
  }
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
    </>
  );
}
