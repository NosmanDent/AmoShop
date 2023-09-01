import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./components/Layout";
import Cancel from "./pages/Cancel";
import CartPage from "./pages/CartPage";
import Store from "./pages/Store";
import Success from "./pages/Success";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import { store } from "./app/store";
import ShopLayout from "./components/ShopLayout";
import Men from "./components/Men";
import Bathbody from "./components/Bathbody";
import Fragrance from "./components/Fragrance";
import Skincare from "./components/Skincare";
import KidsBabies from "./components/KidsBabies";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import CartContextProvider from "./components/CartContextAll";
import ProductDetails from "./components/ProductDetails";
import ProductDetailsNew from "./components/ProductDetailsNew";
import ProductDetailsMen from "./components/ProductDetailsMen";
import ProductDetailsWomen from "./components/ProductDetailsWomen";
import ProductDetailsBody from "./components/ProductDetailsBody";
import ProductDetailsFragrance from "./components/ProductDetailsFragrance";
import ProductDetailsSkin from "./components/ProductDetailsSkin";
import ProductDetailsKids from "./components/ProductDetailsKids";
import Women from "./components/WomenHome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Store />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/new-product/:id" element={<ProductDetailsNew />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="success" element={<Success />} />
      <Route path="cancel" element={<Cancel />} />
      <Route path="login" element={<Login />} />

      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<Men />} />
        <Route path="men-product/:id" element={<ProductDetailsMen />} />
        <Route path="women" element={<Women />} />
        <Route path="women-product/:id" element={<ProductDetailsWomen />} />
        <Route path="bathandbodies" element={<Bathbody />} />
        <Route path="body-product/:id" element={<ProductDetailsBody />} />
        <Route path="fragrance" element={<Fragrance />} />
        <Route
          path="fragrance-product/:id"
          element={<ProductDetailsFragrance />}
        />
        <Route path="skincare" element={<Skincare />} />
        <Route path="skincare-product/:id" element={<ProductDetailsSkin />} />
        <Route path="kidsandbabies" element={<KidsBabies />} />
        <Route
          path="kidsandbabies-product/:id"
          element={<ProductDetailsKids />}
        />
        <Route path="contactus" element={<Contact />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return (
    <CartContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </CartContextProvider>
  );
}
