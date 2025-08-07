import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaRegFaceFrown,
  FaCartShopping,
  FaRegTrashCan,
  FaWallet,
  FaPaypal,
  FaRegCreditCard,
} from "react-icons/fa6";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { emptyCart, removeFromCart } from "../../redux/cartReducer.js";
import { Link } from "react-router";
import Header from "../Header.jsx";
import "../css/cart.css";
import Coupon from "../images/coupon.svg";
import Footer from "../Footer.jsx";
export default function Cart() {
  const [finallPrice, setFinallPrice] = useState(0);
  const products = useSelector(
    (/** @type {any} */ state) => state.cart.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    function handlePrice() {
      let total = 0;
      products.map((product) => {
        total += +product.price;
      });
      setFinallPrice(total);
    }
    handlePrice();
  }, [products]);
  
  return (
    <>
      <Header />
      {products.length == 0 ? (
        <div className="empty-cart">
          <p>
            Your Cart Is Empty
            <span>
              <FaRegFaceFrown />
            </span>
          </p>
          <Link className="browse-btn" to={"/all-products"}>
            Browse Now !
          </Link>
        </div>
      ) : (
        <div className="cart-page">
          <div className="container">
            <h2>
              Your <span>Cart</span>{" "}
              <span className="icon">
                <FaCartShopping />
              </span>
            </h2>
            <div className="cart-details">
              <div className="products">
                <div className="not-empty-cart">
                  {products.map((product) => (
                    <div key={product.id} className="product">
                      <div className="image">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="details">
                        <h3>{product.title}</h3>
                        <div className="color-size">
                          <div className="color">
                            Color:
                            <span
                              style={{ backgroundColor: `${product.color}` }}
                            ></span>
                          </div>

                          <div className="size">
                            Size:
                            <span>{product.size}</span>
                          </div>
                        </div>
                        <p>${product.price}</p>{" "}
                      </div>
                      <span
                        onClick={() =>
                          dispatch(
                            removeFromCart({
                              id: product.id,
                            })
                          )
                        }
                        className="remove-btn"
                      >
                        <FaRegTrashCan />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="check-out">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    Swal.fire({
                      icon: "success",
                      title: "Done",
                      text: "Your order has been completed successfully",
                    });
                    dispatch(emptyCart())
                  }}
                >
                  <div className="address">
                    <input required type="text" placeholder="Enter Your City" />
                    <input
                      required
                      type="text"
                      placeholder="Enter Your Eddress"
                    />
                    <input
                      required
                      type="number"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                  <div className="payment-method">
                    <div className="cod-method">
                      <input type="radio" name="payment" id="cash" />
                      <label htmlFor="cash">
                        Cash On Delivery{" "}
                        <span>
                          <FaWallet />
                        </span>
                      </label>
                    </div>
                    <div className="paypal-method">
                      <input type="radio" name="payment" id="paypal" />
                      <label htmlFor="paypal">
                        PayPal{" "}
                        <span>
                          <FaPaypal />
                        </span>
                      </label>
                    </div>
                    <div className="visa-method">
                      <input type="radio" name="payment" id="credit-card" />
                      <label htmlFor="credit-card">
                        Credit Card
                        <span>
                          <FaRegCreditCard />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="coupon">
                    <h4>
                      Coupon Code <img src={Coupon} alt="" />
                    </h4>
                    <div className="coupon-field">
                      <input placeholder="Enter You Coupon Code" type="text" />
                      <button>Apply</button>
                    </div>
                  </div>
                  <div className="price">
                    <div className="subtotal">
                      <p>
                        Subtotal <span>({products.length})</span>
                      </p>
                      <p>${finallPrice}</p>
                    </div>
                    <div className="delivery">
                      <p>Delivery</p>
                      <p>Free</p>
                    </div>
                    <div className="total">
                      <p>Total</p>
                      <p>${finallPrice}</p>
                    </div>
                  </div>
                  <div className="confirm">
                    <button type="submit">Confirm Order</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
