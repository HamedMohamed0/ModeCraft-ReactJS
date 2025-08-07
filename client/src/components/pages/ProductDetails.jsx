import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import {
  FaPalette,
  FaUpRightAndDownLeftFromCenter,
  FaTag,
  FaTruckFast,
  FaCartPlus,
} from "react-icons/fa6";
import useFetch from "../../hooks/useFetch.js";
import Header from "../Header.jsx";
import "../css/productDetails.css";
import Footer from "../Footer.jsx";
import OtherProducts from "../OtherProducts.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer.js";

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[id][$eq]=${params.productId}`
  );
  const prodcutsCart = useSelector(
    (/** @type {any} */ state) => state.cart.products
  );
  const [product, setProdcut] = useState([]);
  useEffect(() => {
    data && setProdcut(data);
  }, [data]);
  return (
    <div className="prodcut-details-page">
      {loading && <h1>loading...</h1>}
      <Header />
      {product.map((pro) => (
        <div key={pro.id} className="product-details container">
          <div className="image">
            <img src={pro.image[0].url} alt={pro.title} />
          </div>
          <div className="info">
            <div className="text">
              <h2>{pro.title}</h2>
              <p>{pro.description}</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                // Check if the product is already in the cart
                const isDuplicate = prodcutsCart.some(
                  (item) => item.id === pro.id
                );

                if (!isDuplicate) {
                  Swal.fire({
                    icon: "success",
                    title: "Done",
                    text: "Your product was added successfully to the cart.",
                  });

                  // Dispatch the action to add the product to the cart
                  dispatch(
                    addToCart({
                      id: pro.id,
                      title: pro.title,
                      desc: pro.description,
                      price: pro.price.toFixed(2),
                      image: pro.image[0].url,
                      color: selectedColor,
                      size: selectedSize,
                    })
                  );
                } else {
                  Swal.fire({
                    icon: "warning",
                    title: "Duplicate",
                    text: "This product is already in the cart.",
                  });
                }
              }}
            >
              <div className="color">
                <div className="color-icon">
                  <h4>Color</h4>
                  <span>
                    <FaPalette />
                  </span>
                </div>
                <div className="selected-color">
                  {pro.color.split(",").map((color) => (
                    <>
                      <input
                        required
                        type="radio"
                        name="color"
                        key={color}
                        id={color}
                        value={color}
                        onChange={(e) => setSelectedColor(e.target.value)}
                      />
                      <label
                        style={{ backgroundColor: `${color}` }}
                        htmlFor={color}
                        title={color}
                      >
                        {" "}
                      </label>
                    </>
                  ))}
                </div>
              </div>
              <div className="size">
                <div className="size-icon">
                  <h4>Size</h4>
                  <span>
                    <FaUpRightAndDownLeftFromCenter />
                  </span>
                </div>
                <div className="selected-size">
                  {pro.size.split(",").map((size) => (
                    <>
                      <input
                        required
                        type="radio"
                        name="size"
                        key={size}
                        id={size}
                        value={size}
                        onChange={(e) => setSelectedSize(e.target.value)}
                      />
                      <label htmlFor={size}>{size}</label>
                    </>
                  ))}
                </div>
              </div>
              <div className="price">
                <h4>
                  Price: <span>{pro.price.toFixed(2)}$</span>
                </h4>
                <span>
                  <FaTag />
                </span>
              </div>
              <div className="add-to-cart">
                <button
                  onClick={() => {
                    if (selectedColor === "" || selectedSize === "") {
                      Swal.fire({
                        icon: "info",
                        title: "Color or size not selected",
                        text: "Please select both color and size!",
                      });
                    }
                  }}
                  type="submit"
                >
                  Add To Cart
                  <span>
                    <FaCartPlus />
                  </span>
                </button>
                <div className="delivery">
                  <p>1-3 Working Days</p>
                  <span>
                    <FaTruckFast />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      ))}
      <div className="other-products">
        <OtherProducts />
      </div>
      <Footer />
    </div>
  );
}
