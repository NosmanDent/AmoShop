// Importing required modules from React and framer-motion
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Define the MenuBar functional component
const MenuBar = () => {
  return (
    // Framer Motion wrapper for the entire MenuBar
    <motion.div className="flex flex-col py-2 px-16">
      {/* Framer Motion wrapper for the menu items */}
      <motion.div
        className="md:flex hidden flex-1 flex-wrap items-center justify-center xl:gap-6 gap-4 cursor-pointer whitespace-nowrap"
        initial={{
          opacity: 0, // Initial opacity of 0 to create fade-in effect
        }}
        whileInView={{
          opacity: 1, // When in view, set opacity to 1 to reveal the menu items
        }}
        transition={{
          duration: 5, // Duration of 5 seconds for the opacity transition
        }}
      >
        {/* Navigation Links */}
        {/* Using NavLink to create navigation links that highlight when active */}
        <NavLink
          to="/shop"
          className="font-semibold cursor-pointer bg-black hover:bg-blue-700 text-white rounded-md xl:py-2 xl:px-6 py-1 px-4 text-xs "
        >
          MEN
        </NavLink>
        <NavLink to="/shop/women">
          <button className="font-semibold cursor-pointer bg-black hover:bg-blue-700 text-white rounded-md xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            WOMEN
          </button>
        </NavLink>
        <NavLink to="/shop/bathandbodies">
          <button className="font-semibold cursor-pointer bg-black hover:bg-blue-700 text-white rounded-md xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            BATH AND BODY
          </button>
        </NavLink>
        <NavLink to="/shop/fragrance">
          <button className="font-semibold cursor-pointer bg-black hover:bg-blue-700 text-white rounded-md xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            FRAGRANCE
          </button>
        </NavLink>
        <NavLink to="/shop/skincare">
          <button className="font-semibold cursor-pointer bg-black hover:bg-blue-700 text-white rounded-md xl:py-2 xl:px-6 py-1 px-4  xl:text-sm text-xs">
            SKIN CARE
          </button>
        </NavLink>
        <NavLink to="/shop/kidsandbabies">
          <button className="font-semibold cursor-pointer bg-black hover:bg-blue-700 text-white rounded-md xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            KIDS & BABIES
          </button>
        </NavLink>
        <NavLink to="/shop/contactus">
          <button className="font-semibold cursor-pointer bg-black hover:bg-blue-700 text-white rounded-md xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            CONTACT US
          </button>
        </NavLink>
        <NavLink to="/shop/aboutus">
          <button className="font-semibold cursor-pointer bg-black hover:bg-blue-700 text-white rounded-md xl:py-2 xl:px-6 py-1 px-4 xl:text-sm text-xs ">
            ABOUT US
          </button>
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default MenuBar;
