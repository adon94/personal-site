import { useCallback, useEffect, useRef } from "react";
import { create } from "@lottiefiles/lottie-interactivity";

export default function Flowers() {
  const myRef = useRef();
  const setUpLottie = useCallback(async () => {
    (await import("@lottiefiles/lottie-player")).default;
    myRef.current.addEventListener("load", function (e) {
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
