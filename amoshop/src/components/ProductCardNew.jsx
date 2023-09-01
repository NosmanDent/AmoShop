import React, { useContext } from "react";
import { CartContext } from "./CartContextAll";
import { BsBag } from "react-icons/bs";
import { FcEmptyTrash } from "react-icons/fc";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCardNew = (props) => {
  const { product } = props;

  const cartContext = useContext(CartContext);
  const { getProductQuantity, addToCart, removeFromCart, deleteFromCart } =
    cartContext;
  const productQuantity = getProductQuantity("new", product.id);

  return (
    <section className="my-6 mx-3">
      <div className="w-64 p-6 bg-[#F6F4F7] m-8 border-b-4 border-black">
        <div className=" w-14 h-5 absolute top-0 left-0 bg-black z-10 mt-6 md:ml-2 ml-10 text-white text-sm font-semibold font-sans px-3">
          NEW
        </div>
        <Link to={`/new-product/${product.id}`}>
          <motion.img
            src={product.img}
            alt={product.title}
            className="w-full h-[200px] object-cover rounded-lg cursor-pointer "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 5,
              exit: { opacity: 0 },
            }}
          />
        </Link>
        <div className="flex flex-col">
          <h1 className="text-xs text-black font-bold font-mono tracking-widest">
            {product.title}
          </h1>

          <div className="flex flex-row items-center justify-between">
            <p className="text-md text-stone-900 font-bold tracking-wider">
              ${product.price}
            </p>
            <div className="flex flex-row gap-4">
              <p className="text-xs text-stone-500">rating: {product.rating}</p>
            </div>
          </div>
        </div>
        {productQuantity > 0 ? (
          <>
            <div className="flex flex-row">
              <div className="text-green-500 flex flex-row items-center">
                <BsBag /> <span className="text-xs">{productQuantity}</span>
              </div>
              <button
                className="rounded-full bg-black text-white px-2 ml-auto"
                onClick={() => addToCart("new", product.id)}
              >
                +
              </button>
              <button
                className="rounded-full bg-black text-white px-2 mx-1"
                onClick={() => removeFromCart("new", product.id)}
              >
                -
              </button>
              <button
                className=""
                onClick={() => deleteFromCart("new", product.id)}
              >
                <FcEmptyTrash />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 absolute items-center justify-center bg-black p-3 rounded-full">
            <motion.button
              className="hover:text-gray-700 text-white text-2xl hover:scale-110 ease-in duration-500"
              onClick={() => addToCart("new", product.id)}
              initial={{
                opacity: 0,
              }}
              animate={{
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
      </div>
    </section>
  );
};

export default ProductCardNew;
