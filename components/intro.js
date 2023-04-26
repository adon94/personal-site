import Image from "next/image";
import { usePageReady } from "../utils";

export default function Intro({ children }) {
  const pageReady = usePageReady();

  return (
    <>
      <div
        className="flex items-center justify-center w-screen h-screen transition-all snap-start"
        style={{ opacity: pageReady ? 0 : 1 }}
      >
        <Image
          src="./loading.svg"
          alt="loading animation"
          width={80}
          height={80}
          priority
        />
      </div>
      <section
        className="absolute left-0 top-0 w-screen transition-all h-fill snap-start"
        style={{ opacity: pageReady ? 1 : 0 }}
      >
        {children}
      </section>
    </>
  );
}
