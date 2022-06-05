import React, { useState, useContext } from "react";
// ------------------------------------------------------------
import "../../styles/components/Mobile/MobileLogIn.scss";
// ------------------------------------------------------------
import LogInScreenImage from "../../assets/images/Mobile/LogInScreen/LogInScreenImage.svg";
import InputBoxWithLabel from "../InputBoxWithLabel";
import Button from "../Button";
import { CustomerDetailsContext } from "../Contexts/CustomerDetailsProvider";
// ------------------------------------------------------------

export default function MobileLogIn({
  onLogIn = () => {
    console.log("OnLogIn function is not passed");
  },
  setIsPopUpVisible,
}) {
  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  const { setIsCustomerLoggedIn } = useContext(CustomerDetailsContext);
  // ----------------------------------------------------------
  // const navigate = useNavigate();
  const handleOnClickLogIn = () => {
    onLogIn();
    setIsCustomerLoggedIn(true);
    setIsPopUpVisible(false);
  };
  const handleOnClickSkip = () => {
    setIsPopUpVisible(false);
  };
  // ----------------------------------------------------------

  return (
    <div className="mobile-log-in-screen">
      <div
        className="mobile-log-in-screen-close-button"
        onClick={() => {
          handleOnClickSkip();
        }}
      >
        <p>x</p>
      </div>
      <img src={LogInScreenImage} alt="" />
      <section className="mobile-log-in-input-section">
        <header className="mobile-log-in-input-section-header">
          <h1>
            Welcome, <span>Book My Pro</span>
          </h1>
          <p>All your vehicle releated services at one place</p>
        </header>
        <div className="mobile-log-in-input-section-input-field">
          <InputBoxWithLabel
            prefix="+91"
            input={enteredMobileNumber}
            setInput={setEnteredMobileNumber}
            label="Mobile Number"
            placeholder="Enter Your Mobile Number"
          />
        </div>
        {enteredMobileNumber.length < 10 ? (
          <Button
            buttonStyle="disabled"
            buttonSize="large"
            onClick={() => {
              alert("Please enter a valid mobile number");
            }}
          >
            Log In
          </Button>
        ) : (
          <Button
            buttonStyle="primary-solid"
            buttonSize="large"
            onClick={() => {
              handleOnClickLogIn();
            }}
          >
            Log In
          </Button>
        )}

        <p
          className="skip-button"
          onClick={() => {
            handleOnClickSkip();
          }}
        >
          Skip
        </p>
      </section>
    </div>
  );
}
