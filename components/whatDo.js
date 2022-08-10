// import anime from 'animejs/lib/anime.es.js';

export default function WhatDo() {
  // const { scroll } = useLocomotiveScroll()
  return (
    <>
      <div className="container h-screen flex justify-center">
        <p data-scroll data-scroll-speed="6" className="is-inview c-header_title_line text-5xl md:text-9xl text-left my-5">
          <span>I support designers</span>
          <br></br>
          <span>and agencies by</span>
          <br></br>
          <span>bringing websites</span>
          <br></br>
          <span>to{' '}</span>
          <span data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-delay="0.16">l</span>
          <span data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-delay="0.14">i</span>
          <span data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-delay="0.12">f</span>
          <span data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-delay="0.10">e</span>
          <span data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-delay="0.08">.</span>
        </p>
      </div>
      <div className="h-screen">
        <p className="text-1xl md:text-1xl text-center my-5">
          PS: This website is still dead.
        </p>
      </div>
    </>
  )
}
