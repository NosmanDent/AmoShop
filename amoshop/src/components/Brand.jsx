// Importing required modules and components from React and other files
import React from "react";
import Swiper from "react-id-swiper"; // Importing the react-id-swiper library
import "swiper/css"; // Importing the Swiper CSS
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import fagOne from "../assets/f14.jpg";
import fagFour from "../assets/f1.jpg";
import fagSix from "../assets/f9.jpg";
import { Link } from "react-router-dom";

const Brand = () => {
  // Reference to the Swiper container
  const swiperRef = React.useRef(null);

  // Swiper parameters
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  // Function to move to the next slide
  const goNext = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Function to move to the previous slide
  const goPrev = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // JSX rendering of the component
  return (
    <div className="relative my-24 overflow-hidden">
      <div className="font-bold  md:text-4xl sm:text-3xl text-2xl text-center text-black mb-6">
        Fragrance
      </div>
      {/* Swiper container */}
      <Swiper ref={swiperRef} {...params}>
        {/* Slide 1 */}
        <div className="h-[500px] flex items-center">
          <img src={fagOne} alt="" className="w-1/2 h-[500px]" />
          <div className="bg-black w-1/2 h-[500px] flex flex-col items-start">
            <p className="text-white text-sm md:text-2xl mt-2 ml-2 bg-white/10 rounded-lg py-3 px-5 text-center md:text-start">
              Perfume is like music that you wear.
            </p>
            <p className="text-white text-sm md:text-2xl m-auto kids_g rounded-lg py-3 px-5 text-center md:text-start">
              Buy your best Fragrance today...
            </p>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="bg-black h-[500px] flex items-center">
          <div className="bg-black w-1/2 h-[500px] flex flex-col items-start">
            <p className="text-white text-sm md:text-2xl mt-2 ml-2 bg-white/10 rounded-lg py-3 px-5 text-center md:text-start">
              Nothing is more memorable than a smell. ...
            </p>
            <p className="text-white text-sm md:text-2xl m-auto kids_g rounded-lg py-3 px-5 text-center md:text-start">
              Buy your best Fragrance today...
            </p>
          </div>
          <img src={fagFour} alt="" className="w-1/2 h-[500px]" />
        </div>
        {/* Slide 3 */}
        <div className="bg-black h-[500px] flex items-center">
          <div className="kids_g w-1/2 h-[500px] flex flex-col items-start">
            <p className="text-white text-sm md:text-2xl mt-2 ml-2 bg-white/10 rounded-lg py-3 px-5 text-center md:text-start">
              Perfume is a story in odor, sometimes poetry in memory.
            </p>
            <p className="text-white text-sm md:text-2xl m-auto kids_g rounded-lg py-3 px-5 text-center md:text-start">
              Buy your best Fragrance today...
            </p>
          </div>
          <img src={fagSix} alt="" className="w-1/2 h-[500px]" />
        </div>
      </Swiper>
      {/* Swiper pagination */}
      <div className="absolute bottom-0 w-full flex justify-center pb-4">
        <div className="swiper-pagination"></div>
      </div>
      {/* Navigation arrows */}
      <div
        className="absolute top-1/2 left-0 z-50 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
        onClick={goPrev}
      >
        <div className="swiper-button-prev swiper-button text-white">
          <FaChevronLeft />
        </div>
      </div>
      <div
        className="absolute top-1/2 right-0 z-50 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center"
        onClick={goNext}
      >
        <div className="swiper-button-next swiper-button text-white">
          <FaChevronRight />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center mt-4">
        <Link to="shop">
          <button className="bg-black py-2 px-6 text-center text-white md:text-lg text-md font-semibold rounded-full">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Brand;
