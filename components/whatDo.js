// import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function WhatDo() {
  // const { scroll } = useLocomotiveScroll()
  return (
    <>
      <div className="h-screen flex justify-center">
        <p data-scroll data-scroll-speed="6" className="is-inview c-header_title_line text-5xl md:text-9xl text-center my-5">
          I support designers and agencies by bringing websites to life.
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
