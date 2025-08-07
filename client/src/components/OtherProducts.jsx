import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
import { FaStar } from "react-icons/fa6";
import "./css/products.css";
import "./css/homeProducts.css";
import { Link } from "react-router";
export default function OtherProducts() {
  const [products, setProducts] = useState([]);
  const { data, error } = useFetch(
    "/products?populate=*&pagination[pageSize]=30"
  );

  useEffect(() => {
    data && setProducts(data);
  }, [data]);
  return (
    <div className="other-products">
      <div className="new-arrivals section">
        <div className=" offers">
          <div className="title-mid">
            <h2>
              You May Also <span>Like</span>
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
    </div>
  );
}
