import React from "react";
import { Link } from "react-router-dom";
import shoeOne from "../assets/arno-senoner-Vn5VBVCP1EA-unsplash.jpg";
import shoeTwo from "../assets/b3.jpg";
import Swiper from "./Swiper";
import ProductCardWomen from "../components/ProductCardWomen";
import { productsArrayWomen } from "../ProductStoreWomen";

const Women = () => {
  return (
    <section>
      <div>
        <div className="flex flex-1  w-full h-[300px] women_g  mb-20">
          <h1 className="lg:text-6xl text-5xl font-serif font-bold text-pink-700 flex items-center justify-center mx-auto">
            WOMEN
          </h1>
          <div className="flex absolute items-center ml-4 mt-4 gap-2">
            <Link to="/">
              <h1 className="text-sm font-semibold text-stone-200 hover:text-white">
                Home
              </h1>
            </Link>
          </div>
        </div>

        <div className="mx-20 mb-10">
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="w-full">
              <div className="flex flex-col items-center justify-center ">
                <img
                  src={shoeOne}
                  alt=""
                  className="w-full h-[300px] object-cover"
                />
                <h1 className="text-sm text-stone-500 font-semibolbold ">
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
            <div className="w-full">
              <div className="flex flex-col items-center justify-center ">
                <img
                  src={shoeTwo}
                  alt=""
                  className=" w-full h-[300px] object-cover"
                />
                <h1 className="text-sm text-stone-500 font-semibolbold ">
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

      <div className="">
        <div className="flex flex-wrap items-center justify-center">
          {productsArrayWomen.map((product, idx) => (
            <div className="" key={idx}>
              <ProductCardWomen product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-16">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-stone-700 text-center">
          Related Article
        </h1>
        <Swiper />
      </div>
    </section>
  );
};

export default Women;
