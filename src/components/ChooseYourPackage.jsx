import React, { useContext, useState, useEffect, useRef } from "react";
// -----------------------------------------------------------------------------------------
import "../styles/components/ChooseYourPackage.scss";
// -----------------------------------------------------------------------------------------
import EstimatedCostSection from "../assets/images/ChooseYourService/EstimatedCostSection.png";
import ArrowLeft from "../assets/icons/ArrowLeft.svg";
import CheckCircleOutline from "../assets/icons/CheckCircleOutline.svg";
// -----------------------------------------------------------------------------------------
import { CarServiceDetailsContext } from "./Contexts/CarServiceDetailsProvider";
import InputWithButton from "./InputWithButton";
import DropDownPicker from "./DropDownPicker";
import Button from "./Button";
import InputBoxWithLabel from "./InputBoxWithLabel";
// -----------------------------------------------------------------------------------------
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

const PLANS = [
  {
    name: "Plan 1",
    price: "599",
    features: ["Hatch Back", "Hatch Back", "Hatch Back", "Hatch Back"],
  },
  {
    name: "Plan 2",
    price: "699",
    features: ["Hatch Back", "Hatch Back", "Hatch Back", "Hatch Back"],
  },
  {
    name: "Plan 3",
    price: "799",
    features: ["Hatch Back", "Hatch Back", "Hatch Back", "Hatch Back"],
  },
  {
    name: "Plan 4",
    price: "899",
    features: ["Hatch Back", "Hatch Back", "Hatch Back", "Hatch Back"],
  },
  {
    name: "Plan 5",
    price: "999",
    features: ["Hatch Back", "Hatch Back", "Hatch Back", "Hatch Back"],
  },
];

function Plan({
  name,
  price,
  features,
  setSelectedPlan,
  gotoEstimatedPriceSection,
  setCost,
}) {
  return (
    <div className="plan">
      <h3 className="plan-heading">{name}</h3>
      <h3 className="plan-price">₹ {price}</h3>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index}>
            <img src={CheckCircleOutline} alt="." />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
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

export default function ChooseYourPackage({
  setCarDetailsCurrentStep,
  carDetailsCurrentStep,
  setCurrentStep,
  currentStep,
}) {
  const {
    carBrandsNameList,
    modelsNameList,
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
  // const [userContactNumber, setUserContactNumber] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="services-packages-section">
        <button
          className="package-back-button"
          onClick={() => {
            setCurrentStep(currentStep - 1);
            setCarDetailsCurrentStep(carDetailsCurrentStep - 1);
          }}
        >
          <img src={ArrowLeft} alt="Left Arrow" />
        </button>
        <header className="services-packages-section-header">
          <h1 className="services-packages-section-header-heading">
            Book Your <span>{selectedService}</span>
          </h1>
          <p className="services-packages-section-header-subheading">
            Choose you Car and Model to Best Deals on the services avaliable in
            our Catelogue
          </p>
        </header>
        <div className="services-packages-section-car-details">
          <DropDownPicker
            selectedItem={selectedBrand}
            setSelectedItem={setSelectedBrand}
            options={carBrandsNameList}
            label="Brand"
          />
          <DropDownPicker
            selectedItem={selectedModel}
            setSelectedItem={setSelectedModel}
            options={modelsNameList}
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
            disabled={true}
          />
        </div>
        <div className="services-packages-section-list">
          <header className="services-packages-section-list-header">
            <h1>Check our Pricing Plans</h1>
            <p>
              We provide best in class pricing plans for All Models <br />{" "}
              Avaliable in the Market
            </p>
          </header>
          <div className="services-packages-section-list-container">
            {PLANS.map((plan, index) => (
              <Plan
                key={index}
                name={plan.name}
                price={plan.price}
                features={plan.features}
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
          className="services-estimated-cost-section"
        >
          <div className="services-estimated-cost-section-left">
            <h1 className="services-estimated-cost-section-left-heading">
              Total Estimated Cost
            </h1>
            <p className="services-estimated-cost-section-left-car-details">
              <span>Brand : </span>
              {selectedBrand}, <span>Model : </span>
              {selectedModel}, <span>Fuel : </span>
              {selectedFuel},<span> Package : </span>
              {selectedPlan}
            </p>
            <p className="services-estimated-cost-section-left-description">
              Our technology has transformed the tricky traffic movement in
              parking lots for various business establishments
            </p>
            <p className="services-estimated-cost-section-left-price">{`₹ ${cost}`}</p>
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
          <div className="services-estimated-cost-section-right">
            <img src={EstimatedCostSection} alt="Car" />
          </div>
        </section>
      ) : (
        <section ref={estimatedPriceSection}></section>
      )}
    </>
  );
}
