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
// ----------------------------------------------------------------------

const FUELS = ["Petrol", "Disel", "CNG", "EV"];

function FuelIcon(fuel) {
  switch (fuel) {
    case "Petrol":
      return <img src={PetrolIcon} alt="petrol" />;
    case "Disel":
      return <img src={DiselIcon} alt="petrol" />;
    case "CNG":
      return <img src={CNGIcon} alt="petrol" />;
    case "EV":
      return <img src={EVIcon} alt="petrol" />;
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
  const { selectedFuel, setSelectedFuel, vechicleNumber, setVechicleNumber } =
    useContext(CarServiceDetailsContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="car-information">
      <button
        className="package-back-button"
        onClick={() => {
          setCurrentStep(currentStep - 1);
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
					if(selectedFuel && vechicleNumber )
					{
						setCarDetailsCurrentStep(carDetailsCurrentStep + 1);
						setCurrentStep(currentStep + 1);

					}
					else{
						alert("Please enter the vechile number and select fuel type")
					}
        }}
      >
        Next
      </Button>
    </section>
  );
}
