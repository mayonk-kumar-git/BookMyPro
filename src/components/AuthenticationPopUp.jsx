import React, { useContext, useState } from "react";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// -----------------------------------------------------------------
import "../styles/components/AuthenticationPopUp.scss";
// -----------------------------------------------------------------
import Button from "./Button";
import { CustomerDetailsContext } from "./Contexts/CustomerDetailsProvider";
import InputBoxWithLabel from "./InputBoxWithLabel";
// -----------------------------------------------------------------

function LogIn({
  setAuthenticationType,
  onLogIn,
  setIsPopUpVisible,
  warningMessage,
  setWarningMessage,
  isWarningMessageVisible,
  setIsWarningMessageVisible,
}) {
  // -----------------------------------------------------
  const {
    setIsCustomerLoggedIn,
    setAuthToken,
    setCustomerFirstName,
    setCustomerLastName,
    setContactNumber,
    setCustomerMailId,
  } = useContext(CustomerDetailsContext);
  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  const [isOtpInputFieldVisible, setIsOtpInputFieldVisible] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");

  useEffect(() => {
    setIsOtpInputFieldVisible(false);
    setEnteredOtp("");
  }, [enteredMobileNumber]);

  // -----------------------------------------------------

  const GetLogInSectionButton = () => {
    if (isOtpInputFieldVisible) {
      return (
        <Button
          buttonStyle="primary-solid"
          buttonSize="large"
          onClick={() => {
            verifyUser();
          }}
        >
          Verify
        </Button>
      );
    } else {
      if (isNaN(enteredMobileNumber) || enteredMobileNumber.length < 10) {
        // isNaN is used to check if the entered mobile number contains only numeric digits and nothing else
        return (
          <Button
            buttonStyle="disabled"
            buttonSize="large"
            onClick={() => {
              alert("Please enter a valid mobile number");
            }}
          >
            Log In
          </Button>
        );
      } else {
        return (
          <Button
            buttonStyle="primary-solid"
            buttonSize="large"
            onClick={() => {
              loginCheck();
            }}
          >
            Log In
          </Button>
        );
      }
    }
  };

  const verifyUser = () => {
    let formData = new FormData();
    formData.append("phone_num", enteredMobileNumber);
    formData.append("otp", enteredOtp);
    const loginRequestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(
      "http://carwash.smartcarefoundation.com/api/login",
      loginRequestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.status) {
          setContactNumber(data.user_details.mobile);
          setAuthToken(data.token);
          setCustomerFirstName(data.user_details.first_name);
          setCustomerLastName(data.user_details.last_name);
          setCustomerMailId(data.user_details.email);
          onLogIn();
          setIsCustomerLoggedIn(true);
          setIsPopUpVisible(false);
        } else {
          if (data.msg.toLowerCase().includes("otp expired")) {
            setIsOtpInputFieldVisible(false);
            setWarningMessage("** OTP expired try again **");
            setIsWarningMessageVisible(true);
            setTimeout(() => {
              setIsWarningMessageVisible(false);
            }, 3000);
          } else if (data.msg.toLowerCase().includes("invalid otp")) {
            setWarningMessage("** Invalid OTP, Please try again **");
            setIsWarningMessageVisible(true);

            setTimeout(() => {
              setIsWarningMessageVisible(false);
            }, 3000);
          } else {
            console.log(data);
            setWarningMessage(`** ${data.msg} **`);
            setIsWarningMessageVisible(true);

            setTimeout(() => {
              setIsWarningMessageVisible(false);
            }, 3000);
          }
        }
      })
      .catch((err) => {
        setWarningMessage(
          "** Seems like you ran into a error, try after sometime **"
        );
        setIsWarningMessageVisible(true);
        setTimeout(() => {
          setIsWarningMessageVisible(false);
        }, 3000);
        console.log(err);
      });
  };

  const loginCheck = () => {
    let formData = new FormData();
    formData.append("phone_num", enteredMobileNumber);
    formData.append("type", "login");
    const otpRequestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(
      "http://carwash.smartcarefoundation.com/api/send_OTP",
      otpRequestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.status) {
          setIsOtpInputFieldVisible(true);
        } else {
          setAuthenticationType("SignUp");
          setWarningMessage(
            "** Seems like you don't have an accout, try signing up **"
          );
          setIsWarningMessageVisible(true);
          setTimeout(() => {
            setIsWarningMessageVisible(false);
          }, 3000);
        }
      })
      .catch((err) => {
        setWarningMessage(
          "** Seems like you ran into a error, try after sometime **"
        );
        setIsWarningMessageVisible(true);
        setTimeout(() => {
          setIsWarningMessageVisible(false);
        }, 3000);
        console.log(err);
      });
  };
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
      <div className="warning-message-container">
        <p
          className={
            "warning-message" + (isWarningMessageVisible ? " show" : " hide")
          }
        >
          {warningMessage}
        </p>
      </div>
      <div className="input-form-container">
        <InputBoxWithLabel
          prefix="+91"
          input={enteredMobileNumber}
          setInput={setEnteredMobileNumber}
          label="Mobile Number"
          placeholder="Enter Your Mobile Number"
          keyboardType="tel"
        />

        {isOtpInputFieldVisible ? (
          <>
            <InputBoxWithLabel
              input={enteredOtp}
              setInput={setEnteredOtp}
              label="OTP"
              placeholder="OTP"
            />
          </>
        ) : (
          <></>
        )}
        <GetLogInSectionButton />
      </div>
    </div>
  );
}

