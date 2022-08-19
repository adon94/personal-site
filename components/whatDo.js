import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function WhatDo() {
  const [scrollSpeed, setScrollSpeed] = useState(0);
  useEffect(() => {
    if (!isMobile) setScrollSpeed(6);
  }, []);
  return (
    <div className="container h-screen flex justify-center items-center">
      <p
        data-scroll
        data-scroll-speed={scrollSpeed}
        className="text-5xl md:text-9xl text-left my-5"
      >
        <span>I support</span>
        <br></br>
        <span>designers and</span>
        <br></br>
        <span>agencies with</span>
        <br></br>
        <span>front end</span>
        <br></br>
        <span>development.</span>
      </p>
    </div>
  );
}
