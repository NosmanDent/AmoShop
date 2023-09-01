import React from "react";
import Beauty from "./Beauty";
import Brand from "./Brand";
import Banner from "./Banner";
import Card from "./CardRow";
import slides from "./Slides";
import slidesTwo from "./SlidesTwo";
import CardRowTwo from "./CardRowTwo";
import { Link } from "react-router-dom";
import Swiper from "./Swiper";

const RestofPage = () => {
  return (
    <section className="mt-32 font-serif">
      <Beauty />
      <Brand />
      <div className="font-bold  md:text-4xl sm:text-3xl text-2xl text-center text-black mb-6 font-serif">
        Collections
      </div>
      <div className="flex flex-row items-center justify-center gap-2 overflow-x-scroll scroll-smooth mb-5 mx-10">
        <Card slides={slides} />
        <CardRowTwo slidesTwo={slidesTwo} />
      </div>
      <div className="flex flex-1 items-center justify-center mb-5">
        <Link to="shop">
          <button className="kids_g  py-2 px-6 text-center text-white md:text-lg text-md font-semibold rounded-full">
            SHOP NOW
          </button>
        </Link>
      </div>
      <Banner />

      <div className="flex flex-col mt-16">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-stone-700 text-center">
          Related Article
        </h1>
        <Swiper />
      </div>
    </section>
  );
};

export default RestofPage;
