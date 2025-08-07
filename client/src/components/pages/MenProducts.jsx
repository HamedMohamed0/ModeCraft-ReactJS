import React, { useEffect, useState } from "react";
import Header from "../Header.jsx";
import "../css/type.css";
import Types from "../Categories.jsx";
import Men from "../images/man.svg";
import Products from "../Products.jsx";
import Footer from "../Footer.jsx";
import storeContext from "../../hooks/storeContext.js";

export default function MenProducts() {
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
                Men's <span>Clothes</span>
              </h2>
              <img src={Men} alt="" />
            </div>
            <div className="toggle-container">
              <Types />
            </div>
          </div>
          <Products type1={"men"} type2={""} />
        </div>
      </storeContext.Provider>
      <Footer />
    </>
  );
}
