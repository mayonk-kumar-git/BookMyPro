import React from "react";
//----------------------------------------------------------
import "../styles/components/StepProgress.scss";
//----------------------------------------------------------

function Step({
  stepDescription = "",
  isCompleted = false,
  stepNumber = 0,
  currentStep = 0,
  updateCurrentStep,
}) {
  return (
    <div className="step-item">
      <div
        className={"step-item-circle" + (isCompleted ? " completed" : "")}
        // IMPORTANT: in onClick or any other function which calls a parameterised function always wrap the function inside a arrow function or else the parameterised function will be called directly and for every render and then the renderer will go into an infinite loop
        onClick={() => {
          if (stepNumber <= currentStep) updateCurrentStep(stepNumber);
        }}
      >
        {" "}
      </div>
      <h4 className="step-item-description">{stepDescription}</h4>
    </div>
  );
}

export default function StepProgress({
  stepsList,
  currentStep,
  updateCurrentStep,
}) {
  return (
    <div className="step-progress">
      {stepsList.map((stepDescription, stepNumber) => {
        return (
          <Step
            key={stepNumber}
            currentStep={currentStep}
            stepDescription={stepDescription}
            isCompleted={stepNumber <= currentStep ? true : false}
            stepNumber={stepNumber}
            updateCurrentStep={updateCurrentStep}
          />
        );
      })}
    </div>
  );
}
