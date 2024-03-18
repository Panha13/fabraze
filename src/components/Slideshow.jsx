import React, { useEffect, useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { slideData } from "../constants";
import { Swipeable } from "react-swipeable";

const ArrowButton = ({ direction, onClick, Icon }) => {
  return (
    <button
      className={`absolute ${direction}-0 transition-all ease-in-out duration-300 hover:bg-white rounded-full p-2 mx-4 text-2xl`}
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
  const handleSwipeLeft = () => {
    next();
  };

  const handleSwipeRight = () => {
    prev();
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
    <Swipeable onSwipedLeft={handleSwipeLeft} onSwipedRight={handleSwipeRight}>
      <section className="flex items-center overflow-hidden relative">
        <div
          className={`flex transition-transform ease-out duration-500 translate-x-[-${
            curr * 100
          }vw]`}
        >
          {slideData.map((item) => (
            <div key={item.id} className={`w-screen bg-[${item.bg}]`}>
              <div className="flex flex-col md:flex-row justify-between items-center max-container px-5 lg:px-20 h-svh">
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
              ></div>
            ))}
          </div>
        </div>
        <ArrowButton direction="left" onClick={prev} Icon={GoArrowLeft} />
        <ArrowButton direction="right" onClick={next} Icon={GoArrowRight} />
      </section>
    </Swipeable>
  );
};

export default Slideshow;

// {
//   /* <div className="w-full h-full flex justify-end">
//         <img src={slideImg} className="object-cover  h-full" alt="Slideshow" />
//       </div>
//       <div className="absolute bottom-0 h-full flex justify-start items-center z-10">
//         <div className="block">
//           <h3 className="text-xl font-medium tracking-widest uppercase">
//             <span># </span>New Arrivals
//           </h3>
//           <h1 className="text-6xl font-bold uppercase my-2">Women Fusion</h1>
//           <hr className="w-1/5 rounded border-2 border-red" />
//           <p className="text-md text-dark my-2 w-2/3">
//             Discover a blend of fashion and comfort in our Women's Fusion
//             collection
//           </p>
//           <button className="uppercase p-2 mt-5 text-md bg-darkest text-white ">
//             Shop Now
//           </button>
//         </div>
//       </div> */
// }
