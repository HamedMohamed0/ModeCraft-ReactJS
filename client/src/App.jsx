import React from "react";
import Landing from "./components/Landing.jsx";
import HomeProducts from "./components/HomeProduct.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import OurCustomers from "./components/OurCutomers.jsx";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router";
import MenProducts from "./components/pages/MenProducts.jsx";
import KidsProducts from "./components/pages/KidsProducts.jsx";
import AllProducts from "./components/pages/AllProducts.jsx";
import ProductDetails from "./components/pages/ProductDetails.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import Cart from "./components/pages/Cart.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <HomeProducts />
              <OurCustomers />
              <Footer />
            </>
          }
        />
        <Route path="men-products" element={<MenProducts />} />
        <Route path="kids-products" element={<KidsProducts />} />
        <Route path="all-products" element={<AllProducts />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}
