import { useCallback, useEffect, useRef } from "react";
import { create } from "@lottiefiles/lottie-interactivity";

function Flowers() {
  const myRef = useRef();
  const setUpLottie = useCallback(async () => {
    (await import("@lottiefiles/lottie-player")).default;
    myRef.current.addEventListener("load", function (e) {
      // 4. configure the interactivity library
      create({
        mode: "scroll",
        player: "#firstLottie",
        container: "#MyContainerId",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 150],
          },
        ],
      });
    });
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUpLottie();
    }
  }, [setUpLottie]);
  return (
    <lottie-player
      id={"firstLottie"}
      ref={myRef}
      src="https://assets4.lottiefiles.com/packages/lf20_jq1xghup.json"
      style={{
        zIndex: 0,
      }}
    ></lottie-player>
  );
}

export default function WhatDo() {
  return (
    <section
      id="MyContainerId"
      className="relative flex flex-col items-center justify-center h-full my-10 snap-start md:my-20"
    >
      <div className="absolute top-0 left-0 w-full h-screen scale-150 md:scale-100">
        <Flowers />
      </div>
      <div className="flex items-center justify-center px-5 md:px-0">
        <div className="z-10 flex items-center justify-center w-full px-6 mx-auto bg-white border-2 border-black rounded-md md:px-5 md:w-1/2">
          <p className="my-6 text-2xl font-semibold text-center text-black w-fit md:my-8 lg:text-4xl">
            I help brands connect to their customers through beautiful web
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
