import React from "react";
// -------------------------------------------------------------------
import "../styles/components/SearchBar.scss";
// -------------------------------------------------------------------
import SearchIcon from "../assets/icons/SearchIcon.svg";
import Button from "./Button";
// -------------------------------------------------------------------

export default function SearchBar({ searchedItem, setSearchedItem }) {
  const handleSearch = () => {
    console.log("search ", searchedItem);
  };

  return (
    <div className="search-bar">
      <input
				placeholder="Enter car brand ..."
        type="text"
        className="search-bar-input"
        value={searchedItem}
        onChange={(event) => {
          setSearchedItem(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key == "Enter") handleSearch();
        }}
      />
      <Button
			buttonSize="small-square"
        onClick={() => {
          handleSearch();
        }}
      >
        <img className="search-bar-icon" src={SearchIcon} alt="Search Icon" />
      </Button>
    </div>
  );
}
