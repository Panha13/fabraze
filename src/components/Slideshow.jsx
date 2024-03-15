import React from "react";
import slideImg from "../assets/1.png";

const Slideshow = () => {
  return (
    <section className="relative px-5 lg:px-32 max-container h-svh bg-light">
      <div className="w-full h-full flex justify-end">
        <img src={slideImg} className="object-cover  h-full" alt="Slideshow" />
      </div>
      <div className="absolute bottom-0 h-full flex justify-start items-center z-10">
        <div className="block">
          <h3 className="text-xl font-medium tracking-widest uppercase">
            <span># </span>New Arrivals
          </h3>
          <h1 className="text-6xl font-bold uppercase my-2">Women Fusion</h1>
          <hr className="w-1/5 rounded border-2 border-red" />
          <p className="text-md text-dark my-2 w-2/3">
            Discover a blend of fashion and comfort in our Women's Fusion
            collection
          </p>
          <button className="uppercase p-2 mt-5 text-md bg-darkest text-white ">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
