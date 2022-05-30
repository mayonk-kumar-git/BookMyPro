import React from "react";
import StepProgress from "../components/StepProgress";
// --------------------------------------------------------------------------

const STEPS = [
  "Select Service",
  "Car Information",
  "Choose Package",
  "Make Payment",
];

export default function Payment() {
  return (
    <>
      <StepProgress
        stepsList={STEPS}
        //assuming by the time we reach the payment page we must have already completed the previous steps, might change the implementation later... as of now lets assume the current step is "make payment" -- STEPS[3]
        currentStep={3}
      />
      <div>Payment</div>
    </>
  );
}
