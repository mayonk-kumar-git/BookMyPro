import React, { useState, useEffect, useContext } from "react";
// --------------------------------------------------------------------
import { CarServiceDetailsContext } from "../components/Contexts/CarServiceDetailsProvider.jsx";
// --------------------------------------------------------------------
import ChooseYourBrand from "../components/ChooseYourBrand.jsx";
import ChooseYourModel from "../components/ChooseYourModel.jsx";
import StepProgress from "../components/StepProgress.jsx";
import ChooseYourCarWashPackage from "../components/ChooseYourCarWashPackage.jsx";
import ChooseYourPackage from "../components/ChooseYourPackage.jsx";
// --------------------------------------------------------------------

const STEPS = ["Select Your Brand", "Select Your Model", "Select Your Package"];

export default function ChooseCarDetails() {
  const { selectedService, setSelectedService } = useContext(
    CarServiceDetailsContext
  );
  const [currentStep, setCurrentStep] = useState(0);

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
    switch (currentStep) {
      case 0:
        return (
          <ChooseYourBrand
            updateCurrentStep={updateCurrentStep}
            currentStep={currentStep}
          />
        );
      case 1:
        return (
          <ChooseYourModel
            updateCurrentStep={updateCurrentStep}
            currentStep={currentStep}
          />
        );
      case 2:
        return ChooseYourServicesSection();

      default:
        return <div>ChooseCarDetails</div>;
    }
  };
  const ChooseYourServicesSection = () => {
    switch (selectedService) {
      case "Daily Car Wash":
        return (
          <ChooseYourCarWashPackage
            updateCurrentStep={updateCurrentStep}
            currentStep={currentStep}
          />
        );
      default:
        return <ChooseYourPackage />;
    }
  };

  return (
    <>
      <StepProgress
        stepsList={STEPS}
        currentStep={currentStep}
        updateCurrentStep={updateCurrentStep}
      />
      {ChooseYourCarDetailsSection()}
    </>
  );
}
