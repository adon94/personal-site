import Image from "next/image";
import StyledLink from "./styledLink";

export default function Portfolio() {
  return (
    <section className="snap-start w-full px-4 py-10 text-black md:px-24">
      <div className="flex flex-col justify-center mx-auto w-fit">
        <h2 className="mb-6 text-2xl font-light font-pacifico md:text-md">
          Public work
        </h2>
        <div className="flex flex-col-reverse px-4 py-5 bg-white border-2 border-black rounded-lg md:py-10 md:px-7 md:flex-row md:justify-between">
          <div>
            <h3 className="mb-4 text-3xl text-left md:text-4xl">
              <StyledLink href="https://phasecraft.io/">
                Phasecraft company website
              </StyledLink>
            </h3>
            <code>React, Gatsby.js, styled-components</code>
          </div>
          <div className="mb-4 transition-all md:ml-36 md:mb-0 hover:scale-105">
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
    </section>
  );
}
