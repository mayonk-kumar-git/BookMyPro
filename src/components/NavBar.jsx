import React from "react";
import { Link } from "react-router-dom";
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
        </ul>
        <Link to="/" className="nav-bar-items-playstore-badge">
          <img
            src={GooglePlaystoreBadge}
            alt="Google Playstore Badge"
            className="nav-bar-items-playstore-badge-icon"
          />
        </Link>
      </div>
    </nav>
  );
}
