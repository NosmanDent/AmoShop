import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section>
      <div>
        <div className="flex flex-1  w-full h-[300px] bg-stone-300 mb-20">
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-serif font-bold text-red-700 flex items-center justify-center mx-auto">
            ABOUT US
          </h1>
          <div className="flex absolute items-center ml-4 mt-4 gap-2">
            <Link to="/">
              <h1 className="text-sm font-semibold text-black hover:text-white">
                Home
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
