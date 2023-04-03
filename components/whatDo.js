import { PortableText } from "@portabletext/react";
import Flowers from "./motion/flowers";

export default function WhatDo({ copy }) {
  return (
    <section
      id="MyContainerId"
      className="relative flex flex-col items-center justify-center h-full py-10 snap-start md:py-20"
    >
      <div className="absolute inset-0 flex items-center justify-center w-full h-screen scale-150 md:scale-100">
        <Flowers />
      </div>
      <div className="flex items-center justify-center px-5 md:px-0">
        <div className="z-10 flex items-center justify-center w-full p-6 mx-auto text-2xl font-semibold text-center text-black bg-white border-2 border-black rounded-md md:px-5 md:w-1/2 lg:text-4xl md:py-8">
          <PortableText value={copy.whatDo} />
        </div>
      </div>
    </section>
  );
}
