import React from "react";
import Slideshow from "../components/Slideshow";
import Categories from "../components/Categories";
import Feature from "../components/Feature";
import Newslatter from "../components/Newslatter";

function Home() {
  return (
    <>
      <Slideshow />
      <Categories />
      <Feature />
      <Newslatter />
    </>
  );
}

export default Home;
