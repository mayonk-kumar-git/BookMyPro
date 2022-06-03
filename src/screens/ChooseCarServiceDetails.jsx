import React, { useState, useEffect, useContext } from "react";
// --------------------------------------------------------------------
import "../styles/screens/ChooseCarServiceDetails.scss";
// --------------------------------------------------------------------
import CircleCheck from "../assets/icons/CircleCheck.svg";
import BookNowSection from "../assets/images/ChooseYourService/BookNowSection.svg";
// --------------------------------------------------------------------
import { CarServiceDetailsContext } from "../components/Contexts/CarServiceDetailsProvider.jsx";
import ChooseYourBrand from "../components/ChooseYourBrand.jsx";
import ChooseYourModel from "../components/ChooseYourModel.jsx";
import ChooseYourFuel from "../components/ChooseYourFuel";
import StepProgress from "../components/StepProgress.jsx";
import ChooseYourCarWashPackage from "../components/ChooseYourCarWashPackage.jsx";
import ChooseYourPackage from "../components/ChooseYourPackage.jsx";
import Button from "../components/Button";
import ChooseYourPreference from "../components/ChooseYourPreference";
import CarWashServiceDetailsProvider from "../components/Contexts/CarWashServiceDetailsProvider";
// --------------------------------------------------------------------

const STEPS = [
  "Select Service",
  "Car Information",
  "Choose Package",
  "Make Payment",
];

export default function ChooseCarDetails() {
  const { selectedService, setSelectedService } = useContext(
    CarServiceDetailsContext
  );
  //int the above STEPS list the select services is already completed while selecting the service so our current step is "Car Information" -- STEPS[1]
  const [currentStep, setCurrentStep] = useState(1);
  const [carDetailsCurrentStep, setCarDetailsCurrentStep] = useState(0);

  useEffect(() => {
    const service = JSON.parse(localStorage.getItem("selectedService"));
    if (service) {
      setSelectedService(service);
    }
  }, []);

  const updateCurrentStep = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const ChooseYourCarDetailsSection = () => {
    switch (carDetailsCurrentStep) {
      case 0:
        return (
          <ChooseYourBrand
            setCarDetailsCurrentStep={setCarDetailsCurrentStep}
            carDetailsCurrentStep={carDetailsCurrentStep}
          />
        );
      case 1:
        return (
          <ChooseYourModel
            setCarDetailsCurrentStep={setCarDetailsCurrentStep}
            carDetailsCurrentStep={carDetailsCurrentStep}
          />
        );
      case 2:
        return (
          <ChooseYourFuel
            setCarDetailsCurrentStep={setCarDetailsCurrentStep}
            carDetailsCurrentStep={carDetailsCurrentStep}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        );
      case 3:
        return ChooseYourServicesSection();
      case 4:
        return (
          <ChooseYourPreference
            setCarDetailsCurrentStep={setCarDetailsCurrentStep}
            carDetailsCurrentStep={carDetailsCurrentStep}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        );
      default:
        return <div>ChooseCarDetails</div>;
    }
  };
  const ChooseYourServicesSection = () => {
    switch (selectedService) {
      case "Daily Car Wash":
        return (
          <ChooseYourCarWashPackage
            setCarDetailsCurrentStep={setCarDetailsCurrentStep}
            carDetailsCurrentStep={carDetailsCurrentStep}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        );
      default:
        return (
          <ChooseYourPackage
            setCarDetailsCurrentStep={setCarDetailsCurrentStep}
            carDetailsCurrentStep={carDetailsCurrentStep}
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        );
    }
  };

  return (
    <>
      <StepProgress
        stepsList={STEPS}
        currentStep={currentStep}
        // updateCurrentStep={updateCurrentStep}
      />
      <CarWashServiceDetailsProvider>
        {ChooseYourCarDetailsSection()}
      </CarWashServiceDetailsProvider>
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
              <p>I will clean your car properly</p>
            </li>
            <li>
              <img src={CircleCheck} alt="." />
              <p>I will come on time</p>
            </li>
            <li>
              <img src={CircleCheck} alt="." />
              <p>I will not take unnecessary leaves</p>
            </li>
          </ul>
        </div>
        <div className="car-wash-services-book-now-section-right">
          <img src={BookNowSection} alt="Our Loyal Working Patner's" />
        </div>
      </section>
    </>
  );
}
