import Image from "next/image";
import StyledLink from "./styledLink";

export default function Portfolio() {
  return (
    <div className="container md:h-screen flex flex-col justify-center md:px-24">
      <h3 className="text-2xl md:text-md font-light my-6 text-gray-300">
        Public projects
      </h3>
      <div className="flex flex-col-reverse md:flex-row md:justify-between">
        <div>
          <h4
            data-scroll
            // data-scroll-speed={scrollSpeed}
            className="text-3xl md:text-4xl text-left mb-4"
          >
            <StyledLink href="https://phasecraft.io/">
              Phasecraft company website
            </StyledLink>
          </h4>
          <code>React, Gatsby.js, styled-components</code>
        </div>
        <div className="border-4 mb-4 md:mb-0 hover:scale-105 transition-all">
          <a href="https://phasecraft.io/" target="_blank" rel="noreferrer">
            <Image
              src="/phasecraft-md.png"
              height={228}
              alt="Phasecraft homepage"
              width={356}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
