import React from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Location from "../images/location.svg";
import { FaRegPaperPlane,FaPhone,FaRegEnvelope,FaRegHeart,FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import "../css/contactUs.css";
export default function ContactUs() {
  return (
    <>
      <Header />
      <div className="contact-us-page">
        <div className="location">
          <img src={Location} alt="" />
        </div>
        <div className="contact-form container">
          <div className="ask-us">
            <h2>Ask Us Anything here</h2>
            <form action="">
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Enter Your Name" required />
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter Your Email" required />
              <label htmlFor="">Message</label>
              <textarea placeholder="Enter Your Message" required></textarea>
              <button type="submit">Send Message <span><FaRegPaperPlane/></span></button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="contact-details">
              <div className="call-us">
                <div className="header">
                  <h3>Call Us</h3>
                  <span><FaPhone/></span>
                </div>
                <p>Mobile:+201156606344</p>
                <p>Hotline:123</p>
              </div>
              <div className="mail-us">
                <div className="header">
                  <h3>Mail Us</h3>
                  <span><FaRegEnvelope/></span>
                </div>
                <p>Support:modecraft@gmail.com</p>
              </div>
              <div className="social-media">
                <div className="header">
                  <h3>Social Media</h3>
                  <span><FaRegHeart/></span>
                </div>
                <p><span><FaFacebook/></span> Facebook</p>
                <p><span><FaTiktok/></span> TikTok</p>
                <p><span><FaInstagram/></span> Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
