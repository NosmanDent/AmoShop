import { useState, useContext, useEffect, useRef } from "react";
import { CartContext } from "./CartContextAll";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { supabase } from "../supabaseClient";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { motion } from "framer-motion";
import bag from "../assets/arno-senoner-ooj5VfXq5o8-unsplash.jpg";
import shoe from "../assets/mn10.jpg";
import fag from "../assets/b10.jpg";
import bodyOne from "../assets/arno-senoner-Vn5VBVCP1EA-unsplash.jpg";
import bodyTwo from "../assets/articletwo.jpg";
import bodyThree from "../assets/f6.jpg";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMen, setToggleMen] = useState(false);
  const [toggleWomen, setToggleWomen] = useState(false);
  const [toggleBody, setToggleBody] = useState(false);

  // Access the cart context to get the total quantity and clear the carts after payment
  const { carts, clearCart } = useContext(CartContext);

  const handlePaymentStatus = () => {
    if (
      window.location.href.includes("/success") ||
      window.location.href.includes("/cancel")
    ) {
      // Clear the cart after successful payment or if the payment is canceled
      clearCart();
    }
  };

  useEffect(() => {
    handlePaymentStatus();
  }, []);

  // Calculate the total quantity
  let totalQuantity = 0;
  for (const category in carts) {
    const categoryCart = carts[category] || [];
    categoryCart.forEach((cartItem) => {
      totalQuantity += cartItem.quantity;
    });
  }

  const [isScrolling, setIsScrolling] = useState(false);

  const toggleWomenRef = useRef(null);
  const toggleMenRef = useRef(null);
  const toggleBodyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolling(currentScrollPos > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        toggleWomenRef.current &&
        !toggleWomenRef.current.contains(event.target)
      ) {
        setToggleWomen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleWomenRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        toggleMenRef.current &&
        !toggleMenRef.current.contains(event.target)
      ) {
        setToggleMen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        toggleBodyRef.current &&
        !toggleBodyRef.current.contains(event.target)
      ) {
        setToggleBody(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleBodyRef]);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="">
      <div className=" bg-orange-600 flex flex-row flex-1 items-center justify-center text-xs text-center">
        <h1 className="text-white py-3 font-bold">
          Shipping outside of the U.S. or Canada?{" "}
          <span className="underline font-light cursor-pointer">
            Learn About International Shipping
          </span>
        </h1>
      </div>

      <motion.div
        className={`w-full px-6 gap-2 bg-black flex flex-row items-center ${
          isScrolling
            ? "fixed top-0 left-0  bg-black flex flex-row items-center  px-6 gap-2 shadow-lg z-50"
            : ""
        }`}
      >
        <div className="">
          <AiOutlineMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleNav(true)}
          />
          {toggleNav && (
            <motion.div
              className="fixed top-0 left-0 md:w-full w-[300px] h-screen bg-white flex flex-col z-[5]"
              initial={{
                x: "-900px",
              }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 0.1,
              }}
            >
              <AiOutlineClose
                className="text-[40px] text-black cursor-pointer absolute top-[20px] right-[20px] text-xl md:text-4xl"
                onClick={() => setToggleNav(false)}
              />
              <motion.div className="">
                <div className="flex ml-4 flex-col items-start md:gap-8 gap-4  cursor-pointer whitespace-nowrap md:w-[200px] h-screen md:border-r">
                  <NavLink
                    to="/"
                    className="font-semibold cursor-pointer pt-10  "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    HOME
                  </NavLink>
                  <div className="">
                    <div
                      className="font-semibold cursor-pointer  hidden md:flex "
                      onClick={() => setToggleMen(true)}
                    >
                      MEN
                    </div>
                    <Link
                      to="/shop"
                      className="font-semibold cursor-pointer  flex md:hidden "
                      onClick={() => setToggleNav(false)}
                    >
                      MEN
                    </Link>
                    {toggleMen && (
                      <div
                        ref={toggleMenRef}
                        onClick={() => {
                          setToggleMen(false);
                          setToggleNav(false);
                        }}
                        onMouseLeave={() => {
                          setToggleMen(false);
                        }}
                        className=" p-6 md:flex hidden"
                        style={{
                          position: "absolute",
                          left: "200px",
                          top: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <div className="">
                          <h1 className="text-lg font-semibold font-serif pl-6 mb-10">
                            CHECK THROUGH OUR MEN COLLECTIONS
                          </h1>
                          <div className="flex flex-row items-center justify-center mt-28">
                            <div>
                              <div className="pl-6">
                                <img
                                  src={bag}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="/shop">
                                  <h1 className="border-b-2 pb-1 ">BUY NOW</h1>
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <div className="pl-6">
                                <img
                                  src={shoe}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="/shop">
                                  <h1 className="border-b-2 pb-1 ">BUY NOW</h1>
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <div className="pl-6">
                                <img
                                  src={fag}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="/shop">
                                  <h1 className="border-b-2 pb-1 ">BUY NOW</h1>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      className="font-semibold cursor-pointer  hidden md:flex "
                      onClick={() => setToggleWomen(true)}
                    >
                      WOMEN
                    </div>
                    <NavLink
                      to="/shop/women"
                      className="font-semibold cursor-pointer  flex md:hidden "
                      onClick={() => setToggleNav(false)}
                    >
                      WOMEN
                    </NavLink>
                    {toggleWomen && (
                      <div
                        ref={toggleWomenRef}
                        onClick={() => {
                          setToggleWomen(false);
                          setToggleNav(false);
                        }}
                        onMouseLeave={() => {
                          setToggleWomen(false);
                        }}
                        className=" p-6 md:flex flex-col hidden"
                        style={{
                          position: "absolute",
                          left: "200px",
                          top: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <div>
                          <h1 className="text-lg font-semibold font-serif pl-6 mb-10">
                            Welcome to our women collections
                          </h1>

                          <div className="pl-6 font-semibold font-mono flex flex-1 flex-row items-center justify-center">
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl text-red-600 mt-8">
                                Skin Care
                              </h1>
                              <h1 className="mt-4">Body Cream</h1>
                              <h1 className="mt-4">Cleanser</h1>
                              <h1 className="mt-4">Hair Bag</h1>
                            </div>
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl text-blue-600 mt-8">
                                Fragrance
                              </h1>
                              <h1 className="mt-4">Gionni</h1>
                              <h1 className="mt-4">Prada Cool</h1>
                              <h1 className="mt-4">Gucci</h1>
                            </div>
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl  mt-8">
                                Shoe
                              </h1>
                              <h1 className="mt-4">Gionni</h1>
                              <h1 className="mt-4">Prada Cool</h1>
                              <h1 className="mt-4">Gucci</h1>
                            </div>
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl text-blue-600 mt-8">
                                Cleanser
                              </h1>
                              <h1 className="mt-4">Gionni</h1>
                              <h1 className="mt-4">Prada Cool</h1>
                              <h1 className="mt-4">Gucci</h1>
                            </div>
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl text-lime-600 mt-8">
                                Accessories
                              </h1>
                              <h1 className="mt-4">Gionni</h1>
                              <h1 className="mt-4">Prada Cool</h1>
                              <h1 className="mt-4">Gucci</h1>
                            </div>
                            <div className="flex flex-1 flex-col mr-6">
                              <h1 className="font-bold font-serif text-xl text-stone-600 mt-8">
                                Brands
                              </h1>
                              <h1 className="mt-4">Gionni</h1>
                              <h1 className="mt-4">Prada Cool</h1>
                              <h1 className="mt-4">Gucci</h1>
                            </div>
                          </div>
                        </div>
                        <NavLink to="/shop/women" className="mx-auto">
                          <button className="bg-black text-white py-3 px-5 rounded-full w-[150px]  mt-4">
                            SHOP NOW
                          </button>
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      className="font-semibold cursor-pointer hidden md:flex  "
                      onClick={() => setToggleBody(true)}
                    >
                      BATH AND BODY
                    </div>
                    <Link
                      to="/shop/bathandbodies"
                      className="font-semibold cursor-pointer  flex md:hidden "
                      onClick={() => setToggleNav(false)}
                    >
                      BATH AND BODY
                    </Link>
                    {toggleBody && (
                      <div
                        ref={toggleBodyRef}
                        onClick={() => {
                          setToggleBody(false);
                          setToggleNav(false);
                        }}
                        onMouseLeave={() => {
                          setToggleBody(false);
                        }}
                        className=" p-6 md:flex hidden"
                        style={{
                          position: "absolute",
                          left: "200px",
                          top: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <div>
                          <h1 className="text-lg font-semibold font-serif pl-6 mb-10">
                            Check out our Body products
                          </h1>
                          <div className="flex flex-row">
                            <div>
                              <div className="pl-6">
                                <img
                                  src={bodyOne}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="/shop/bathandbodies">
                                  <h1 className="border-b-2 pb-1 ">BUY NOW</h1>
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <div className="pl-6">
                                <img
                                  src={bodyTwo}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="/shop/bathandbodies">
                                  <h1 className="border-b-2 pb-1 ">BUY NOW</h1>
                                </NavLink>
                              </div>
                            </div>
                            <div>
                              <div className="pl-6">
                                <img
                                  src={bodyThree}
                                  alt=""
                                  className="w-[350px] h-[250px] rounded-lg "
                                />
                                <NavLink to="/shop/bathandbodies">
                                  <h1 className="border-b-2 pb-1 ">BUY NOW</h1>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <NavLink
                    to="/shop/fragrance"
                    className="font-semibold cursor-pointer   "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    FRAGRANCE
                  </NavLink>
                  <NavLink
                    to="/shop/skincare"
                    className="font-semibold cursor-pointer  "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    SKIN CARE
                  </NavLink>
                  <NavLink
                    to="/shop/kidsandbabies"
                    className="font-semibold cursor-pointer   "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    KIDS & BABIES
                  </NavLink>
                  <NavLink
                    to="/shop/contactus"
                    className="font-semibold cursor-pointer   "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    CONTACT US
                  </NavLink>
                  <NavLink
                    to="/shop/aboutus"
                    className="font-semibold cursor-pointer   "
                    onClick={() => {
                      setToggleNav(false);
                    }}
                  >
                    ABOUT US
                  </NavLink>
                  <div className="lg:hidden kids_g w-full h-screen mb-10 pl-2  pt-4">
                    <div className=" bg-white/10 mr-8 py-2 pl-2 rounded-lg mb-2">
                      <Menu
                        handleClick={handleClick}
                        setToggleNav={setToggleNav}
                        onClick={() => setToggleNav(false)}
                      />
                    </div>
                    <div className="lg:hidden flex bg-white/10 mr-8 py-2 pl-2 rounded-lg mb-2">
                      <h1 className="text-white font-bold cursor-pointer lg:text-xs text-sm ">
                        Discovery
                      </h1>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
        <div className="flex flex-1 flex-row items-center justify-between bg-black/50 py-4  overflow-hidden">
          <div>
            <div className="flex flex-1 flex-row items-center gap-4">
              <div className="lg:flex hidden">
                <Menu handleClick={handleClick} setToggleNav={setToggleNav} />
              </div>

              <div className="md:flex hidden">
                <h1 className="text-white font-bold cursor-pointer lg:text-xs text-sm ">
                  Discovery
                </h1>
              </div>
            </div>
          </div>

          <div className="">
            <Link to="/">
              <div className="flex flex-row items-center gap-1">
                <h1 className="text-white font-semibold flex flex-row items-start text-xl md:text-2xl">
                  AmoSh <span className="bg-[#EA580C] rounded-full p-2" /> p
                </h1>
              </div>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-2 ">
            <Link to="cart">
              <motion.button
                className="flex flex-row  item-center text-white justify-center"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1.5,
                }}
                transition={{
                  duration: 3,
                }}
              >
                <BsBag className="text-3xl" />{" "}
                <span className="text-white text-xs font-bold">
                  {totalQuantity}
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

function Menu({ handleClick, setToggleNav }) {
  const { user } = useSelector((state) => state.user);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error signing out:", error.message);
    } else {
      window.location.reload(); // Reload the page to require the user to log in again
    }
  };

  return (
    <ul className="">
      <li
        className="cursor-pointer"
        onClick={() => {
          {
            handleClick();
          }
          setToggleNav(false);
        }}
      >
        {user ? (
          <button
            className="lg:bg-red-700  text-white  font-semibold rounded-lg lg:py-2 lg:px-5  text-semibold lg:text-xs text-md "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            to="/login"
            className=" flex gap-1 items-center lg:bg-white/20 font-semibold rounded-full lg:py-2 lg:px-6 text-xs"
          >
            <span className="lg:bg-black/50 lg:py-2 px-2 lg:rounded-full text-white">
              Sign Up
            </span>
            <span className="text-white lg:border-r-4 pr-2 lg:border-blue-700 lg:rounded-full ">
              Sign In
            </span>
          </NavLink>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
