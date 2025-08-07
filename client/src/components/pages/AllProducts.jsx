import React, { useState } from "react";
import Header from "../Header.jsx";
import "../css/type.css";
import Types from "../Categories.jsx";
import Men from "../images/man.svg";
import Kids from "../images/kid.svg";
import Products from "../Products.jsx";
import Footer from "../Footer.jsx";
import storeContext from "../../hooks/storeContext.js";
export default function AllProducts() {
  const [filter, setFilter] = useState(
    "/products?populate=*&pagination[pageSize]=30"
  );
  const [selectedCategoires, setSelectedCategoires] = useState([]);
  return (
    <>
      <Header />
      <storeContext.Provider
        value={{ filter, setFilter, selectedCategoires, setSelectedCategoires }}
      >
        <div className="category-products container">
          <div className="header">
            <div className="text">
              <h2>
                All<span>Products</span>
              </h2>
              <img src={Men} alt="" />
              <img src={Kids} alt="" />
            </div>
            <div className="toggle-container">
              <Types />
            </div>
          </div>
          <Products type1={"men"} type2={"kids"} />
        </div>
      </storeContext.Provider>
      <Footer />
    </>
  );
}
