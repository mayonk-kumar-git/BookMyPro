import React from "react";
// -----------------------------------------------------------------
import "../styles/components/NavBar.scss";
// -----------------------------------------------------------------
import BookMyProLogo from "../assets/BookMyProLogo.svg";
import GooglePlaystoreBadge from "../assets/icons/GooglePlaystoreBadge.svg";
// -----------------------------------------------------------------
// -----------------------------------------------------------------

export default function NavBar() {
  return (
    <nav className="nav-bar">
      {/* Logo */}
      <a href="#" className="nav-bar-logo">
        <img
          src={BookMyProLogo}
          alt="Book My Pro Logo"
          className="nav-bar-logo-icon"
        />
      </a>
      {/* Nav Bar List Items */}
      <div className="nav-bar-items">
        <ul className="nav-bar-items-list">
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <a href="#" className="nav-bar-items-playstore-badge">
          <img
            src={GooglePlaystoreBadge}
            alt="Google Playstore Badge"
            className="nav-bar-items-playstore-badge-icon"
          />
        </a>
      </div>
    </nav>
  );
}
