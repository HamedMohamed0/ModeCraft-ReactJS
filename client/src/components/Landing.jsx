import React from "react";
import "./css/landing.css";
import Header from "./Header.jsx";
import { Link } from "react-router";
export default function Landing() {
  return (
    <>
      <div className="landing-section">
        <Header />
        <div className="landing-content">
          <h1>
            Welcome To <br />
            <span>ModeCraft</span>
          </h1>
          <p>
            Welcome to ModeCraft – where style meets comfort! Discover our
            curated collection of trendy, high-quality clothing designed to fit
            your unique lifestyle. Whether you're dressing up for an occasion or
            keeping it casual, we've got something for everyone. Shop now and
            redefine your wardrobe with timeless pieces you'll love!
          </p>
            <Link to={"/all-products"}>
              Browse Now!
            </Link>
        </div>
      </div>
      
    </>
  );
}
