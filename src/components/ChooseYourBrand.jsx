import React, { useState, useEffect } from "react";
// ---------------------------------------------------------
import "../styles/components/ChooseYourBrand.scss";
// ---------------------------------------------------------
import Hyundai from "../assets/icons/CarBrands/Hyundai.svg";
import MarutiSuzuki from "../assets/icons/CarBrands/MarutiSuzuki.svg";
import Audi from "../assets/icons/CarBrands/Audi.svg";
import Kia from "../assets/icons/CarBrands/Kia.svg";
import Porsche from "../assets/icons/CarBrands/Porsche.svg";
import MercedesBenz from "../assets/icons/CarBrands/MercedesBenz.svg";
import LandRover from "../assets/icons/CarBrands/LandRover.svg";
// ---------------------------------------------------------
import SearchBar from "./SearchBar";
// ---------------------------------------------------------

const BRANDS = [
  "Hundai",
  "Maruti",
  "Audi",
  "KIA",
  "Porsche",
  "Mercedes",
  "Land Rover",
  "Hundai",
  "Maruti",
  "Audi",
  "KIA",
  "Porsche",
  "Mercedes",
  "Land Rover",
  "Hundai",
  "Maruti",
  "Audi",
  "KIA",
];

function BrandLogo({ brandName }) {
  switch (brandName) {
    case "Hundai":
      return (
        <img
          className="brand-list-card-logo"
          src={Hyundai}
          alt="Hundai Car Logo"
        />
      );
    case "Maruti":
      return (
        <img
          className="brand-list-card-logo"
          src={MarutiSuzuki}
          alt="Hundai Car Logo"
        />
      );
    case "Audi":
      return (
        <img
          className="brand-list-card-logo"
          src={Audi}
          alt="Hundai Car Logo"
        />
      );
    case "KIA":
      return (
        <img className="brand-list-card-logo" src={Kia} alt="Hundai Car Logo" />
      );
    case "Porsche":
      return (
        <img
          className="brand-list-card-logo"
          src={Porsche}
          alt="Hundai Car Logo"
        />
      );
    case "Mercedes":
      return (
        <img
          className="brand-list-card-logo"
          src={MercedesBenz}
          alt="Hundai Car Logo"
        />
      );
    case "Land Rover":
      return (
        <img
          className="brand-list-card-logo"
          src={LandRover}
          alt="Hundai Car Logo"
        />
      );
    default:
      return (
        <img
          className="brand-list-card-logo"
          src={Hyundai}
          alt="Hundai Car Logo"
        />
      );
  }
}

function BrandCard({
  brandName,
  index,
  setSelectedBrand,
  updateCurrentStep,
  currentStep,
}) {
  return (
    <button
      onClick={() => {
        setSelectedBrand(brandName);
        updateCurrentStep(currentStep + 1);
        console.log("current Step : ", currentStep);
      }}
      className="brand-list-card"
    >
      <BrandLogo brandName={brandName} />
      <h4 className="brand-list-card-name">{brandName}</h4>
    </button>
  );
}

export default function ChooseYourBrand({
  setSelectedBrand,
  updateCurrentStep,
  currentStep,
}) {
  const [searchedBrand, setSearchedBrand] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    if (searchedBrand === "") {
      setSearchResult([]);
      return;
    }
    let newSearchResultList = BRANDS.filter((brand) =>
      brand.toLowerCase().startsWith(searchedBrand.toLowerCase())
    );
    setSearchResult(newSearchResultList);
  }, [searchedBrand]);
  return (
    <div className="choose-your-brand">
      <h1 className="choose-your-brand-heading">Choose your Brand</h1>
      <SearchBar
        searchedItem={searchedBrand}
        setSearchedItem={setSearchedBrand}
      />
      <div className="brand-list">
        {searchResult.length > 0 ? (
          searchResult.map((brandName, index) => (
            <BrandCard
              key={index}
              brandName={brandName}
              index={index}
              setSelectedBrand={setSelectedBrand}
              updateCurrentStep={updateCurrentStep}
              currentStep={currentStep}
            />
          ))
        ) : (
          <></>
        )}
        {searchResult.length > 0 ? (
          <div className="search-result-divider-line"></div>
        ) : (
          <></>
        )}
        {BRANDS.map((brandName, index) => (
          <BrandCard
            key={index}
            brandName={brandName}
            index={index}
            setSelectedBrand={setSelectedBrand}
            updateCurrentStep={updateCurrentStep}
            currentStep={currentStep}
          />
        ))}
      </div>
    </div>
  );
}
