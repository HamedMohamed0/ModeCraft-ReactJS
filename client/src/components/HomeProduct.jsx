import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
import { FaStar } from "react-icons/fa6";
import "./css/products.css";
import "./css/homeProducts.css";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useFetch(
    "/products?populate=*&pagination[pageSize]=30"
  );
  console.log(loading);
  useEffect(() => {
    data && setProducts(data);
  }, [data, loading]);

  const styles = `
  .custom-overlay {
    background-color: #1A51AB !important; /* Set custom overlay color */
  }

  .custom-popup {
    border-radius: 15px; /* Optional: Add popup customizations */
  }
`;

  useEffect(() => {
    if (loading) {
      Swal.fire({
        title: "Loading...",
        text: "Please wait while we process your request.",
        customClass: {
          popup: "custom-popup",
          container: "custom-overlay",
        },
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      Swal.close();
    }
  }, [loading]);
  
  return (
    <>
      <div className="home-products">
        <div className="new-arrivals section">
          <div className=" offers">
            <div className="title">
              <h2>
                Shop New <span>Arrivals</span>
              </h2>
            </div>
            <div className="flexing">
              {products.map((product) => {
                if (product.price > 50) {
                  return (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="card"
                    >
                      <img
                        className="image"
                        src={`${product.image[0]?.url}`}
                        alt=""
                      />
                      <h3>{product.title}</h3>
                      <div className="rating">
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                      </div>
                      <div className="price">
                        <span>{product.price.toFixed(2)}$</span>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="discount section">
          <div className=" offers">
            <div className="title">
              <h2>
                Discount <span> 50% !</span>
              </h2>
            </div>
            <div className="flexing">
              {products.slice(0, 8).map((product) => {
                if (product.price < 30) {
                  return (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="card"
                    >
                      <img
                        className="image"
                        src={`${product.image[0]?.url}`}
                        alt=""
                      />
                      <h3>{product.title}</h3>
                      <div className="rating">
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                      </div>
                      <div className="price">
                        <span className="sell">
                          {product.price.toFixed(2)}$
                        </span>{" "}
                        <span className="discounted">
                          {product.price.toFixed(2) * 2}.00$
                        </span>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="most-selling section">
          <div className=" offers">
            <div className="title">
              <h2>
                Most <span>Selling</span>
              </h2>
            </div>
            <div className="flexing">
              {products.slice(6, 13).map((product) => {
                return (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="card"
                  >
                    <img
                      className="image"
                      src={`${product.image[0]?.url}`}
                      alt=""
                    />
                    <h3>{product.title}</h3>
                    <div className="rating">
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                    </div>
                    <div className="price">
                      <span>{product.price.toFixed(2)}$</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
