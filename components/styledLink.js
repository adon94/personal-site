export default function StyledLink({ href, className, children }) {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`email ${className}`}
      >
        {children}
      </a>
      <style jsx>{`
        a {
          position: relative;
          text-decoration: none;
          align-self: center;
        }

        a::after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 8%;
          bottom: -15%;
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
  );
}
