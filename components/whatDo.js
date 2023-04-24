import { PortableText } from "@portabletext/react";

export default function WhatDo({ copy }) {
  return (
    <section
      id="MyContainerId"
      className="relative flex flex-col items-center justify-center h-full py-10 snap-start md:py-20"
    >
      <div className="flex items-center justify-center px-5 md:px-0">
        <div className="z-10 flex items-center justify-center w-full p-6 mx-auto text-4xl md:text-5xl leading-normal md:leading-normal text-center text-black rounded-md font-pacifico md:px-5 md:w-1/2 md:py-8">
          <PortableText value={copy.whatDo} />
        </div>
      </div>
    </section>
  );
}
