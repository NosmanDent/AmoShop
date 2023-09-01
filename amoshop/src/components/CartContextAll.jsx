// Importing required modules and components from React
import React, { createContext, useState, useEffect } from "react";
import {
  productsArrayBestSeller,
  getProductDataBestSeller,
} from "../ProductStoreBestSeller";
import { productsArrayBody, getProductDataBody } from "../ProductStoreBody";
import {
  productsArrayFragrance,
  getProductDataFragrance,
} from "../ProductStoreFragrance";
import { productsArrayKids, getProductDataKids } from "../ProductStoreKids";
import { productsArrayMen, getProductDataMen } from "../ProductStoreMen";
import { productsArrayNew, getProductDataNew } from "../ProductStoreNew";
import { productsArraySkin, getProductDataSkin } from "../ProductStoreSkin";
import { productsArrayWomen, getProductDataWomen } from "../ProductStoreWomen";

// Create a new context named "CartContext" with default values
export const CartContext = createContext({
  carts: {},
  getProductQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  clearCart: () => {},
  getTotalQuantity: () => {},
});

// Define the CartProvider functional component
export function CartProvider({ children }) {
  // State to manage the cart products and carts
  const [cartProducts, setCartProducts] = useState({});
  const [carts, setCarts] = useState(() => {
    // Retrieve carts from local storage or use an empty object if not found
    const storedCarts = localStorage.getItem("carts");
    return storedCarts ? JSON.parse(storedCarts) : {};
  });

  // Function to clear the cart and reset storage
  const clearCart = () => {
    setCartProducts({}); // Reset cart products to empty object
    setCarts({}); // Reset carts to empty object
    localStorage.removeItem("carts");
  };

  // useEffect to fetch cart products and update cart state
  useEffect(() => {
    const fetchCartProducts = () => {
      const cartKeys = Object.keys(carts);
      if (cartKeys.length === 0) {
        setCartProducts({});
        return;
      }

      const getProductDataById = (categoryId, id) => {
        switch (categoryId) {
          // Use the corresponding getProductData function based on the category
          case "bestSeller":
            return getProductDataBestSeller(id);
          case "body":
            return getProductDataBody(id);
          case "fragrance":
            return getProductDataFragrance(id);
          case "kids":
            return getProductDataKids(id);
          case "men":
            return getProductDataMen(id);
          case "new":
            return getProductDataNew(id);
          case "skin":
            return getProductDataSkin(id);
          case "women":
            return getProductDataWomen(id);
          default:
            console.error(`Invalid category: ${categoryId}`);
            return null;
        }
      };

      const cartProductsWithQuantity = {};
      for (const category of cartKeys) {
        const categoryCart = carts[category];
        if (categoryCart.length === 0) {
          cartProductsWithQuantity[category] = [];
          continue;
        }

        const productsWithQuantity = categoryCart.map((cartItem) => {
          const productData = getProductDataById(category, cartItem.id);

          if (productData) {
            return {
              ...productData,
              quantity: cartItem.quantity,
            };
          } else {
            console.error(
              `Product data does not exist for ID: ${cartItem.id} in category: ${category}`
            );
            return null;
          }
        });

        cartProductsWithQuantity[category] = productsWithQuantity.filter(
          (product) => product !== null
        );
      }

      setCartProducts(cartProductsWithQuantity);

      if (Object.keys(carts).length === 0) {
        clearCart();
      }
    };

    fetchCartProducts();
  }, [carts]);

  // useEffect to update local storage when cart state changes
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  // Function to get the quantity of a product in a specific category
  function getProductQuantity(category, id) {
    const categoryCart = cartProducts[category];
    if (!categoryCart) {
      return 0;
    }

    const quantity = categoryCart.find(
      (product) => product.id === id
    )?.quantity;

    return quantity || 0;
  }

  // Function to add a product to the cart
  function addToCart(category, id) {
    setCarts((prevCarts) => {
      const categoryCart = prevCarts[category] || [];
      const existingItem = categoryCart.find((item) => item.id === id);
      if (existingItem) {
        const updatedCart = categoryCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...prevCarts, [category]: updatedCart };
      } else {
        const newCart = [...categoryCart, { id, quantity: 1 }];
        return { ...prevCarts, [category]: newCart };
      }
    });
  }

  // Function to remove a product from the cart
  function removeFromCart(category, id) {
    setCarts((prevCarts) => {
      const categoryCart = prevCarts[category] || [];
      const updatedCart = categoryCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      const filteredCart = updatedCart.filter((item) => item.quantity > 0);
      return { ...prevCarts, [category]: filteredCart };
    });
  }

  // Function to delete a product from the cart
  function deleteFromCart(category, id) {
    setCarts((prevCarts) => {
      const categoryCart = prevCarts[category] || [];
      const filteredCart = categoryCart.filter((item) => item.id !== id);
      return { ...prevCarts, [category]: filteredCart };
    });
  }

  // Function to calculate the total cost of all items in the cart
  const getTotalCost = () => {
    let totalCost = 0;
    for (const category in cartProducts) {
      const categoryCart = cartProducts[category];
      categoryCart.forEach((cartItem) => {
        totalCost += cartItem.price * cartItem.quantity;
      });
    }
    return totalCost;
  };

  // Function to calculate the total quantity of all items in the cart
  const getTotalQuantity = () => {
    let totalQuantity = 0;
    for (const category in carts) {
      const categoryCart = carts[category] || [];
      categoryCart.forEach((cartItem) => {
        const productQuantity = getProductQuantity(category, cartItem.id);
        totalQuantity += productQuantity;
      });
    }
    return totalQuantity;
  };

  // Context value with all the functions and states
  const contextValue = {
    carts: cartProducts,
    getProductQuantity,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCost,
    clearCart,
    getTotalQuantity,
  };

  // Provide the context value to the children components
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

// CartContextProvider component to wrap the children with CartProvider
export default function CartContextProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
