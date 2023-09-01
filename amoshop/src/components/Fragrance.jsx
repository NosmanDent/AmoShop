import React from "react";
import { Link } from "react-router-dom";
import fag001 from "../assets/fag001.jpg";
import fag002 from "../assets/fag002.jpg";
import Swiper from "./Swiper";
import ProductCardFragrance from "../components/ProductCardFragrance";
import { productsArrayFragrance } from "../ProductStoreFragrance";

// Define the Fragrance functional component
const Fragrance = () => {
  return (
    <section>
      {/* First section */}
      <div>
        <div className="flex flex-1 w-full h-[300px] graf_g mb-20">
          {/* Heading */}
          <h1 className="lg:text-6xl text-5xl font-serif font-bold text-[#22c93e] flex items-center justify-center mx-auto">
            FRAGRANCE
          </h1>
          {/* Navigation */}
          <div className="flex absolute items-center ml-4 mt-4 gap-2">
            <Link to="/">
              <h1 className="text-sm font-semibold text-[#22c93e] hover:text-white">
                Home
              </h1>
            </Link>
          </div>
        </div>
        {/* Featured products */}
        <div className="mx-20 mb-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* First featured product */}
            <div className="w-full">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={fag001}
                  alt=""
                  className="w-full h-[300px] object-cover"
                />
                <h1 className="text-sm text-stone-500 font-semibold">
                  MISS GLAVENI BANIK SHOE
                </h1>
                <h1 className="text-bold text-3xl text-stone-800">
                  Charismatic
                </h1>
                <h1 className="text-3xl font-bold text-stone-800 border-b-4 border-stone-700 pb-2 cursor-pointer">
                  Shop Now
                </h1>
              </div>
            </div>
            {/* Second featured product */}
            <div className="w-full">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={fag002}
                  alt=""
                  className="w-full h-[300px] object-cover"
                />
                <h1 className="text-sm text-stone-500 font-semibold">
                  TOIPOLI ITALIAN SHOW
                </h1>
                <h1 className="text-bold text-3xl text-stone-800">New</h1>
                <h1 className="text-3xl font-bold text-stone-800 border-b-4 border-stone-700 pb-2 cursor-pointer">
                  Shop Now
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Displaying product cards */}
      <div className="">
        <div className="flex flex-wrap items-center justify-center">
          {productsArrayFragrance.map((product, idx) => (
            <div className="" key={idx}>
              <ProductCardFragrance product={product} />
            </div>
          ))}
        </div>
      </div>
      {/* Related articles */}
      <div className="flex flex-col mt-16">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-stone-700 text-center">
          Related Article
        </h1>
        <Swiper />
      </div>
    </section>
  );
};

export default Fragrance;
