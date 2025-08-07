import React from "react";
import "./css/cartList.css";
import { FaRegCircleXmark } from "react-icons/fa6";
export default function CartList() {
  return (
    <div className="list-body">
      <div className="pop-up-list">
        <span className="exit-icon">
          <FaRegCircleXmark/>
        </span>
        <h2>
          Your <span>Items</span>{" "}
        </h2>
        <ul className="cart-items">
          <li className="cart-item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dvklm66wj/image/upload/v1736126918/Bomber_Jacket_0e409802a3.jpg"
                alt=""
              />
            </div>
            <div className="info">
              <h3>Product Title</h3>
              <p>Price: $100</p>
              <button>Remove</button>
            </div>
          </li>
          <li className="cart-item">
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="info">
              <h3>Product Title</h3>
              <p>Price: $100</p>
              <button>Remove</button>
            </div>
          </li>
          <li className="cart-item">
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="info">
              <h3>Product Title</h3>
              <p>Price: $100</p>
              <button>Remove</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
