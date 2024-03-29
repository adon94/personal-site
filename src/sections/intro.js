import Image from "next/image";
import { usePageReady } from "@/utils/index";
import ScrollAnimations from "@/components/motion/scrollAnimations";

export default function Intro({ copy }) {
  const pageReady = usePageReady();

  return (
    <section className="h-screen sticky inset-0">
      <div
        className="w-screen transition-all h-fill snap-start"
        style={{ opacity: pageReady ? 1 : 0 }}
      >
        <ScrollAnimations copy={copy} />
      </div>
      <div
        className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen transition-all snap-start"
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
    </section>
  );
}
