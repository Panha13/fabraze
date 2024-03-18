import React, { useEffect, useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { slideData } from "../constants";

const ArrowButton = ({ direction, onClick, Icon }) => {
  return (
    <button
      className={`absolute ${direction}-0 transition-all ease-in-out duration-300 hover:bg-white max-md:hidden rounded-full p-2 mx-4 text-2xl`}
      onClick={onClick}
    >
      <Icon className="text-dark/30" />
    </button>
  );
};

const Slideshow = () => {
  const [curr, setCurr] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slideData.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slideData.length - 1 ? 0 : curr + 1));

  const goToSlide = (index) => {
    setCurr(index);
  };

  // AutoSlide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 10000);

    setAutoSlideInterval(interval);

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [curr]);
  return (
    <section className="flex items-center overflow-hidden relative">
      <div
        className={`flex transition-transform ease-out duration-500 translate-x-[-${
          curr * 100
        }vw]`}
      >
        {slideData.map((item) => (
          <div key={item.id} className={`w-screen bg-[${item.bg}]`}>
            <div className="flex flex-col md:flex-row justify-between items-center max-container px-5 lg:px-20 h-[90svh]">
              <div className="inline-block text-center md:text-left w-full mt-12 mb-5">
                <h3 className="text-md md:text-xl font-medium tracking-widest uppercase">
                  <span># </span>
                  {item.subtitle}
                </h3>
                <h1 className="text-5xl md:text-7xl font-bold uppercase my-4">
                  {item.title}
                </h1>
                <div className="flex  max-md:justify-center">
                  <hr className="w-32 rounded border-2 border-red" />
                </div>
                <p className="text-sm text-dark my-4 md:w-2/3">{item.desc}</p>
                <button className="uppercase py-2 px-4 mt-5 text-md bg-darkest text-white">
                  Shop Now
                </button>
              </div>
              <img
                src={item.image}
                className="object-cover h-full"
                alt="Slideshow"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 right-0 left-0">
        <div className="flex justify-center items-center gap-1">
          {slideData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3  bg-${
                index === curr ? "dark" : "dark/30"
              } rounded-full cursor-pointer transition-colors duration-500`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      <ArrowButton direction="left" onClick={prev} Icon={GoArrowLeft} />
      <ArrowButton direction="right" onClick={next} Icon={GoArrowRight} />
    </section>
  );
};

export default Slideshow;
