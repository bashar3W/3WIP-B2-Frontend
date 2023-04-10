import React, { useState } from "react";
import Logo from "../../assets/Logo.gif";
import Button from "../button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuHide, setIsMenuHide] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const stickyNavbar = () => {
    if (window.pageYOffset > 100) {
      setStickyNav(true);
      return;
    } else {
      setStickyNav(false);
      return;
    }
  };
  window.addEventListener("scroll", stickyNavbar);

  return (
    <header className={`navbar ${stickyNav ? "sticky_active" : ""}`}>
      <div className="bbb-container">
        <div className="navbar__flex">
          <div className="navbar__logo">
            <a href="/" className="navbar__link">
              <img
                className="logoImg"
                src={Logo}
                alt="build, buzz, bake - lifesaving"
              />
            </a>
          </div>
          <div className="navbar__menu">
            <menu className={`${isMenuHide ? "active_menu" : "menu"}`}>
              <ul className="navbar__menu--ul">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/aboutus">About</a>
                </li>
                <li>
                  <a href="/become-a-member">Become a Member</a>
                </li>
                <li>
                  <a href="/hub">Hub</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </menu>
          </div>
          <div className="navbar__buttons">
            <div className="navbar__buttons--desktop">
              <Button styles="navbar__button--login" name="Login" />
              <div className="navbar__cart">
                <MdOutlineShoppingCart />
                <span className="cart__badge">3</span>
              </div>
            </div>
            <div className="navbar__buttons--mobile">
              <GiHamburgerMenu onClick={() => setIsMenuHide(!isMenuHide)} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
