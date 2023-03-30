import Flowers from "./motion/flowers";

export default function WhatDo() {
  return (
    <section
      id="MyContainerId"
      className="relative flex flex-col items-center justify-center h-full py-10 snap-start md:py-20"
    >
      <div className="absolute inset-0 flex items-center justify-center w-full h-screen scale-150 md:scale-100">
        <Flowers />
      </div>
      <div className="flex items-center justify-center px-5 md:px-0">
        <div className="z-10 flex items-center justify-center w-full px-6 mx-auto bg-white border-2 border-black rounded-md md:px-5 md:w-1/2">
          <p className="my-6 text-2xl font-semibold text-center text-black w-fit md:my-8 lg:text-4xl">
            I help brands connect with their customers through beautiful web
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
