import { useContext, useState } from "react";
import { CartContext } from "../components/CartContextAll";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";

const CartPage = () => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const cartContext = useContext(CartContext);
  const { getTotalCost } = cartContext;

  const {
    carts,
    getProductQuantity,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalQuantity,
  } = cartContext;

  const checkout = async () => {
    setIsCheckingOut(true);
    //   `carts` is an object with category as key and an array of items as value.
    // Convert it to an array of all items from all categories
    const allItems = Object.values(carts).flat();

    await fetch("https://amoshop.onrender.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: allItems }), // Sending an array of all items
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Bad Request"); // Throw an error if the response is not ok
        }
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      })
      .catch((error) => {
        console.error("Error in checkout:", error);
        // Handle error, show user a message, etc.
      });
  };

  const isEmptyCart = Object.values(carts).every(
    (cartItems) => cartItems.length === 0
  );

  return (
    <section className="mb-20">
      <p className=" font-sans mb-6 text-2xl md:text-3xl font-semibold mt-20 ml-6 flex items-center">
        Your Bag{" "}
        <span className="text-orange-700">
          <BsHandbagFill />
        </span>
      </p>
      {isEmptyCart ? (
        <div className="flex flex-col flex-1 items-center justify-center h-screen gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            You Bag is Empty
          </h1>
          <MdOutlineHourglassEmpty className="text-8xl rounded-full p-4 shadow-red-900 shadow-lg bg-black  text-white " />
          <Link
            to="/shop"
            className="bg-red-700 px-6 md:px-12 py-2 md:py-4 rounded-lg text-white"
          >
            SHOP NOW
          </Link>
        </div>
      ) : (
        <>
          {Object.entries(carts).map(([category, cartItems]) => (
            <div key={category}>
              {cartItems.map((cartItem) => {
                const productQuantity = getProductQuantity(
                  category,
                  cartItem.id
                );

                return (
                  <div
                    key={cartItem.id}
                    className="flex flex-col w-full p-6 space-y-4 sm:p-10 bg-[#F6F4F7] text-gray-100 border-b-2 border-bg-stone-400"
                  >
                    <ul className="flex flex-col divide-y divide-black">
                      <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                          <img
                            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                            src={cartItem.img}
                            alt="Polaroid camera"
                          />
                          <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                              <div className="space-y-1">
                                <h3 className="font-bold text-black">
                                  {cartItem.title}
                                </h3>
                                <h1 className="text-black">
                                  Price: ${cartItem.price}
                                </h1>
                              </div>
                              <div className="text-right">
                                <p className="text-black">
                                  {productQuantity} total
                                </p>
                                <p className="text-black font-semibold">
                                  $
                                  {(productQuantity * cartItem.price).toFixed(
                                    2
                                  )}
                                </p>
                              </div>
                            </div>
                            <div className="flex text-sm divide-x">
                              <button
                                type="button"
                                className="flex items-center px-2 py-1 pl-0 space-x-1 text-black"
                                onClick={() =>
                                  deleteFromCart(category, cartItem.id)
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="w-4 h-4 fill-current"
                                >
                                  <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="168"
                                    y="216"
                                  ></rect>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="240"
                                    y="216"
                                  ></rect>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="312"
                                    y="216"
                                  ></rect>
                                  <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Remove</span>
                              </button>
                              <button
                                className="rounded-full border-4 border-stone-700 text-black px-2 mr-2"
                                onClick={() => addToCart(category, cartItem.id)}
                              >
                                +
                              </button>
                              <button
                                className="rounded-full border-4 border-stone-700 text-black px-2 "
                                onClick={() =>
                                  removeFromCart(category, cartItem.id)
                                }
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          ))}
          <div className="space-y-1 text-right bg-[#F6F4F7] border-t border-black  pr-10 py-2">
            <p className="text-stone-400 text-sm">
              Total Quantity: {getTotalQuantity()}
            </p>
            <p className="text-black font-semibold">
              Total: ${getTotalCost().toFixed(2)}
            </p>

            <p className="text-sm text-gray-700">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="flex justify-end space-x-4 bg-[#F6F4F7] pr-10 pb-6">
            <Link to="/">
              <button
                type="button"
                className="md:px-6 md:py-2 px-4 py-1 text-xs md:text-sm border rounded-md text-black border-orange-600"
              >
                Back
                <span className="sr-only sm:not-sr-only">to shop</span>
              </button>
            </Link>
            <button
              type="button"
              className="md:px-6 md:py-2 px-4 py-1 text-xs md:text-sm  rounded-md bg-orange-600 hover:bg-orange-800 text-white "
              onClick={() => {
                checkout();
              }}
              disabled={isCheckingOut} // Disable the button while checking out
            >
              {isCheckingOut ? ( // Show the loader when checking out
                <AiOutlineLoading3Quarters className="animate-spin mx-auto" />
              ) : (
                <>
                  <span className="sr-only sm:not-sr-only">Continue to </span>
                  Checkout
                </>
              )}
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
