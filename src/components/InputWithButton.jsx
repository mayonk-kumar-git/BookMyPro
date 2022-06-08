import React from "react";
// -------------------------------------------------------------------
import "../styles/components/InputWithButton.scss";
// -------------------------------------------------------------------
import ArrowRight from "../assets/icons/ArrowRight.svg";
import Button from "./Button";
// -------------------------------------------------------------------

export default function InputWithButton({ input, setInput, placeholder }) {
  const handleAction = () => {
    console.log("input ", input);
  };

  return (
    <div className="input-bar">
      <input
        placeholder={placeholder}
        type="text"
        className="input-bar-input-field"
        value={input}
        onChange={(event) => {
          setInput(event.target.value.trim());
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleAction();
        }}
      />
      <Button
        buttonSize="small-square"
        onClick={() => {
          handleAction();
        }}
      >
        <img
          className="input-bar-icon"
          src={ArrowRight}
          alt="Right Arrow Icon"
        />
      </Button>
    </div>
  );
}
