import React from "react";
// -----------------------------------------------------------
import "../styles/components/InputBoxWithLabel.scss";
// -----------------------------------------------------------

export default function InputBoxWithLabel({
  input,
  setInput,
  label = "Input",
  placeholder = "Input",
}) {
  const handleAction = () => {
    console.log("input ", input);
  };
  return (
    <div className="input-box-with-label">
      {label && <span className="input-box-with-label-label">{label}</span>}
      <input
        placeholder={placeholder}
        type="text"
        className="input-box-with-label-input-field"
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
