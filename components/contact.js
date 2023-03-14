import StyledLink from "./styledLink";

export default function Contact() {
  return (
    <div className="flex items-center justify-center flex-1 w-full h-screen text-black">
      <div>
        <h2 className="my-5 text-xl text-center md:text-2xl font-pacifico">
          Let&apos;s connect:
        </h2>
        <div
          data-aos="slide-up"
          className="p-5 bg-white border-2 border-black rounded-3xl w-fit md:p-20"
        >
          <StyledLink
            href="mailto:hello@adamcodes.io"
            className="my-5 text-3xl font-bold text-center md:text-7xl"
          >
            hello@adamcodes.io
          </StyledLink>
        </div>
      </div>
    </div>
  );
}
