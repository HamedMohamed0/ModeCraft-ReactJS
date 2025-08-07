import React, { useState, useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch.js";
import { FaStar } from "react-icons/fa6";
import storeContext from "../hooks/storeContext.js";
import { Link } from "react-router";
export default function Products({ type1, type2 }) {
  const [products, setProducts] = useState([]);
  const { filter } = useContext(storeContext);
  const { data, error } = useFetch(filter);
  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  return (
    <>
      <div className="products-grid">
        {products.map((product) => {
          if (
            product.types.map((typeObj) => typeObj.type) == `${type1}` ||
            product.types.map((typeObj) => typeObj.type) == `${type2}`
          ) {
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
    </>
  );
}
