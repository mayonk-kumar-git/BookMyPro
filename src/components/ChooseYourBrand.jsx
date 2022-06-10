import React, { useState, useEffect, useContext } from "react";
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
import { CarServiceDetailsContext } from "./Contexts/CarServiceDetailsProvider.jsx";
// ---------------------------------------------------------

const BRANDS = [
  "Hyundai",
  "Maruti",
  "Audi",
  "KIA",
  "Porsche",
  "Mercedes",
  "Land Rover",
  "Hyundai",
  "Maruti",
  "Audi",
  "KIA",
  "Porsche",
  "Mercedes",
  "Land Rover",
  "Hyundai",
  "Maruti",
  "Audi",
  "KIA",
];

function BrandLogo({ brandName }) {
  switch (brandName) {
    case "Hyundai":
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
  setCarDetailsCurrentStep,
  carDetailsCurrentStep,
}) {
  return (
    <button
      onClick={() => {
        setSelectedBrand(brandName);
        setCarDetailsCurrentStep(carDetailsCurrentStep + 1);
      }}
      className="brand-list-card"
    >
      <BrandLogo brandName={brandName} />
      <h4 className="brand-list-card-name">{brandName}</h4>
    </button>
  );
}
export default function ChooseYourBrand({
  setCarDetailsCurrentStep,
  carDetailsCurrentStep,
}) {
  const { setSelectedBrand, setSelectedModel, setSelectedPlan } = useContext(
    CarServiceDetailsContext
  );
  const [searchedBrand, setSearchedBrand] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    //we are setting the selectedPackage and selectedModel to null because if a user goes to the selectYourPackage section select a package and again come back, the select your brand section the package and model of the car that he/she has selected must be unselected
    setSelectedModel(null);
    setSelectedPlan(null);
  }, []);
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
      {searchResult.length > 0 ? (
        <div className="search-result-list">
          {searchResult.map((brandName, index) => (
            <BrandCard
              key={index}
              brandName={brandName}
              index={index}
              setSelectedBrand={setSelectedBrand}
              setCarDetailsCurrentStep={setCarDetailsCurrentStep}
              carDetailsCurrentStep={carDetailsCurrentStep}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
      <div className="brand-list">
        {BRANDS.map((brandName, index) => (
          <BrandCard
            key={index}
            brandName={brandName}
            index={index}
            setSelectedBrand={setSelectedBrand}
            setCarDetailsCurrentStep={setCarDetailsCurrentStep}
            carDetailsCurrentStep={carDetailsCurrentStep}
          />
        ))}
      </div>
    </div>
  );
}
