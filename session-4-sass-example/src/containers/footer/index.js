import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import paymentMethods from "../../assets/Payment-Method-Logos.png";

const Footer = ({ bgColor, color }) => {
  return (
    <section
      className="footer"
      style={{ backgroundColor: bgColor, color: `${color && color}` }}
    >
      <div className="bbb-container">
        <div className="container__top">
          <div className="top__important-links-container">
            <div className="important-links-container__useful-links">
              <div className="useful-links__title">
                <p className={`title ${color && "text-white"}`}>Useful Links</p>
              </div>
              <div className="useful-links__body">
                <ul className="body__links">
                  <a
                    href="/privacy-policy"
                    className={`links__link ${color && "list-white"}`}
                  >
                    Privacy Policy
                  </a>
                  <li className={`links__link ${color && "list-white"}`}>
                    Trademarks
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    Terms & Conditions
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    Customer Support
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    My Account
                  </li>
                </ul>
              </div>
            </div>
            <div className="important-links-container__membership-and-hub">
              <div className="membership-and-hub__title">
                <p className={`title ${color && "text-white"}`}>
                  Membership & HUB
                </p>
              </div>
              <div className="membership-and-hub__body">
                <ul className="body__links">
                  <li className={`links__link ${color && "list-white"}`}>
                    Become a member
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    FAQs
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    HUB
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    Laptops
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    Accessories
                  </li>
                </ul>
              </div>
            </div>
            <div className="important-links-container__my-account">
              <div className="my-account__title">
                <p className={`title ${color && "text-white"}`}> My Account</p>
              </div>
              <div className="my-account__body">
                <ul className="body__links">
                  <li className={`links__link ${color && "list-white"}`}>
                    My Profile
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    My Order History
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    My Wish List
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    Order Tracking
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    Shopping Cart
                  </li>
                </ul>
              </div>
            </div>
            <div className="important-links-container__company">
              <div className="company__title">
                <p className={`title ${color && "text-white"}`}>Company</p>
              </div>
              <div className="company__body">
                <ul className="body__links">
                  <li className={`links__link ${color && "list-white"}`}>
                    About Us
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    Careers
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    Our Blog
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    Events
                  </li>
                  <li className={`links__link ${color && "list-white"}`}>
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top__contact-us">
            <div className="contact-us__title">
              <p className={`title ${color && "text-white"}`}>
                Need Help? Call Us Now
              </p>
            </div>
            <div className="contact-us__body">
              <p className={`body__phone-number ${color && "text-white"}`}>
                +99 0214 2542 223
              </p>
              <p className={`body__date ${color && "text-white"}`}>
                Monday – Friday: 9:00-20:00
              </p>
              <p className={`body__date ${color && "text-white"}`}>
                Saturday: 11:00 – 15:00
              </p>
              <div className="body__social-links">
                <FaFacebookF className="social-link__icon" />
                <FaTwitter className="social-link__icon" />
                <AiFillInstagram className="social-link__icon" />
                <FaLinkedin className="social-link__icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="container__bottom">
          <div className="bottom__copyright">
            <p className={`copyright ${color && "text-white"}`}>
              Copyright © 2022 TailGrids. All Rights Reserved.
            </p>
          </div>
          <div className="bottom__accepted-payment-methods">
            <p
              className={`accepted-payment-method__text  ${
                color && "text-white"
              }`}
            >
              We Accept:
            </p>
            <img
              className="accepted-payment-method__image"
              src={paymentMethods}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
