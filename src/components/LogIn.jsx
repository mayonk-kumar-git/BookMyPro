import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// -----------------------------------------------------------------
import "../styles/components/LogIn.scss";
// -----------------------------------------------------------------
import Button from "./Button";
import { CustomerDetailsContext } from "./Contexts/CustomerDetailsProvider";
// -----------------------------------------------------------------

export default function LogIn({ onLogIn, setIsPopUpVisible }) {
  const { setIsCustomerLoggedIn } = useContext(CustomerDetailsContext);
  // const navigate = useNavigate();
  const handleOnClickLogIn = () => {
    onLogIn();
    setIsCustomerLoggedIn(true);
    setIsPopUpVisible(false);
  };
  const handleOnClickClose = () => {
    setIsPopUpVisible(false);
  };
  return (
    <div className="login">
      <div className="login-pop-up">
        <Button
          onClick={() => {
            handleOnClickLogIn();
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => {
            handleOnClickClose();
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
