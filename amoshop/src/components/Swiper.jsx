import React from "react";
import Oneman from "../assets/oneman.jpg";
import articleone from "../assets/articleone.jpg";
import articletwo from "../assets/articletwo.jpg";
import articlethree from "../assets/articlethree.jpg";
import articlefour from "../assets/articlefour.jpg";
import articlefive from "../assets/articlefive.jpg";

export default () => {
  return (
    <div className="relative flex items-center justify-center w-full border-y-4 mt-4 pb-4 mb-10 smooth-scroll">
      <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
        <div className="relative flex flex-col flex-shrink-0 w-full sm:w-auto">
          <img
            className="object-cover object-center h-64 w-[500px]"
            src={Oneman}
            alt="Image 1"
          />
          <div className="flex flex-col items-center justify-center flex-1 mt-2">
            <h1 className="text-xs tracking-wider text-stone-600 font-mono">
              HEALTH & BODY
            </h1>
            <h1 className="text-lg tracking-wider font-bold text-stone-700 font-mono">
              What Makes Men's Skin Unique?
            </h1>
            <h1 className="text-xs text-stone-600 font-mono text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </h1>

            <h1 className="text-sm font-bold text-stone-800 border-b-2 border-stone-700 pb-2 cursor-pointer">
              Read More
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col flex-shrink-0 w-full sm:w-auto">
          <img
            className="object-cover object-center h-64 w-[500px]"
            src={articleone}
            alt="Image 2"
          />
          <div className="flex flex-col items-center justify-center flex-1 mt-2">
            <h1 className="text-xs tracking-wider text-stone-600 font-mono">
              TRENDING
            </h1>
            <h1 className="text-lg tracking-wider font-bold text-stone-700 font-mono">
              Shop easily with yur bag appilication!
            </h1>
            <h1 className="text-xs text-stone-600 font-mono text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </h1>

            <h1 className="text-sm font-bold text-stone-800 border-b-2 border-stone-700 pb-2 cursor-pointer">
              Read More
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col flex-shrink-0 w-full sm:w-auto">
          <img
            className="object-cover object-center h-64 w-[500px]"
            src={articlethree}
            alt="Image 2"
          />
          <div className="flex flex-col items-center justify-center flex-1 mt-2">
            <h1 className="text-xs tracking-wider text-stone-600 font-mono">
              TRENDING
            </h1>
            <h1 className="text-lg tracking-wider font-bold text-stone-700 font-mono">
              Ingredient Spotlight: Hyaluronic Acid
            </h1>
            <h1 className="text-xs text-stone-600 font-mono text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </h1>

            <h1 className="text-sm font-bold text-stone-800 border-b-2 border-stone-700 pb-2 cursor-pointer">
              Read More
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col flex-shrink-0 w-full sm:w-auto">
          <img
            className="object-cover object-center h-64 w-[500px]"
            src={articlefour}
            alt="Image 2"
          />
          <div className="flex flex-col items-center justify-center flex-1 mt-2">
            <h1 className="text-xs tracking-wider text-stone-600 font-mono">
              HEALTH & Beauty
            </h1>
            <h1 className="text-lg tracking-wider font-bold text-stone-700 font-mono">
              Make goals for 2023 and stick to them
            </h1>
            <h1 className="text-xs text-stone-600 font-mono text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </h1>

            <h1 className="text-sm font-bold text-stone-800 border-b-2 border-stone-700 pb-2 cursor-pointer">
              Read More
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col flex-shrink-0 w-full sm:w-auto">
          <img
            className="object-cover object-center h-64 w-[500px]"
            src={articletwo}
            alt="Image 2"
          />
          <div className="flex flex-col items-center justify-center flex-1 mt-2">
            <h1 className="text-xs tracking-wider text-stone-600 font-mono">
              HEALTH & BEAUTY
            </h1>
            <h1 className="text-lg tracking-wider font-bold text-stone-700 font-mono">
              What clean beauty means to you?
            </h1>
            <h1 className="text-xs text-stone-600 font-mono text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </h1>

            <h1 className="text-sm font-bold text-stone-800 border-b-2 border-stone-700 pb-2 cursor-pointer">
              Read More
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col flex-shrink-0 w-full sm:w-auto">
          <img
            className="object-cover object-center h-64 w-[500px]"
            src={articlefive}
            alt="Image 2"
          />
          <div className="flex flex-col items-center justify-center flex-1 mt-2">
            <h1 className="text-xs tracking-wider text-stone-600 font-mono">
              HOW TO
            </h1>
            <h1 className="text-lg tracking-wider font-bold text-stone-700 font-mono">
              How to enjoy a night in Paris like a true Parisian
            </h1>
            <h1 className="text-xs text-stone-600 font-mono text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </h1>

            <h1 className="text-sm font-bold text-stone-800 border-b-2 border-stone-700 pb-2 cursor-pointer">
              Read More
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
