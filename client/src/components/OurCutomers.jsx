import React from "react";
import "./css/ourCustomers.css";
import { FaStar, FaRegStar } from "react-icons/fa6";
import image1 from "./images/Avatar/customer-1.png";
import image2 from "./images/Avatar/customer-2.png";
import image3 from "./images/Avatar/customer-3.png";
import image4 from "./images/Avatar/customer-4.png";
import image5 from "./images/Avatar/customer-5.png";
import image6 from "./images/Avatar/customer-6.png";
export default function OurCustomers() {
  return (
    <div className="container customers-section">
      <h2>
        Our <span>Cutsomers</span>{" "}
      </h2>
      <div className="customers">
        <div className="customer">
          <div className="info">
            <img src={image1} alt="customer" />
            <h3>James Walker</h3>
          </div>
          <p>
            I’m beyond impressed with the quality of the clothes. The fit is
            absolutely perfect, and the designs are modern yet timeless. Every
            time I wear something from here, I get compliments from friends and
            strangers alike. The durability is fantastic too—I’ve washed my
            items multiple times, and they still look brand new!
          </p>
          <div className="customer-rating">
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
        </div>
        <div className="customer">
          <div className="info">
            <img src={image2} alt="customer" />
            <h3>Michael Hayes</h3>
          </div>
          <p>
            This shop has completely changed my wardrobe for the better. The
            fabrics are premium, and the attention to detail is unmatched. From
            the stitching to the packaging, everything feels luxurious. I’m
            always excited to see the new collections and have recommended this
            to all my friends.
          </p>
          <div className="customer-rating">
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
        </div>
        <div className="customer">
          <div className="info">
            <img src={image3} alt="customer" />
            <h3>David Turner</h3>
          </div>
          <p>
            I’ve been shopping here for months, and every piece I’ve purchased
            has exceeded my expectations. The styles are versatile and work
            perfectly for casual outings or formal events. The quality is
            incredible, and the fit makes me feel confident every time I step
            out. Truly my favorite clothing store!
          </p>
          <div className="customer-rating">
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
              <FaRegStar />
            </span>
          </div>
        </div>
        <div className="customer">
          <div className="info">
            <img src={image4} alt="customer" />
            <h3>Christopher Miller</h3>
          </div>
          <p>
            From casual wear to formal attire, this shop offers something for
            every occasion. The quality is consistently outstanding, and the
            clothes are so comfortable to wear. The team clearly pays close
            attention to the latest trends while ensuring timeless appeal.
            Shopping here is always a pleasure!
          </p>
          <div className="customer-rating">
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
        </div>
        <div className="customer">
          <div className="info">
            <img src={image5} alt="customer" />
            <h3>Benjamin Scott</h3>
          </div>
          <p>
            The shopping experience here has been phenomenal. The website is
            easy to navigate, delivery is always fast, and the clothes fit like
            they were custom-made for me. I love how the fabrics feel luxurious
            and durable at the same time. This shop has become my trusted go-to
            for upgrading my wardrobe
          </p>
          <div className="customer-rating">
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
              <FaRegStar />
            </span>
          </div>
        </div>
        <div className="customer">
          <div className="info">
            <img src={image6} alt="customer" />
            <h3>William Parker</h3>
          </div>
          <p>
            I’ve tried countless clothing brands, but this one stands out above
            the rest. The variety in their collection is amazing, catering to
            both trendy and classic styles. Every piece I’ve bought not only
            looks fantastic but also lasts long, making it worth every penny.
            I’m a customer for life!
          </p>
          <div className="customer-rating">
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
        </div>
      </div>
    </div>
  );
}
