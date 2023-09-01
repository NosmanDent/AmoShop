import React, { useRef, useEffect, useState } from "react";
import ProductCardNew from "../components/ProductCardNew";
import { productsArrayNew } from "../ProductStoreNew";
import Swiper from "swiper";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageSliderTwo from "./ImageSliderTwo";

const WhatIsNew = () => {
  const swiperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageSource = isHovered
    ? "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80"
    : "https://plus.unsplash.com/premium_photo-1668724079336-a4976d93ac33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";

  const breakpoints = {
    280: {
      slidesPerView: 1,
      spaceBetween: 150,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    360: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 4,
        spaceBetween: 1,
        grabCursor: false,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: breakpoints,
      });
    }
  }, []);

  return (
    <section>
      <div className="flex  flex-row items-center justify-between lg:mx-20 md:mx-20 mx-10 mt-16 mb-3 whitespace-nowrap">
        <h1 className=" font-bold lg:text-3xl md:text-2xl sm:text-xl text-[15px] font-serif ">
          New
        </h1>

        <Link to="shop">
          <button className="font-semibold border border-black rounded-full lg:py-3 lg:px-5 md:py-2 md:px-4 py-1 px-3 lg:text-normal md:text-sm sm:text-xs text-[10px] ">
            VIEW MORE
          </button>
        </Link>
      </div>
      <div className="relative flex flex-col flex-shrink-0 h-100 overflow-hidden mb-10  mx-4 pl-4">
        <div className=" bg-white relative flex flex-col flex-shrink-0  w-full h-100 overflow-hidden ">
          <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
              {productsArrayNew.map((product, idx) => (
                <div className="swiper-slide relative" key={idx}>
                  <ProductCardNew product={product} />
                </div>
              ))}
            </div>
            <div className="swiper-scrollbar"></div>
            <div className="flex flex-1 flex-row items-center justify-between px-4 pb-4 cursor-pointer z-50">
              <div
                className="swiper-button-prev md:text-2xl text-xl bg-white/70 hover:bg-black/50 hover:text-white text-black p-3 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <FaChevronLeft />
              </div>
              <div
                className="swiper-button-next md:text-2xl text-xl bg-white/70 hover:bg-black/50 hover:text-white text-black p-3 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mx-4 md:mx-6">
        <div className="relative inline-block w-full md:w-1/2 h-full">
          <ImageSliderTwo />
          <div className=" w-full  absolute top-0 left-0 bg-black/50 flex flex-col flex-1 items-center justify-center h-[400px]">
            <h1 className="text-white flex flex-row items-center font-bold tracking-tighter font-serif">
              “Every moment is a fresh beginning.”
            </h1>
            <Link to="/shop">
              <button className="kids_g py-2 px-6 text-center text-white md:text-lg text-md font-semibold rounded-full">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="relative inline-block w-full md:w-1/2 h-[400px]">
          <img
            className="w-full h-full rounded-lg shadow-lg"
            src={imageSource}
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsNew;
