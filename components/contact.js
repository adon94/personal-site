export default function Contact() {
  return (
    <>
      <div className="container h-screen flex flex-col justify-center">
        <p className="text-1xl md:text-2xl text-center my-5">
          Let&apos;s connect:
        </p>
        <a
          href="mailto:hello@adamcodes.io"
          target="_blank"
          rel="noreferrer"
          className="text-3xl md:text-7xl text-center my-5 email"
        >
          hello@adamcodes.io
        </a>
      </div>
      <style jsx>{`
        a {
          position: relative;
          text-decoration: none;
          /* width: fit-content; */
          align-self: center;
        }

        a::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #ffffff;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        a:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        } 
      `}</style>
    </>
  )
}
