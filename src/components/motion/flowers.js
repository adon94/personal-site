import { useCallback, useEffect, useRef } from "react";
import { create } from "@lottiefiles/lottie-interactivity";

export default function Flowers() {
  const myRef = useRef();
  const setUpLottie = useCallback(async () => {
    (await import("@lottiefiles/lottie-player")).default;
    myRef.current.addEventListener("load", function (e) {
      create({
        mode: "scroll",
        player: "#lottie-animation",
        container: "#lottie-container",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [-100, 300],
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
    <div className="h-48">
      <lottie-player
        id="lottie-animation"
        ref={myRef}
        src="https://assets4.lottiefiles.com/private_files/lf30_r3xz9un5.json"
        style={{
          zIndex: 0,
          margin: "0 auto",
        }}
      ></lottie-player>
    </div>
  );
}
