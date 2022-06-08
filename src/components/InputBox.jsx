import React from "react";
// -----------------------------------------------------------
import "../styles/components/InputBox.scss";
// -----------------------------------------------------------

export default function InputBox({
  input,
  setInput,
  placeholder = "Input",
  keyboardType = "text",
}) {
  const handleAction = () => {
    console.log("input ", input);
  };
  return (
    <div className="input-box">
      <input
        placeholder={placeholder}
        type={keyboardType}
        className="input-box-input-field"
        value={input}
        onChange={(event) => {
          setInput(event.target.value.trim());
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleAction();
        }}
      />
    </div>
  );
}
