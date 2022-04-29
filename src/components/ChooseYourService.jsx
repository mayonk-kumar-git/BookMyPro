import React, { useContext, useState, useEffect } from "react";
// -----------------------------------------------------------------------------------------
import "../styles/components/ChooseYourService.scss";
// -----------------------------------------------------------------------------------------
import CircleCheck from "../assets/icons/CircleCheck.svg";
import GreenCircleCheck from "../assets/icons/GreenCircleCheck.svg";
import RedCircleCross from "../assets/icons/RedCircleCross.svg";
import BookNowSection from "../assets/images/ChooseYourService/BookNowSection.png";
import EstimatedCostSection from "../assets/images/ChooseYourService/EstimatedCostSection.png";
import { CarServiceDetailsContext } from "./Contexts/CarServiceDetailsProvider";
import InputWithButton from "./InputWithButton";
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
}) {
  return (
    <button
      onClick={() => {
        setSelectedPackage(name);
      }}
      className="package"
    >
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
    </button>
  );
}

export default function ChooseYourService() {
  const {
    selectedService,
    setSelectedService,
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedFuel,
    setSelectedFuel,
    selectedPackage,
    setSelectedPackage,
  } = useContext(CarServiceDetailsContext);

  const [userContactNumber, setUserContactNumber] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="services-hero-section"></section>
      <section className="services-packages-section">
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
          <InputWithButton
            placeholder={"Brand"}
            input={selectedBrand}
            setInput={setSelectedBrand}
          />
          <InputWithButton
            placeholder={"Model"}
            input={selectedModel}
            setInput={setSelectedModel}
          />
          <InputWithButton
            placeholder={"Fuel"}
            input={selectedFuel}
            setInput={setSelectedFuel}
          />
        </div>
        <div className="services-packages-section-package-container">
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
              />
            ))}
          </div>
        </div>
      </section>
      {selectedPackage ? (
        <section className="services-estimated-cost-section">
          <div className="services-estimated-cost-section-left">
            <h1 className="services-estimated-cost-section-left-heading">
              Total Estimated Cost
            </h1>
            <p className="services-estimated-cost-section-left-car-details">
              <span>Brand : </span>
              {selectedBrand} <span>Model : </span>
              {selectedModel} <span>Package : </span>
              {selectedPackage}
            </p>
            <p className="services-estimated-cost-section-left-description">
              Our technology has transformed the tricky traffic movement in
              parking lots for various business establishments
            </p>
            <p className="services-estimated-cost-section-left-price">{`₹ ${PRICE}`}</p>
            <InputWithButton
              placeholder={"Enter Your Contact Number to get App Link."}
              input={userContactNumber}
              setInput={setUserContactNumber}
            />
          </div>
          <div className="services-estimated-cost-section-right">
            <img src={EstimatedCostSection} alt="Car" />
          </div>
        </section>
      ) : (
        <></>
      )}
      <section className="services-book-now-section">
        <div className="services-book-now-section-left">
          <h1 className="services-book-now-section-left-heading">
            Hi,I'm your{" "}
            <span className="services-book-now-section-left-heading-span">
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
        <div className="services-book-now-section-right">
          <img src={BookNowSection} alt="Our Loyal Working Patner's" />
        </div>
      </section>
    </>
  );
}
