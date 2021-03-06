import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// ------------------------------------------------------
import "../../styles/components/Mobile/MobileNavBar.scss";
// ------------------------------------------------------
import NavBarIcon from "../../assets/icons/Mobile/MobileNavBar/NavBarIcon.svg";
import Cart from "../../assets/icons/Mobile/MobileNavBar/Cart.svg";
import Profile from "../../assets/icons/Mobile/MobileNavBar/Profile.svg";
// ------------------------------------------------------
import { CustomerDetailsContext } from "../Contexts/CustomerDetailsProvider";
import MobileAuthenticationPopUp from "./MobileAuthenticationPopUp";
// ------------------------------------------------------

export default function MobileNavBar() {
  const { isCustomerLoggedIn, customerFirstName } =
    useContext(CustomerDetailsContext);
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
  // ------------------------------------------------------------------------
  return (
    <>
      {isLogInPopUpVisible ? (
        <MobileAuthenticationPopUp
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
      <nav className="mobile-nav-bar">
        <ul className="mobile-nav-bar-items-list">
          <li>
            <Link to="/">
              <img src={NavBarIcon} alt="" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/subscription">
              <img src={NavBarIcon} alt="" />
              My Subscriptions
            </Link>
          </li>
          <li>
            <Link to="/myCart">
              <img src={Cart} alt="" />
              Cart
            </Link>
          </li>
          <li>
            <div
              onClick={() => {
                handleOnClickProfile();
              }}
            >
              <img src={Profile} alt="" />
              {customerFirstName.split(" ")[0]}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
