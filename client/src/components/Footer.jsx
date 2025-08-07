import React from "react";
import "./css/footer.css"
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaRegEnvelope } from "react-icons/fa6";
import man from "./images/man.svg";
import kid from "./images/kid.svg";
import { Link } from "react-router";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <h3>ModeCraft</h3>
          <p>
            © ModeCraft - Style Meets Comfort. Explore timeless designs and
            trendy collections crafted to fit your lifestyle. From everyday
            essentials to statement pieces, we’ve got you covered. Stay
            connected for exclusive offers, style tips, and the latest arrivals.
            Shop now and redefine your wardrobe with pieces you’ll love!
          </p>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <Link to={"/men-products"} className="men">
            <span><img src={man} alt="" /></span>
            <span>Men</span>
          </Link>
          <Link to={"/kids-products"} className="kids">
          <span><img src={kid} alt="" /></span>
            <span>kids</span>
          </Link>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="face-book">
          <span><FaFacebook/></span>
          <span>Facebook</span>
          </div>
          <div className="tiktok">
          <span><FaTiktok/></span>
          <span>TikTok</span>
          </div>
          <div className="instagram">
          <span><FaInstagram/></span>
          <span>Instagram</span>
          </div>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <div className="phone">
            <span><FaPhone /></span>
            <span>+01156606344</span>
          </div>
          <div className="mail">
            <span><FaRegEnvelope /></span>
            <span>Modecraft@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
