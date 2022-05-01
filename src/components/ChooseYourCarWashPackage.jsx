import React, { useContext, useState, useEffect, useRef } from "react";
// -----------------------------------------------------------------------------------------
import "../styles/components/ChooseYourCarWashPackage.scss";
// -----------------------------------------------------------------------------------------
import CircleCheck from "../assets/icons/CircleCheck.svg";
import GreenCircleCheck from "../assets/icons/GreenCircleCheck.svg";
import RedCircleCross from "../assets/icons/RedCircleCross.svg";
import BookNowSection from "../assets/images/ChooseYourService/BookNowSection.png";
import EstimatedCostSection from "../assets/images/ChooseYourService/EstimatedCostSection.png";
import ArrowLeft from "../assets/icons/ArrowLeft.svg";
// -----------------------------------------------------------------------------------------
import { CarServiceDetailsContext } from "./Contexts/CarServiceDetailsProvider";
import InputWithButton from "./InputWithButton";
import DropDownPicker from "./DropDownPicker";
import Button from "./Button";
// -----------------------------------------------------------------------------------------

const PRICE = "13,000";

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

const PACKAGES = ["Hatch Back", "Premimum", "Cross Over", "SUV/Premimum"];

function IsServiceProvided(isProvided) {
  if (isProvided) return <img src={GreenCircleCheck} alt="v" />;
  else return <img src={RedCircleCross} alt="x" />;
}

function Package({
  name,
  price,
  numberOfservicesProvided,
  setSelectedPackage,
  gotoEstimatedPriceSection,
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
          setSelectedPackage(name);
          gotoEstimatedPriceSection();
        }}
      >
        Book Now
      </Button>
    </div>
  );
}

export default function ChooseYourCarWashPackage({
  updateCurrentStep,
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
    selectedPackage,
    setSelectedPackage,
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
            updateCurrentStep(currentStep - 1);
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
            selectedItem={selectedSegment}
            setSelectedItem={setSelectedSegment}
            options={SERVICES_PROVIDED}
            placeholder="Segment"
            label="Segment"
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
              <Package
                key={index}
                name={name}
                price={index * 100 + 100 + index * 37}
                numberOfservicesProvided={index * 2 + 2}
                setSelectedPackage={setSelectedPackage}
                gotoEstimatedPriceSection={gotoEstimatedPriceSection}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedPackage ? (
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
              {selectedBrand} <span>Model : </span>
              {selectedModel} <span>Package : </span>
              {selectedPackage}
            </p>
            <p className="car-wash-services-estimated-cost-section-left-description">
              Our technology has transformed the tricky traffic movement in
              parking lots for various business establishments
            </p>
            <p className="car-wash-services-estimated-cost-section-left-price">{`₹ ${PRICE}`}</p>
            <InputWithButton
              placeholder={"Enter Your Contact Number to get App Link."}
              input={userContactNumber}
              setInput={setUserContactNumber}
            />
          </div>
          <div className="car-wash-services-estimated-cost-section-right">
            <img src={EstimatedCostSection} alt="Car" />
          </div>
        </section>
      ) : (
        <section ref={estimatedPriceSection}></section>
      )}
      <section className="car-wash-services-book-now-section">
        <div className="car-wash-services-book-now-section-left">
          <h1 className="car-wash-services-book-now-section-left-heading">
            Hi,I'm your{" "}
            <span className="car-wash-services-book-now-section-left-heading-span">
              Pro
            </span>
          </h1>
          <ul>
            <li>
              <img src={CircleCheck} alt="." />
              <p>I have no hidden fees</p>
            </li>
            <li>
              <img src={CircleCheck} alt="." />
              <p>I will protect your money like no one else</p>
            </li>
            <li>
              <img src={CircleCheck} alt="." />
              <p>I will protect your money like no one else</p>
            </li>
            <li>
              <img src={CircleCheck} alt="." />
              <p>I am numberless prepaid card and love to wear black</p>
            </li>
          </ul>
          <Button>Book Now</Button>
        </div>
        <div className="car-wash-services-book-now-section-right">
          <img src={BookNowSection} alt="Our Loyal Working Patner's" />
        </div>
      </section>
      <section className="car-wash-services-importance-section"></section>
    </>
  );
}
