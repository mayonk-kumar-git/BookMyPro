import React, { useContext, useState, useEffect, useRef } from "react";
// -----------------------------------------------------------------------------------------
import "../styles/components/ChooseYourCarWashPackage.scss";
// -----------------------------------------------------------------------------------------
import GreenCircleCheck from "../assets/icons/GreenCircleCheck.svg";
import RedCircleCross from "../assets/icons/RedCircleCross.svg";
import EstimatedCostSection from "../assets/images/ChooseYourService/EstimatedCostSection.png";
import ArrowLeft from "../assets/icons/ArrowLeft.svg";
// -----------------------------------------------------------------------------------------
import { CarServiceDetailsContext } from "./Contexts/CarServiceDetailsProvider";
import InputWithButton from "./InputWithButton";
import DropDownPicker from "./DropDownPicker";
import Button from "./Button";
import InputBoxWithLabel from "./InputBoxWithLabel";
// -----------------------------------------------------------------------------------------

// const PRICE = "13,000";

const SERVICES_PROVIDED = [
  "Water Less Car Wash Plan",
  "26 Exterior Wash",
  "4-Interior Wash",
  "26 - Tyre & Rims Cleaning",
  "26 - Exterior Window Cleaning",
  "4 Floor Mat Cleaning",
  "Dashboard Cleaning",
  "Inside Window Cleaning",
];

const MODELS = [
  "Hyundai",
  "Honda",
  "Audi",
  "KIA",
  "Porsche",
  "Hyundai",
  "Honda",
  "Audi",
  "KIA",
  "Porsche",
  "Hyundai",
  "Honda",
  "Audi",
  "KIA",
  "Porsche",
  "Hyundai",
  "Honda",
  "Audi",
];

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

const FUEL = ["Petrol", "Disel", "CNG", "EV"];

const PACKAGES = ["Hatch Back", "Premimum", "Cross Over", "SUV/Premimum"];

function IsServiceProvided(isProvided) {
  if (isProvided) return <img src={GreenCircleCheck} alt="v" />;
  else return <img src={RedCircleCross} alt="x" />;
}

function PackageCard({
  name,
  price,
  numberOfservicesProvided,
  setSelectedPlan,
  gotoEstimatedPriceSection,
  setCost,
}) {
  return (
    <div className="package">
      <h3 className="package-heading">{name}</h3>
      <ul>
        {SERVICES_PROVIDED.map((service, index) => (
          <li key={index}>
            {IsServiceProvided(index <= numberOfservicesProvided)}
          </li>
        ))}
      </ul>
      <div className="divider-line"></div>
      <p className="package-price">
        ₹ {price} <span>₹ {price + 37 * numberOfservicesProvided}</span>
      </p>
      <Button
        onClick={() => {
          setSelectedPlan(name);
          setCost(price);
          gotoEstimatedPriceSection();
        }}
      >
        Book Now
      </Button>
    </div>
  );
}

export default function ChooseYourCarWashPackage({
  setCarDetailsCurrentStep,
  carDetailsCurrentStep,
  setCurrentStep,
  currentStep,
}) {
  const {
    selectedService,
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedSegment,
    setSelectedSegment,
    selectedPlan,
    setSelectedPlan,
    selectedFuel,
    setSelectedFuel,
    vechicleNumber,
    setVechicleNumber,
    cost,
    setCost,
  } = useContext(CarServiceDetailsContext);

  const estimatedPriceSection = useRef(null);
  const gotoEstimatedPriceSection = () => {
    window.scrollTo({
      top: estimatedPriceSection.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [userContactNumber, setUserContactNumber] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="car-wash-services-packages-section">
        <button
          className="package-back-button"
          onClick={() => {
            setCurrentStep(currentStep - 1);
            setCarDetailsCurrentStep(carDetailsCurrentStep - 1);
          }}
        >
          <img src={ArrowLeft} alt="Left Arrow" />
        </button>
        <header className="car-wash-services-packages-section-header">
          <h1 className="car-wash-services-packages-section-header-heading">
            Book Your <span>{selectedService}</span>
          </h1>
          <p className="car-wash-services-packages-section-header-subheading">
            Choose you Car and Model to Best Deals on the services avaliable in
            our Catelogue
          </p>
        </header>
        <div className="car-wash-services-packages-section-car-details">
          <DropDownPicker
            selectedItem={selectedBrand}
            setSelectedItem={setSelectedBrand}
            options={BRANDS}
            label="Brand"
          />
          <DropDownPicker
            selectedItem={selectedModel}
            setSelectedItem={setSelectedModel}
            options={MODELS}
            label="Model"
          />
          <DropDownPicker
            selectedItem={selectedFuel}
            setSelectedItem={setSelectedFuel}
            options={FUEL}
            label="Fuel"
          />
          <InputBoxWithLabel
            input={vechicleNumber}
            setInput={setVechicleNumber}
            label="Vechile Number"
            placeholder="Vechicle Number"
          />
          <InputBoxWithLabel
            input={selectedSegment}
            setInput={setSelectedSegment}
            label="Segment"
            placeholder="Segment"
          />
        </div>
        <div className="car-wash-services-packages-section-package-container">
          <div className="included-services-list">
            <h3>Plans</h3>
            <ul>
              {SERVICES_PROVIDED.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="different-packages-container">
            {PACKAGES.map((name, index) => (
              <PackageCard
                key={index}
                name={name}
                price={index * 100 + 100 + index * 37}
                numberOfservicesProvided={index * 2 + 2}
                setSelectedPlan={setSelectedPlan}
                gotoEstimatedPriceSection={gotoEstimatedPriceSection}
                setCost={setCost}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedPlan ? (
        <section
          ref={estimatedPriceSection}
          className="car-wash-services-estimated-cost-section"
        >
          <div className="car-wash-services-estimated-cost-section-left">
            <h1 className="car-wash-services-estimated-cost-section-left-heading">
              Total Estimated Cost
            </h1>
            <p className="car-wash-services-estimated-cost-section-left-car-details">
              <span>Brand : </span>
              {selectedBrand}, <span>Model : </span>
              {selectedModel}, <span>Fuel : </span>
              {selectedFuel},<span> Package : </span>
              {selectedPlan}
            </p>
            <p className="car-wash-services-estimated-cost-section-left-description">
              Our technology has transformed the tricky traffic movement in
              parking lots for various business establishments
            </p>
            <p className="car-wash-services-estimated-cost-section-left-price">{`₹ ${cost}`}</p>
            {/* <InputWithButton
              placeholder={"Enter Your Contact Number to get App Link."}
              input={userContactNumber}
              setInput={setUserContactNumber}
            /> */}
            <Button
              onClick={() => {
                setCarDetailsCurrentStep(carDetailsCurrentStep + 1);
                setCurrentStep(currentStep + 1);
              }}
            >
              Proceed to Checkout
            </Button>
          </div>
          <div className="car-wash-services-estimated-cost-section-right">
            <img src={EstimatedCostSection} alt="Car" />
          </div>
        </section>
      ) : (
        <section ref={estimatedPriceSection}></section>
      )}
      {/* <section className="car-wash-services-importance-section"></section> */}
    </>
  );
}
