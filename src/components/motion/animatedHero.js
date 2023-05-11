import { useEffect, useRef } from "react";
import Letterize from "letterizejs";
import anime from "animejs/lib/anime.es.js";
import { useInView } from "framer-motion";
import { usePageReady } from "@/utils/index";

export default function AnimatedHero({ copy }) {
  const animation = useRef();
  const test = useRef();
  const elRef = useRef();
  const isInView = useInView(elRef);
  const pageReady = usePageReady();
  const text = copy.introHeroText;

  function initAnimation() {
    test.current = new Letterize({
      targets: ".animate-me",
    });

    animation.current = anime({
      targets: test.current.listAll,
      delay: anime.stagger(250, {
        grid: [test.current.list[0].length, test.current.list.length],
        from: "center",
        start: 1000,
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

  useEffect(() => {
    if (test.current && test.current.targets) test.current.deletterize();
    if (typeof window !== "undefined" && pageReady) {
      initAnimation();
    }
  }, [pageReady]);

  useEffect(() => {
    if (isInView && animation.current) {
      animation.current.restart;
    } else if (animation.current) {
      animation.current.pause;
    }
  }, [isInView]);

  if (!copy) return;

  return (
    <div ref={elRef}>
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
