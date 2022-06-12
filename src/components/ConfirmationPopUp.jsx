import React from "react";

// -----------------------------------------------------
import "../styles/components/ConfirmationPopUp.scss";
// -----------------------------------------------------
import Button from "./Button";
// -----------------------------------------------------

export default function ConfirmationPopUp({
  children,
  isConfirmationPopUpVisible,
  setIsConfirmationPopUpVisible,
  confirmationButtonStyle = "primary-solid",
  confirmButtonText = "Ok",
  onClickConfirmButton = () => {
    // console.log("confirm action not defined");
  },
  onClickCancleButton = () => {
    // console.log("Cancle action not defined");
  },
}) {
  return (
    <div className="confirmation">
      <div
        className={
          "confirmation-pop-up" +
          (isConfirmationPopUpVisible ? " show" : " hide")
        }
      >
        <div
          className="close-button"
          onClick={() => {
            setIsConfirmationPopUpVisible(false);
          }}
        >
          <p>x</p>
        </div>
        <div className="children-container">{children}</div>
        <div className="button-container">
          <Button
            buttonStyle={confirmationButtonStyle}
            onClick={() => {
              onClickConfirmButton();
              setIsConfirmationPopUpVisible(false);
            }}
          >
            {confirmButtonText}
          </Button>
          <div className="cancle-button">
            <p
              onClick={() => {
                onClickCancleButton();
                setIsConfirmationPopUpVisible(false);
              }}
            >
              Cancle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
