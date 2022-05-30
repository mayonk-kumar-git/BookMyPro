import React from "react";
// -----------------------------------------------------------
import "../styles/components/InputBox.scss";
// -----------------------------------------------------------

export default function InputBox({ input, setInput, placeholder="Input" }) {
  const handleAction = () => {
    console.log("input ", input);
  };
  return (
    <div className="input-box">
      <input
        placeholder={placeholder}
        type="text"
        className="input-box-input-field"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleAction();
        }}
      />
    </div>
  );
}
