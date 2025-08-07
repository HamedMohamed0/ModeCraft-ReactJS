import React, { useEffect, useState } from "react";
import "./css/header.css";
import {
  FaCartShopping,
  FaRegCircleXmark,
  FaRegTrashCan,
  FaBars,
} from "react-icons/fa6";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartReducer.js";
export default function Header() {
  const [cartList, setCartList] = useState(false);
  const [finallPrice, setFinallPrice] = useState(0);
  const dispatch = useDispatch();

  function HideAndShow() {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        document.querySelector("header").style.top = "-100px";
      } else {
        document.querySelector("header").style.top = "36px";
      }
      lastScrollTop = scrollTop;
    });
  }
  HideAndShow();

  const showCartList = () => {
    let outLay = document.querySelector(".outlay");
    let cartlist = document.querySelector(".pop-up-list");
    cartlist.classList.toggle("show");
    outLay.classList.toggle("show");
  };

  const showMenu = () => {
    let cartlistBody = document.querySelector(".left-menu");
    let outLay = document.querySelector(".outlay");
    outLay.classList.toggle("show");
    cartlistBody.classList.toggle("show");
  };

  const products = useSelector(
    (/** @type {any} */ state) => state.cart.products
  );

  useEffect(() => {
    function handlePrice() {
      var total = 0;
      products.map((product) => {
        total += +product.price;
      });
      setFinallPrice(total);
    }
    handlePrice();
  }, [products]);

  return (
    <>
      <div className="outlay"></div>
      <div className="left-menu">
        <div className="top">
          <h2>Menu</h2>
          <div className="close" onClick={showMenu}>
            <FaRegCircleXmark />
          </div>
        </div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/men-products"}>Men</Link>
          </li>
          <li>
            <Link to={"/kids-products"}>Kids</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <header className="container">
        <div className="header">
          <div onClick={showMenu} className="menu">
            <FaBars />
          </div>

          <div className="logo">
            <Link to={"/"}>ModeCraft</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/men-products"}>Men</Link>
              </li>
              <li>
                <Link to={"/kids-products"}>Kids</Link>
              </li>
              <li>
                <Link to={"/contact-us"}>Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="cart">
            <div className="cart-icon" onClick={showCartList}>
              <span>
                <FaCartShopping />
              </span>
              {products.length > 0 ? (
                <div className="cart-badge">{products.length}</div>
              ) : (
                false
              )}
            </div>
          </div>
        </div>
      </header>

        <div className="pop-up-list">
          <div className="top">
            <div className="exit-icon">
              <span onClick={showCartList}>
                <FaRegCircleXmark />
              </span>
            </div>
            <h2>
              Your <span>Items</span>{" "}
            </h2>
          </div>
          <ul className="cart-items">
            {products.map((product) => {
              return (
                <li key={product.id} className="cart-item">
                  <div className="details">
                    <div className="image">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="info">
                      <h3>{product.title}</h3>
                      <p>Price: ${product.price}</p>
                      <div className="color-and-size">
                        <div className="color">
                          Color:
                          <span
                            style={{ backgroundColor: `${product.color}` }}
                          ></span>
                        </div>
                        /
                        <div className="size">
                          Size:
                          <span className="size"> {product.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    className="remove-item"
                    onClick={() =>
                      dispatch(
                        removeFromCart({
                          id: product.id,
                        })
                      )
                    }
                  >
                    <FaRegTrashCan />
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="price-details">
            <div className="details">
              <div className="subtotal">
                <h3>Subtotal</h3>
                <span>${finallPrice}</span>
              </div>
              <div className="delivery">
                <h3>Delivery</h3>
                <span>Free</span>
              </div>
            </div>
            <div className="total">
              <h3>Total</h3>
              <span>${finallPrice}</span>
            </div>
          </div>
          <div className="view-cart">
            <Link to={"/cart"}>
              View Cart
              <span>
                <FaCartShopping />
              </span>
            </Link>
          </div>
        </div>

    </>
  );
}
