import { useEffect } from "react";
import Letterize from "letterizejs";
import anime from "animejs/lib/anime.es.js";
import { isMobile } from "react-device-detect";

function AnimatedText() {
  return (
    <>
      <div className="text-1xl md:text-4xl text-center animate-me">
        front_end_dev•adam_o_neill
      </div>

      <style jsx>{`
        .animate-me span {
          display: inline-block;
        }
        .animate-me {
          text-transform: uppercase;
          letter-spacing: 0px;
          margin: 0;
          transform: scale(1);
        }
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      const test = new Letterize({
        targets: ".animate-me",
      });

      const animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(100, {
          grid: [test.list[0].length, test.list.length],
          from: "center",
        }),
        loop: true,
      });

      animation
        .add({
          scale: 0.8,
        })
        .add({
          letterSpacing: isMobile ? "2px" : "10px",
        })
        .add({
          scale: 1,
        })
        .add({
          letterSpacing: isMobile ? "0px" : "6px",
        });
    }
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center content-center">
      {[...Array(14)].map((value, index) => (
        <AnimatedText key={index} />
      ))}
    </div>
  );
}
