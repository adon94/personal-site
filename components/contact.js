import StyledLink from "./styledLink";

export default function Contact() {
  return (
    <div className="relative flex flex-col items-center md:justify-center pb-20 md:py-44 flex-1 w-full md:h-screen text-black px-5">
      <h2 className="my-5 text-xl text-center md:text-2xl font-pacifico">
        I would love to hear from you.
      </h2>
      <div
        data-aos="slide-up"
        className="flex flex-col items-center p-3 md:p-5 bg-white border-2 border-black rounded-3xl md:w-2/3"
      >
        <p className="text-lg font-semibold text-center md:text-2xl">
          I am currently interested in remote front end developer roles with a
          focus on React, but also open to other opportunities.
        </p>
        <StyledLink
          href="mailto:hello@adamcodes.io"
          className="mt-3 text-2xl font-bold text-center md:mt-5 md:text-3xl"
        >
          hello@adamcodes.io
        </StyledLink>
      </div>
      <p className="absolute font-pacifico bottom-1 right-1 text-sm">
        Website made by Adam O&apos;Neill in 2023
      </p>
    </div>
  );
}
