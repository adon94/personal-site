import { useEffect } from "react";
import Letterize from "letterizejs";
import anime from "animejs/lib/anime.es.js";
import { isMobile } from "react-device-detect";

function AnimatedText() {
  return (
    <>
      <div className="font-mono font-thin text-center text-1xl md:text-2xl animate-me">
        Front•End•Developer
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
        delay: anime.stagger(200, {
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
    <div className="flex flex-col justify-between w-screen h-screen p-10 text-black">
      <h1 className="self-center text-3xl md:self-start font-pacifico">
        Adam O&apos;Neill
      </h1>
      <div className="">
        {[...Array(13)].map((value, index) => (
          <AnimatedText key={index} />
        ))}
      </div>
      <h1 className="self-center text-3xl md:self-end font-pacifico">
        Available for hire
      </h1>
    </div>
  );
}
