import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// -----------------------------------------------------------------
import "../styles/components/AuthenticationPopUp.scss";
// -----------------------------------------------------------------
import Button from "./Button";
import { CustomerDetailsContext } from "./Contexts/CustomerDetailsProvider";
import InputBoxWithLabel from "./InputBoxWithLabel";
// -----------------------------------------------------------------

function LogIn({ setAuthenticationType, handleOnClickLogIn }) {
  // -----------------------------------------------------
  const { setContactNumber } = useContext(CustomerDetailsContext);
  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  // -----------------------------------------------------
  return (
    <div className="log-in">
      <header className="log-in-header">
        <h1>Log In</h1>
        <p>
          Or{" "}
          <span
            onClick={() => {
              setAuthenticationType("SignUp");
            }}
          >
            Create an Account
          </span>
        </p>
      </header>
      <InputBoxWithLabel
        prefix="+91"
        input={enteredMobileNumber}
        setInput={setEnteredMobileNumber}
        label="Mobile Number"
        placeholder="Enter Your Mobile Number"
        keyboardType="tel"
      />

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
            setContactNumber(enteredMobileNumber);

            handleOnClickLogIn();
          }}
        >
          Log In
        </Button>
      )}
    </div>
  );
}

function SignUp({ setAuthenticationType, handleOnClickSignUp }) {
  // -------------------------------------------------------
  const {
    setCustomerFirstName,
    setCustomerLastName,
    setContactNumber,
    setCustomerMailId,
  } = useContext(CustomerDetailsContext);
  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredMailId, setEnteredMailId] = useState("");
  // -------------------------------------------------------
  return (
    <div className="sign-up">
      <header className="sign-up-header">
        <h1>Sign Up</h1>
        <p>
          Or{" "}
          <span
            onClick={() => {
              setAuthenticationType("LogIn");
            }}
          >
            Log In to your account
          </span>
        </p>
      </header>
      <InputBoxWithLabel
        prefix="+91"
        input={enteredMobileNumber}
        setInput={setEnteredMobileNumber}
        label="Mobile Number"
        placeholder="Enter Your Mobile Number"
        keyboardType="tel"
      />
      <InputBoxWithLabel
        input={enteredFirstName}
        setInput={setEnteredFirstName}
        label="First Name"
        placeholder="First Name"
      />
      <InputBoxWithLabel
        input={enteredLastName}
        setInput={setEnteredLastName}
        label="Last Name"
        placeholder="Last Name"
      />
      <InputBoxWithLabel
        input={enteredMailId}
        setInput={setEnteredMailId}
        label="Mail Id"
        placeholder="Enter Your mail ID"
      />

      {enteredMobileNumber.length < 10 ||
      enteredMailId === "" ||
      enteredFirstName === "" ? (
        <Button
          buttonStyle="disabled"
          buttonSize="large"
          onClick={() => {
            if (enteredMobileNumber.length < 10) {
              alert("Please enter a valid mobile number");
            } else if (enteredFirstName === "") {
              alert("Please enter your name");
            } else if (enteredMailId === "") {
              alert("Please enter your mail id");
            }
          }}
        >
          Sign Up
        </Button>
      ) : (
        <Button
          buttonStyle="primary-solid"
          buttonSize="large"
          onClick={() => {
            setCustomerFirstName(enteredFirstName);
            setCustomerLastName(enteredLastName);
            setContactNumber(enteredMobileNumber);
            setCustomerMailId(enteredMailId);
            handleOnClickSignUp();
          }}
        >
          Sign Up
        </Button>
      )}
    </div>
  );
}

export default function AuthenticationPopUp({
  onLogIn = () => {
    console.log("Log in function not defined");
  },
  onSignUp = () => {
    console.log("Sign up function not defined");
  },
  setIsPopUpVisible,
}) {
  const { setIsCustomerLoggedIn } = useContext(CustomerDetailsContext);
  const [AuthenticationType, setAuthenticationType] = useState("LogIn");

  // const navigate = useNavigate();
  // ------------------------------------------------------
  const handleOnClickClose = () => {
    setIsPopUpVisible(false);
  };
  const handleOnClickLogIn = () => {
    onLogIn();
    setIsCustomerLoggedIn(true);
    setIsPopUpVisible(false);
  };
  const handleOnClickSignUp = () => {
    onSignUp();
    setIsCustomerLoggedIn(true);
    setIsPopUpVisible(false);
  };
  // ------------------------------------------------------
  return (
    <div className="auth-container">
      <div className="auth-pop-up">
        <div
          className="close-button"
          onClick={() => {
            handleOnClickClose();
          }}
        >
          <Button buttonSize="small-square">x</Button>
        </div>
        {AuthenticationType === "LogIn" ? (
          <LogIn
            setAuthenticationType={setAuthenticationType}
            handleOnClickLogIn={handleOnClickLogIn}
          />
        ) : (
          <SignUp
            setAuthenticationType={setAuthenticationType}
            handleOnClickSignUp={handleOnClickSignUp}
          />
        )}
      </div>
    </div>
  );
}
