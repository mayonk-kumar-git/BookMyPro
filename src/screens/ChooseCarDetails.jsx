import React, { useState } from "react";
// --------------------------------------------------------------------
import ChooseYourBrand from "../components/ChooseYourBrand.jsx";
import ChooseYourModel from "../components/ChooseYourModel.jsx";
import StepProgress from "../components/StepProgress.jsx";
// --------------------------------------------------------------------

const STEPS = [
  "Select Your Brand",
  "Select Your Model",
  "Select Your Car",
  "Select Your Fuel Type",
];

export default function ChooseCarDetails() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const updateCurrentStep = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const ChooseYourSection = () => {
    switch (currentStep) {
      case 0:
        return (
          <ChooseYourBrand
            setSelectedBrand={setSelectedBrand}
            updateCurrentStep={updateCurrentStep}
            currentStep={currentStep}
          />
        );
      case 1:
        return (
          <ChooseYourModel
            setSelectedModel={setSelectedModel}
            updateCurrentStep={updateCurrentStep}
            currentStep={currentStep}
          />
        );

      default:
        return <div>ChooseCarDetails</div>;
    }
  };

  return (
    <>
      <StepProgress
        stepsList={STEPS}
        currentStep={currentStep}
        updateCurrentStep={updateCurrentStep}
      />
      {ChooseYourSection()}
    </>
  );
}
