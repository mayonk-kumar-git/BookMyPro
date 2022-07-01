import React, { useContext, useState, useEffect, useRef } from "react";
// -----------------------------------------------------------------------------------------
import "../styles/components/ChooseYourPackage.scss";
// -----------------------------------------------------------------------------------------
import EstimatedCostSection from "../assets/images/ChooseYourService/EstimatedCostSection.png";
import ArrowLeft from "../assets/icons/ArrowLeft.svg";
import CheckCircleOutline from "../assets/icons/CheckCircleOutline.svg";
import Clock from "../assets/icons/Clock.svg";
// -----------------------------------------------------------------------------------------
import { CarServiceDetailsContext } from "./Contexts/CarServiceDetailsProvider";
// import InputWithButton from "./InputWithButton";
import DropDownPicker from "./DropDownPicker";
import Button from "./Button";
import InputBoxWithLabel from "./InputBoxWithLabel";
import LoadingScreen from "./LoadingScreen";
// -----------------------------------------------------------------------------------------

const FUEL = ["Petrol", "Disel", "CNG", "EV"];

function calculatePayableAmount(amount, discount) {
  return Math.round((parseFloat(amount) - parseFloat(discount)) * 100) / 100;
}

function PlanCard({
  plan,
  gotoEstimatedPriceSection,
  setSelectedPlanDescription,
}) {
  // --------------------------------------------------
  const { amount, description, discount_amount, image, package_name } = plan;
  const { setSelectedPlan, setCost } = useContext(CarServiceDetailsContext);

  const firstFewDescriptions = [...description];

  const payableAmount = calculatePayableAmount(amount, discount_amount);
  const isBestSeller = payableAmount == "1000" ? true : false;

  // --------------------------------------------------
  // --------------------------------------------------
  return (
    <div
      className={"plan-card" + (isBestSeller ? " best-seller" : "")}
      onClick={() => {
        setSelectedPlan(package_name);
        setCost(payableAmount);
        setSelectedPlanDescription(description);
        gotoEstimatedPriceSection();
      }}
    >
      {isBestSeller ? <p className="best-seller-badge">Best Seller</p> : <></>}
      <div>
        <header className="plan-card-header">
          <div className="left">
            <img
              className="left-image"
              src={`http://carwash.smartcarefoundation.com/uploads/service/${image}`}
              alt="Gas Station"
            />
            <div className="left-text">
              <h3 className="left-text-heading">{package_name}</h3>
              <div className="left-text-time">
                <img src={Clock} alt="clock icon" />
                <p>35 exterior wash 35 interior wash</p>
              </div>
            </div>
          </div>
          <div className="right">
            <p>
              <span className="original-price">{`₹ ${payableAmount} `}</span>
              <span className="discounted-price">{amount}</span>
            </p>
          </div>
        </header>
        <ul className="plan-card-description-container">
          {firstFewDescriptions
            .splice(0, Math.min(description.length, 2))
            .map((feature, index) => (
              <li key={index}>
                <img src={CheckCircleOutline} alt="list icon" />{" "}
                <p>{feature}</p>
              </li>
            ))}
          {description.length > 2 ? (
            <li>
              <span className="description-more-button">...more</span>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="plan-card-CTA">
        <Button buttonStyle={isBestSeller ? "white-solid" : "primary-solid"}>
          Book Now
        </Button>
      </div>
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
    isLoading,
    carBrandsNameList,
    modelsNameList,
    selectedService,
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedSegment,
    setSelectedSegment,
    planList,
    selectedPlan,
    selectedFuel,
    setSelectedFuel,
    vechicleNumber,
    setVechicleNumber,
    cost,
  } = useContext(CarServiceDetailsContext);
  const [selectedPlanDescription, setSelectedPlanDescription] = useState([]);

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
  if (isLoading) {
    return <LoadingScreen />;
  } else {
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
              Choose you Car and Model to Best Deals on the services avaliable
              in our Catelogue
            </p>
          </header>
          <div className="services-packages-section-car-details">
            <DropDownPicker
              selectedItem={selectedBrand}
              setSelectedItem={setSelectedBrand}
              options={carBrandsNameList}
              label="Brand"
              placeholder="Select brand"
            />
            <DropDownPicker
              selectedItem={selectedModel}
              setSelectedItem={setSelectedModel}
              options={modelsNameList}
              label="Model"
              placeholder="Select Model"
            />
            <DropDownPicker
              selectedItem={selectedFuel}
              setSelectedItem={setSelectedFuel}
              options={FUEL}
              label="Fuel"
              placeholder="Select fuel"
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
              {planList.map((plan) => (
                <PlanCard
                  key={plan.package_id}
                  plan={plan}
                  gotoEstimatedPriceSection={gotoEstimatedPriceSection}
                  setSelectedPlanDescription={setSelectedPlanDescription}
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
                {selectedFuel}
              </p>
              <p className="services-estimated-cost-section-left-car-details">
                <span> Package : </span> {selectedPlan}
              </p>
              {/* <p className="services-estimated-cost-section-left-description">
                Our technology has transformed the tricky traffic movement in
                parking lots for various business establishments
              </p> */}
              <ul className="services-estimated-cost-section-left-package-description-container">
                {selectedPlanDescription.map((feature, index) => (
                  <li key={index}>
                    <img src={CheckCircleOutline} alt="list icon" />{" "}
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
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
}
