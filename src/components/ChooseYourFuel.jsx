import React, { useContext, useEffect } from "react";
// ----------------------------------------------------------------------
import "../styles/components/ChooseYourFuel.scss";
// ----------------------------------------------------------------------
import ArrowLeft from "../assets/icons/ArrowLeft.svg";
import PetrolIcon from "../assets/icons/CarFuel/PetrolIcon.svg";
import DiselIcon from "../assets/icons/CarFuel/DiselIcon.svg";
import CNGIcon from "../assets/icons/CarFuel/CNGIcon.svg";
import EVIcon from "../assets/icons/CarFuel/EVIcon.svg";
// ----------------------------------------------------------------------
import InputBox from "./InputBox";
import Button from "./Button";
import { CarServiceDetailsContext } from "./Contexts/CarServiceDetailsProvider";
import { CustomerDetailsContext } from "./Contexts/CustomerDetailsProvider";
// ----------------------------------------------------------------------

const FUELS = ["Petrol", "Diesel", "CNG", "EV"];

function FuelIcon(fuel) {
  switch (fuel) {
    case "Petrol":
      return <img src={PetrolIcon} alt="petrol" />;
    case "Diesel":
      return <img src={DiselIcon} alt="Diesel" />;
    case "CNG":
      return <img src={CNGIcon} alt="CNG" />;
    case "EV":
      return <img src={EVIcon} alt="EV" />;
    default:
      return <img src={PetrolIcon} alt="petrol" />;
  }
}

function FuelCard({ fuel, setSelectedFuel, selectedFuel }) {
  return (
    <div
      className={"fuel-card" + (selectedFuel === fuel ? " selected" : "")}
      onClick={() => {
        setSelectedFuel(fuel);
      }}
    >
      {FuelIcon(fuel)}
      <p className="fuel-card-text">{fuel}</p>
    </div>
  );
}

export default function ChooseYourFuel({
  setCarDetailsCurrentStep,
  carDetailsCurrentStep,
  setCurrentStep,
  currentStep,
}) {
  const {
    selectedBrand,
    selectedModel,
    selectedFuel,
    setSelectedFuel,
    vechicleNumber,
    setVechicleNumber,
  } = useContext(CarServiceDetailsContext);
  const { customerCarsList, setCustomerCarsList } = useContext(
    CustomerDetailsContext
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // -------------------------------------------------------------
  const handleOnClickNextButton = () => {
    if (vechicleNumber.length < 8) {
      alert("Please enter a valid vechile number");
    } else if (!selectedFuel) {
      alert("Please a select fuel type");
    } else if (selectedFuel && vechicleNumber) {
      setCustomerCarsList([
        ...customerCarsList,
        {
          carBrand: selectedBrand,
          carModel: selectedModel,
          carNumber: vechicleNumber,
          carFuelType: selectedFuel,
        },
      ]);
      setCarDetailsCurrentStep(carDetailsCurrentStep + 1);
      setCurrentStep(currentStep + 1);
    }
  };
  // -------------------------------------------------------------
  return (
    <section className="car-information">
      <button
        className="package-back-button"
        onClick={() => {
          // setCurrentStep(currentStep - 1);
          setCarDetailsCurrentStep(carDetailsCurrentStep - 1);
        }}
      >
        <img src={ArrowLeft} alt="Left Arrow" />
      </button>
      <h1 className="car-information-heading">Enter Your Car Information</h1>
      <InputBox
        input={vechicleNumber}
        setInput={setVechicleNumber}
        placeholder="Enter your Vehicle Number"
      />
      <div className="car-information-choose-fuel">
        {FUELS.map((fuel, index) => (
          <FuelCard
            key={index}
            fuel={fuel}
            setSelectedFuel={setSelectedFuel}
            selectedFuel={selectedFuel}
          />
        ))}
      </div>
      <Button
        onClick={() => {
          handleOnClickNextButton();
        }}
      >
        Next
      </Button>
    </section>
  );
}
