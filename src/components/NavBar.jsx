import React, { useContext } from "react";
import { Link } from "react-router-dom";
// -----------------------------------------------------------------
import "../styles/components/NavBar.scss";
// -----------------------------------------------------------------
import BookMyProLogo from "../assets/BookMyProLogo.svg";
import GooglePlaystoreBadge from "../assets/icons/GooglePlaystoreBadge.svg";
import Cart from "../assets/icons/NavBar/Cart.svg";
import Profile from "../assets/icons/NavBar/Profile.svg";
// -----------------------------------------------------------------
import { CustomerDetailsContext } from "./Contexts/CustomerDetailsProvider";
// -----------------------------------------------------------------

export default function NavBar() {
  const { customerName } = useContext(CustomerDetailsContext);
  return (
    <nav className="nav-bar">
      {/* Logo */}
      <Link to="/" className="nav-bar-logo">
        <img
          src={BookMyProLogo}
          alt="Book My Pro Logo"
          className="nav-bar-logo-icon"
        />
      </Link>
      {/* Nav Bar List Items */}
      <div className="nav-bar-items">
        <ul className="nav-bar-items-list">
          <li>
            <Link to="/">Company</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Jobs</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li >
            <Link  to="/myCart" className="iconed-item">
              Cart
              <img src={Cart} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/myProfile" className="iconed-item">
              {customerName}
              <img src={Profile} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