function SignUp({
  setAuthenticationType,
  onSignUp,
  setIsPopUpVisible,
  warningMessage,
  setWarningMessage,
  isWarningMessageVisible,
  setIsWarningMessageVisible,
}) {
  // -------------------------------------------------------
  const {
    setIsCustomerLoggedIn,
    setAuthToken,
    setCustomerFirstName,
    setCustomerLastName,
    setContactNumber,
    setCustomerMailId,
  } = useContext(CustomerDetailsContext);
  const [enteredMobileNumber, setEnteredMobileNumber] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredMailId, setEnteredMailId] = useState("");
  const [isOtpInputFieldVisible, setIsOtpInputFieldVisible] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  // -------------------------------------------------------
  useEffect(() => {
    setIsOtpInputFieldVisible(false);
    setEnteredOtp("");
  }, [enteredMobileNumber]);
  // -------------------------------------------------------
  const verifyUser = () => {
    // console.log("hi i am here");
    let formData = new FormData();
    formData.append("phone_num", enteredMobileNumber);
    formData.append("otp", enteredOtp);
    formData.append("fname", enteredFirstName);
    formData.append("lname", enteredLastName);
    formData.append("email", enteredMobileNumber);
    const signupRequestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(
      "http://carwash.smartcarefoundation.com/api/signup",
      signupRequestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setContactNumber(enteredMobileNumber);
          // setAuthToken(data.token);
          setCustomerFirstName(enteredFirstName);
          setCustomerLastName(enteredLastName);
          setCustomerMailId(enteredMailId);
          onSignUp();
          setIsCustomerLoggedIn(true);
          setIsPopUpVisible(false);
        } else {
          if (data.msg.toLowerCase().includes("user already exists")) {
            setAuthenticationType("LogIn");
            setWarningMessage(
              "** Seems like you already have an account, try logging in **"
            );
            setIsWarningMessageVisible(true);
            setTimeout(() => {
              setIsWarningMessageVisible(false);
            }, 3000);
          } else {
            if (data.msg.toLowerCase().includes("otp expired")) {
              setIsOtpInputFieldVisible(false);
              setWarningMessage("** OTP expired try again **");
              setIsWarningMessageVisible(true);
              setTimeout(() => {
                setIsWarningMessageVisible(false);
              }, 3000);
            } else if (data.msg.toLowerCase().includes("invalid otp")) {
              setWarningMessage("** Invalid OTP, Please try again **");
              setIsWarningMessageVisible(true);

              setTimeout(() => {
                setIsWarningMessageVisible(false);
              }, 3000);
            } else {
              console.log(data);
              setWarningMessage(`** ${data.msg} **`);
              setIsWarningMessageVisible(true);
              setTimeout(() => {
                setIsWarningMessageVisible(false);
              }, 3000);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setWarningMessage(
          "** Seems like you ran into a error, try after sometime **"
        );
        setIsWarningMessageVisible(true);
        setTimeout(() => {
          setIsWarningMessageVisible(false);
        }, 3000);
      });
  };
  const signupCheck = () => {
    let formData = new FormData();
    formData.append("phone_num", enteredMobileNumber);
    formData.append("type", "signup");
    const otpRequestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(
      "http://carwash.smartcarefoundation.com/api/send_OTP",
      otpRequestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("otp sent to user");
        setIsOtpInputFieldVisible(true);
      })
      .catch((err) => {
        console.log(err);
        setWarningMessage(
          "** Seems like you ran into a error, try after sometime **"
        );
        setIsWarningMessageVisible(true);
        setTimeout(() => {
          setIsWarningMessageVisible(false);
        }, 3000);
      });
  };
  // -------------------------------------------------------
  const GetSignUpSectionButton = () => {
    if (isOtpInputFieldVisible) {
      return (
        <Button
          buttonStyle="primary-solid"
          buttonSize="large"
          onClick={() => {
            verifyUser();
          }}
        >
          Verify
        </Button>
      );
    } else {
      if (
        enteredMobileNumber.length < 10 ||
        isNaN(enteredMobileNumber) ||
        enteredMailId === "" ||
        enteredFirstName === ""
      ) {
        return (
          <Button
            buttonStyle="disabled"
            buttonSize="large"
            onClick={() => {
              if (
                enteredMobileNumber.length < 10 ||
                isNaN(enteredMobileNumber)
              ) {
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
        );
      } else {
        return (
          <Button
            buttonStyle="primary-solid"
            buttonSize="large"
            onClick={() => {
              signupCheck();
              // setCustomerFirstName(enteredFirstName);
              // setCustomerLastName(enteredLastName);
              // setContactNumber(enteredMobileNumber);
              // setCustomerMailId(enteredMailId);
              // handleOnClickSignUp();
            }}
          >
            Sign Up
          </Button>
        );
      }
    }
  };
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
      <div className="warning-message-container">
        <p
          className={
            "warning-message" + (isWarningMessageVisible ? " show" : " hide")
          }
        >
          {warningMessage}
        </p>
      </div>
      <div className="input-form-container">
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
        {isOtpInputFieldVisible ? (
          <>
            <InputBoxWithLabel
              input={enteredOtp}
              setInput={setEnteredOtp}
              label="OTP"
              placeholder="OTP"
            />
          </>
        ) : (
          <></>
        )}
        <GetSignUpSectionButton />
      </div>
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
  const [AuthenticationType, setAuthenticationType] = useState("LogIn");
  // Never make this warning message as "" (empty string) because if you do so then there will be no warning message to display and we can see some glitchy ui every time the message get displayed and the message gets erased
  const [warningMessage, setWarningMessage] = useState(
    "This is the displayed message"
  );
  const [isWarningMessageVisible, setIsWarningMessageVisible] = useState(false);

  // const navigate = useNavigate();
  // ------------------------------------------------------
  const handleOnClickClose = () => {
    setIsPopUpVisible(false);
  };
  // const handleOnClickLogIn = () => {
  //   onLogIn();
  //   setIsCustomerLoggedIn(true);
  //   setIsPopUpVisible(false);
  // };
  // const handleOnClickSignUp = () => {
  //   onSignUp();
  //   setIsCustomerLoggedIn(true);
  //   setIsPopUpVisible(false);
  // };
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
            onLogIn={onLogIn}
            setIsPopUpVisible={setIsPopUpVisible}
            warningMessage={warningMessage}
            setWarningMessage={setWarningMessage}
            isWarningMessageVisible={isWarningMessageVisible}
            setIsWarningMessageVisible={setIsWarningMessageVisible}
          />
        ) : (
          <SignUp
            setAuthenticationType={setAuthenticationType}
            onSignUp={onSignUp}
            setIsPopUpVisible={setIsPopUpVisible}
            warningMessage={warningMessage}
            setWarningMessage={setWarningMessage}
            isWarningMessageVisible={isWarningMessageVisible}
            setIsWarningMessageVisible={setIsWarningMessageVisible}
          />
        )}
      </div>
    </div>
  );
}
