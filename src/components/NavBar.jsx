import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// -----------------------------------------------------------------
import "../styles/components/NavBar.scss";
// -----------------------------------------------------------------
import BookMyProLogo from "../assets/BookMyProLogo.svg";
import GooglePlaystoreBadge from "../assets/icons/GooglePlaystoreBadge.svg";
import Cart from "../assets/icons/NavBar/Cart.svg";
import Profile from "../assets/icons/NavBar/Profile.svg";
// -----------------------------------------------------------------
import { CustomerDetailsContext } from "./Contexts/CustomerDetailsProvider";
import AuthenticationPopUp from "./AuthenticationPopUp";
// -----------------------------------------------------------------

export default function NavBar() {
  const { isCustomerLoggedIn, customerName } = useContext(
    CustomerDetailsContext
  );
  const navigate = useNavigate();
  const [isLogInPopUpVisible, setIsLogInPopUpVisible] = useState(false);

  // ------------------------------------------------------------------------
  const handleOnClickProfile = () => {
    if (isCustomerLoggedIn) {
      navigate("/myProfile");
    } else {
      setIsLogInPopUpVisible(true);
    }
  };
  const handleOnClickMySubscriptions = () => {
    if (isCustomerLoggedIn) {
      navigate("/myProfile", { state: { routedFrom: "navBar" } });
    } else {
      setIsLogInPopUpVisible(true);
    }
  };

  // ------------------------------------------------------------------------

  return (
    <>
      {isLogInPopUpVisible ? (
        <AuthenticationPopUp
          onLogIn={() => {
            navigate("/myProfile");
          }}
          onSignUp={() => {
            navigate("/myProfile");
          }}
          setIsPopUpVisible={setIsLogInPopUpVisible}
        />
      ) : (
        <></>
      )}
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
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <div
                onClick={() => {
                  handleOnClickMySubscriptions();
                }}
              >
                <span>My Subscriptions</span>
              </div>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/myCart" className="iconed-item">
                Cart
                <img src={Cart} alt="" />
              </Link>
            </li>
            <li>
              {/* <Link to="/myProfile" className="iconed-item"> */}
              <div
                onClick={() => {
                  handleOnClickProfile();
                }}
                className="iconed-item"
              >
                {customerName}
                <img src={Profile} alt="" />
              </div>
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
