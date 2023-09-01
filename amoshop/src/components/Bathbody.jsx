import React from "react";
import { Link } from "react-router-dom";
import bodybath from "../assets/bodybath.jpg";
import bodybaths from "../assets/bodybaths.jpg";
import Swiper from "./Swiper";
import ProductCardBody from "../components/ProductCardBody";
import { productsArrayBody } from "../ProductStoreBody";

const Bathbody = () => {
  return (
    <section>
      {/* Banner Section */}
      <div>
        <div className="flex flex-1 w-full h-[300px] bath_g mb-20">
          {/* Title */}
          <h1 className="lg:text-6xl text-5xl font-serif font-bold text-stone-300 flex items-center justify-center mx-auto">
            BATH & BODY
          </h1>
          {/* Home Link */}
          <div className="flex absolute items-center ml-4 mt-4 gap-2">
            <Link to="/">
              <h1 className="text-sm font-semibold text-stone-200 hover:text-white">
                Home
              </h1>
            </Link>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mx-20 mb-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="w-full">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={bodybath}
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

            <div className="w-full">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={bodybaths}
                  alt=""
                  className=" w-full h-[300px] object-cover"
                />
                <h1 className="text-sm text-stone-500 font-semibold">
                  TOIPOLI ITALIAN SHOE
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

      {/* Displaying the products from the array */}
      <div className="">
        <div className="flex flex-wrap items-center justify-center">
          {productsArrayBody.map((product, idx) => (
            <div className="" key={idx}>
              {/* Render ProductCardBody component for each product */}
              <ProductCardBody product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-16">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-stone-700 text-center">
          Related Article
        </h1>
        {/* Render Swiper component */}
        <Swiper />
      </div>
    </section>
  );
};

export default Bathbody;
