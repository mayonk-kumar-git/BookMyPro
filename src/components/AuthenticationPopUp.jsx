import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// -----------------------------------------------------------------
import "../styles/components/AuthenticationPopUp.scss";
// -----------------------------------------------------------------
import Button from "./Button";
import { CustomerDetailsContext } from "./Contexts/CustomerDetailsProvider";
import InputBoxWithLabel from "./InputBoxWithLabel";
// -----------------------------------------------------------------

function LogIn({
  enteredMobileNumber,
  setEnteredMobileNumber,
  setAuthenticationType,
  handleOnClickLogIn,
}) {
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
            handleOnClickLogIn();
          }}
        >
          Log In
        </Button>
      )}
    </div>
  );
}

function SignUp({
  enteredMobileNumber,
  setEnteredMobileNumber,
  setAuthenticationType,
  handleOnClickSignUp,
  enteredName,
  setEnteredName,
  enteredMailId,
  setEnteredMailId,
}) {
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
        input={enteredName}
        setInput={setEnteredName}
        label="Name"
        placeholder="Enter Your Full Name"
      />
      <InputBoxWithLabel
        input={enteredMailId}
        setInput={setEnteredMailId}
        label="Mail Id"
        placeholder="Enter Your mail ID"
      />

      {enteredMobileNumber.length < 10 ||
      enteredMailId === "" ||
      enteredName === "" ? (
        <Button
          buttonStyle="disabled"
          buttonSize="large"
          onClick={() => {
            if (enteredMobileNumber.length < 10) {
              alert("Please enter a valid mobile number");
            } else if (enteredName === "") {
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
  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMailId, setEnteredMailId] = useState("");

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
            enteredMobileNumber={enteredMobileNumber}
            setEnteredMobileNumber={setEnteredMobileNumber}
            setAuthenticationType={setAuthenticationType}
            handleOnClickLogIn={handleOnClickLogIn}
          />
        ) : (
          <SignUp
            enteredMobileNumber={enteredMobileNumber}
            setEnteredMobileNumber={setEnteredMobileNumber}
            setAuthenticationType={setAuthenticationType}
            handleOnClickSignUp={handleOnClickSignUp}
            enteredName={enteredName}
            setEnteredName={setEnteredName}
            enteredMailId={enteredMailId}
            setEnteredMailId={setEnteredMailId}
          />
        )}
      </div>
    </div>
  );
}
