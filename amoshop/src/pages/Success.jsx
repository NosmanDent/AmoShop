import React from "react";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center h-screen gap-4">
      <h1 className="text-2xl md:text-3xl font-semibold">
        Thank you for buying from us. Your payment is Successful
      </h1>
      <GiConfirmed className="text-5xl md:text-8xl rounded-full p-4 bg-green-700  text-white " />
      <div className="flex flex-col md:flex-row gap-2">
        <Link
          to="/"
          className="border border-black px-6 md:px-12 py-2 md:py-4 rounded-lg text-black w-full whitespace-nowrap"
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className="bg-blue-700 border border-blue-600 px-6 md:px-12 py-2 md:py-4 rounded-lg text-white w-full whitespace-nowrap"
        >
          SHOP
        </Link>
      </div>
    </div>
  );
};

export default Success;
