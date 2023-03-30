import { useEffect, useRef } from "react";
import Letterize from "letterizejs";
import anime from "animejs/lib/anime.es.js";
import { usePageReady } from "../../utils";

export default function AnimatedHero() {
  const animation = useRef();
  const test = useRef();
  const pageReady = usePageReady();
  const text = "creative_dev";

  useEffect(() => {
    if (test.current && test.current.targets) test.current.deletterize();
    if (typeof window !== "undefined" && pageReady) {
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
  }, [pageReady]);

  return (
    <div className="anim-hero">
      {[...Array(text.length)].map((value, index) => (
        <div
          key={text + index.toString()}
          className="w-full font-mono text-lg font-thin text-center text-white md:text-xl whitespace-nowrap animate-me"
        >
          {text}
        </div>
      ))}
    </div>
  );
}
