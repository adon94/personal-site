import StyledLink from "./styledLink";

export default function Contact() {
  return (
    <div className="container h-screen flex flex-col justify-center">
      <p className="text-1xl md:text-2xl text-center my-5">
        Let&apos;s connect:
      </p>
      <StyledLink
        href="mailto:hello@adamcodes.io"
        className="text-3xl md:text-7xl text-center my-5"
      >
        hello@adamcodes.io
      </StyledLink>
    </div>
  );
}
