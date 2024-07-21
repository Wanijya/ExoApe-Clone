import gsap, { Linear, Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const Images = () => {
  const first = React.useRef(null);
  const second = React.useRef(null);
  const third = React.useRef(null);
  const fourth = React.useRef(null);
  const parent = React.useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1
      },
    });
    tl
    .to(first.current, {
      x: "50%",
      ease: Linear
    }, 'a')
    .to(second.current, {
      x: "-50%",
      ease: Linear
    }, 'a')
    .to(third.current, {
      x: "-50%",
      ease: Linear
    }, 'a')
    .to(fourth.current, {
      x: "50%",
      ease: Linear
    }, 'a')
  });
  return (
    <div ref={parent} className="w-full h-[100vh] bg-white flex items-center justify-center">
      <div className="w-[40%] sm:w-[20%] sm:h-[70%] h-1/2 relative">
        <div
          ref={first}
          className="w-20 sm:w-40 h-[7rem] sm:h-[15rem] -right-1/3 top-6 absolute"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={second} className="absolute w-[8rem] sm:w-[20rem] aspect-video -left-1/2 sm:-left-[17vw] top-1/3">
          <video
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={third}
          className="absolute w-[9rem] sm:w-[17rem] aspect-video -left-[70%] -bottom-10"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={fourth} className="absolute w-[10rem] sm:w-[17rem] aspect-[1.5/1] -right-[70%] sm:-right-[15vw] -bottom-[38%] sm:-bottom-[7vw]">
          <video
            autoPlay
            muted
            loop
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
