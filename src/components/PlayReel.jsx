import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const PlayReel = () => {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        scrub: 1,
        pin: true,
      },
    });
    tl.to(
      videodiv.current,
      {
        width: "105%",
        height: "105%",
        ease: Power4,
      },
      "a"
    )
      .to(
        play.current,
        {
          x: "100%",
          ease: Power4,
        },
        "a"
      )
      .to(
        reel.current,
        {
          x: "-100%",
          ease: Power4,
        },
        "a"
      );
  });
  return (
    <div
      ref={parent}
      className="w-full h-screen overflow-hidden relative bg-black"
    >
      <div
        ref={videodiv}
        className="w-40 sm:w-96 aspect-video overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          autoPlay
          muted
          loop
          className="w-full h-full scale-[1.1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/videos/reel.mp4"
        ></video>
      </div>
      <div className="overlay absolute w-full h-full text-white flex flex-col justify-between py-20">
        <div className="w-full flex items-center justify-center gap-3">
          <svg
            data-v-669b4a84=""
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              data-v-669b4a84=""
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h3 className="text-sm">Work in motion</h3>
        </div>
        <h1 className="w-full justify-center gap-[30vw] sm:gap-96 items-center flex">
          <div ref={play} className="text-6xl sm:text-8xl">
            Play
          </div>
          <div ref={reel} className="text-6xl sm:text-8xl">
            Reel
          </div>
        </h1>
        <p className="text-center px-10 text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default PlayReel;
