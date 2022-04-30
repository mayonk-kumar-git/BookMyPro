import React, { useState, useContext } from "react";
// --------------------------------------------------------------------
import { CarServiceDetailsContext } from "../components/Contexts/CarServiceDetailsProvider.jsx";
// --------------------------------------------------------------------
import ChooseYourBrand from "../components/ChooseYourBrand.jsx";
import ChooseYourModel from "../components/ChooseYourModel.jsx";
import StepProgress from "../components/StepProgress.jsx";
import ChooseYourService from "../components/ChooseYourService.jsx";
// --------------------------------------------------------------------

const STEPS = ["Select Your Brand", "Select Your Model", "Select Your Package"];

export default function ChooseCarDetails() {
  const { selectedService } = useContext(CarServiceDetailsContext);
  const [currentStep, setCurrentStep] = useState(0);
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
        return <ChooseYourService />;
      default:
        return <div>{selectedService}</div>;
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
