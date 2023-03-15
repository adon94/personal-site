export default function WhatDo() {
  return (
    <div className="relative flex flex-col my-10 md:my-20 md:h-full">
      <div className="sticky top-0 left-0 flex items-center w-full h-screen">
        <div
          data-aos="slide-up"
          data-aos-anchor-placement="top-bottom"
          className="flex items-center justify-center p-4 mx-auto bg-white border-2 border-black w-fit rounded-3xl md:p-20"
        >
          <p className="my-5 text-5xl font-semibold text-left text-black md:text-7xl">
            <span>I support</span>
            <br></br>
            <span>designers and</span>
            <br></br>
            <span>agencies with</span>
            <br></br>
            <span>front end</span>
            <br></br>
            <span>development.</span>
          </p>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
