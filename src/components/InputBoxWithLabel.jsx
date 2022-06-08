import React from "react";
// -----------------------------------------------------------
import "../styles/components/InputBoxWithLabel.scss";
// -----------------------------------------------------------

export default function InputBoxWithLabel({
  input,
  setInput,
  prefix,
  label = "Input",
  placeholder = "Input",
	keyboardType = "text"
}) {
  const handleAction = () => {
    console.log("input ", input);
  };
  return (
    <div className="input-box-with-label">
      {label && <span className="input-box-with-label-label">{label}</span>}
      {prefix && (
        <>
          <p>
            <strong>{prefix}</strong>
          </p>
        </>
      )}
      <input
        placeholder={placeholder}
        type={keyboardType}
        className="input-box-with-label-input-field"
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
