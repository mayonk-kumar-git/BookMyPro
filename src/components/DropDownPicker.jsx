import React, { useState, useEffect } from "react";
// -------------------------------------------------------------------
import "../styles/components/DropDownPicker.scss";
// -------------------------------------------------------------------
import DownArrowHead from "../assets/icons/DownArrowHead.svg";
import UpArrowHead from "../assets/icons/UpArrowHead.svg";
import Button from "./Button";
// -------------------------------------------------------------------

export default function DropDownPicker({
  selectedItem,
  setSelectedItem,
  options,
  label,
  placeholder = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [searchedItem, setSearchedItem] = useState("");
  const [optionsList, setOptionsList] = useState(options);

  useEffect(() => {
    const newOptionsList = options.filter((option) =>
      option.toLowerCase().startsWith(searchedItem.toLowerCase())
    );
    setOptionsList(newOptionsList);
  }, [searchedItem]);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
    setSearchedItem("");

    //This if conditon is used to check getElementById is not null otherwise it wil throw warnings and errors
    if (document.getElementById("visible-list"))
      document.getElementById("visible-list").scroll({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <div className="drop-down-picker">
      {label && <span className="drop-down-picker-label">{label}</span>}
      <p className="drop-down-picker-text">
        {selectedItem ? selectedItem : placeholder}
      </p>
      <Button
        buttonSize="small-square"
        onClick={() => {
          toggleVisible();
        }}
      >
        {isVisible ? (
          <img
            className="drop-down-picker-button-icon"
            src={UpArrowHead}
            alt="Up Arrow Icon"
          />
        ) : (
          <img
            className="drop-down-picker-button-icon"
            src={DownArrowHead}
            alt="Down Arrow Icon"
          />
        )}
      </Button>
      <div
        //we are assigning the id = "visible-list" only to the list that is currently visible so we are writting the id in such manner
        id={isVisible ? "visible-list" : ""}
        className={"drop-down-picker-content" + (isVisible ? " show" : "")}
      >
        <input
          placeholder="Search.."
          type="text"
          className="drop-down-picker-content-search-bar"
          value={searchedItem}
          onChange={(event) => {
            setSearchedItem(event.target.value);
          }}
        />
        {optionsList.map((option, index) => (
          <button
            onClick={() => {
              setSelectedItem(option);
              toggleVisible();
            }}
            className="drop-down-picker-content-item"
            key={index}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
