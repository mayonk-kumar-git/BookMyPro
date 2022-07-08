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
  const { isCustomerLoggedIn, customerFirstName } = useContext(
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
            <li
              onClick={() => {
                navigate("/aboutUs");
              }}
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigate("/services");
              }}
            >
              Services
            </li>
            <li
              onClick={() => {
                handleOnClickMySubscriptions();
              }}
            >
              <span>My Subscriptions</span>
            </li>
            <li
              onClick={() => {
                navigate("/contactUs");
              }}
            >
              Contact Us
            </li>
            <li
              onClick={() => {
                navigate("/payment");
              }}
              className="iconed-item"
            >
              My Cart
              <img src={Cart} alt="" />
            </li>
            <li
              onClick={() => {
                handleOnClickProfile();
              }}
              className="iconed-item"
            >
              {customerFirstName.split(" ")[0]}
              <img src={Profile} alt="" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
