import { motion } from "framer-motion";
import React, { useState } from "react";

const Work = () => {
  const [elems, setElems] = useState([
    {
      heading: "Pixelflakes",
      subheading: "Architectural Marketing Agency",
      video: "/videos/Pixelflakes.mp4",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Rino & Pelle",
      subheading: "Effortless chic lifestyle",
      video: "/videos/Rino&Pelle.mp4",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Aebele Interiors",
      subheading: "Luxurious design experience",
      video: "/videos/AebeleInteriors.mp4",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
    },
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto py-20 px-5 sm:px-20">
        <div className="featured flex gap-3">
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
          <h3 className="capitalize">Featured Projects</h3>
        </div>
        <h1 className="text-6xl my-5 sm:text-[13rem] sm:leading-none sm:tracking-tight overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
            className="inline-block origin-left"
          >
            Work
          </motion.span>
        </h1>
        <p className="leading-tight text-md">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems sm:flex sm:flex-wrap sm:gap-2 mt-10">
          {elems.map((item, index) => {
            return (
              <div key={index} className="elem w-full sm:w-[48%] mt-10">
                <div className="video w-full relative overflow-hidden h-[104vw] sm:h-[96%]">
                  <motion.img
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    data-scroll
                    data-scroll-speed="-.5"
                    className="hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover"
                    src={item.image}
                    alt=""
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="block relative z-[1] w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3]"
                    src={item.video}
                  ></video>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">{item.heading}</h3>
                  <h3 className="capitalize opacity-40">{item.subheading}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
