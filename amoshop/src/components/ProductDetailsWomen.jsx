import React, { useContext } from "react";
import { CartContext } from "./CartContextAll";
import { BsBag } from "react-icons/bs";
import { FcEmptyTrash } from "react-icons/fc";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { getProductDataWomen } from "../ProductStoreWomen";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

const ProductDetailsWomen = () => {
  const { id } = useParams(); // Get the ID from the URL parameter
  const product = getProductDataWomen(id); // Get the product data based on the ID

  const cartContext = useContext(CartContext);
  const { getProductQuantity, addToCart, removeFromCart, deleteFromCart } =
    cartContext;
  const productQuantity = getProductQuantity("women", product.id);

  const renderRating = (rating) => {
    const starTotal = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = starTotal - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} className="text-stone-400" />);
    }

    // Render half star
    if (hasHalfStar) {
      stars.push(<BsStarHalf key="half" className="text-stone-400" />);
    }

    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<BsStar key={`empty-${i}`} className="text-stone-400" />);
    }

    return stars;
  };

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product data is not found
  }

  return (
    <div className=" px-6 md:px-8 mt-5 flex flex-col h-screen w-full mb-[600px] md:mb-[200px]">
      <Link to="/shop/women" className="mb-10">
        <GrClose />
      </Link>
      <div className="flex flex-col md:flex-row w-full h-screen gap-4">
        <div className="w-full md:w-1/2 rounded-lg  h-3/4">
          <img
            src={product.img}
            alt={product.title}
            className=" object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 ">
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="hover:text-[#68BB93] text-sm md:text-lg font-serif">
              {product.title}
            </h1>

            <p className="font-semibold text-xl md:text-2xl ">
              ${product.price}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4 h-screen w-full">
            <p className="font-bold text-stone-500 flex items-center gap-2">
              Rating:{" "}
              <span className="flex flex-row gap-2">
                {renderRating(product.rating)}
              </span>
            </p>

            {productQuantity > 0 ? (
              <>
                <div className="flex  flex-row md:flex-col gap-2 item-center justify-center  w-full ">
                  <div className="text-green-700 text-sm md:text-xl  flex flex-row items-center m-0 md:m-auto">
                    <BsBag />{" "}
                    <span className="text-xs text-black font-bold">
                      {productQuantity}
                    </span>
                  </div>
                  <button
                    className="rounded-full bg-[#68BB93] text-white px-4 py-2 "
                    onClick={() => addToCart("women", product.id)}
                  >
                    +
                  </button>
                  <button
                    className="rounded-full bg-[#68BB93] text-white px-4 py-2 mx-1"
                    onClick={() => removeFromCart("women", product.id)}
                  >
                    -
                  </button>
                  <button
                    className=" text-sm md:text-xl m-0 md:m-auto"
                    onClick={() => deleteFromCart("women", product.id)}
                  >
                    <FcEmptyTrash />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex w-full items-center justify-center md:items-start md:justify-start">
                <motion.button
                  className="hover:text-gray-700 text-white text-2xl hover:scale-110 ease-in duration-500 bg-black p-3 rounded-full"
                  onClick={() => addToCart("women", product.id)}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 5,
                  }}
                >
                  <BsBag />
                </motion.button>
              </div>
            )}

            <div className="text-xs sm:text-sm flex flex-col mt-4  ">
              <p className="font-semibold text-lg md:text-xl">Description:</p>{" "}
              <span className="text-xs sm:text-sm font-normal font-serif text-justify">
                {product.desp}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsWomen;
