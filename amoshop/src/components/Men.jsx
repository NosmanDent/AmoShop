// Importing required modules from React
import React, { useRef } from "react";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";
import menOne from "../assets/articlefive.jpg";
import menTwo from "../assets/articlefour.jpg";
import ProductCardMen from "../components/ProductCardMen";
import { productsArrayMen } from "../ProductStoreMen";
import Swiper from "./Swiper";

// Define the Men functional component
const Men = () => {
  return (
    <section>
      {/* Men Section */}
      <div>
        {/* Men Header */}
        <div className="flex flex-1  w-full h-[300px] men_g mb-20">
          <h1 className="lg:text-6xl text-5xl font-serif font-bold text-green-800 flex items-center justify-center mx-auto">
            MEN
          </h1>
          <div className="flex absolute items-center ml-4 mt-4 gap-2">
            {/* Link to Home */}
            <Link to="/">
              <h1 className="text-sm font-semibold text-gray-700 hover:text-white">
                Home
              </h1>
            </Link>
          </div>
        </div>

        {/* Featured Men's Products */}
        <div className="mx-20 mb-10">
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="">
              <div className="flex flex-col items-center justify-center ">
                <img src={menOne} alt="" className=" h-[300px] object-cover" />
                <h1 className="text-sm text-stone-500 font-semibolbold ">
                  MISTER GIORDANI EAU DE TOILETTE
                </h1>
                <h1 className="text-bold whitespace-nowrap text-2xl md:text-3xl text-stone-800">
                  Bold and charismatic
                </h1>
                <h1 className="text-3xl font-bold text-stone-800 border-b-4 border-stone-700 pb-2 cursor-pointer">
                  Shop Now
                </h1>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col items-center justify-center ">
                <img src={menTwo} alt="" className="h-[300px] object-cover" />
                <h1 className="text-sm text-stone-500 font-semibolbold ">
                  MISTER GIORDANI EAU DE TOILETTE
                </h1>
                <h1 className="text-bold text-3xlwhitespace-nowrap text-2xl md:text-3xl text-stone-800">
                  New
                </h1>
                <h1 className="text-3xl font-bold text-stone-800 border-b-4 border-stone-700 pb-2 cursor-pointer">
                  Shop Now
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Men's Product Cards */}
      <div className="">
        <div className="flex flex-wrap items-center justify-center">
          {productsArrayMen.map((product, idx) => (
            <div className="" key={idx}>
              <ProductCardMen product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-16">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-stone-700 text-center">
          Related Article
        </h1>
        {/* Include the Swiper component */}
        <Swiper />
      </div>
    </section>
  );
};

export default Men;
