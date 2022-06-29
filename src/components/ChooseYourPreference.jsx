import React, { useEffect, useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// -----------------------------------------------------------------------------------------
import "../styles/components/ChooseYourPreference.scss";
// -----------------------------------------------------------------------------------------
import ArrowLeft from "../assets/icons/ArrowLeft.svg";
import CarWashIcon from "../assets/icons/CarPreferences/CarWashIcon.svg";
// -----------------------------------------------------------------------------------------
import { CarServiceDetailsContext } from "./Contexts/CarServiceDetailsProvider";
import DropDownPicker from "./DropDownPicker";
import Button from "./Button";
import InputBoxWithLabel from "./InputBoxWithLabel";
import { CarWashServiceDetailsContext } from "./Contexts/CarWashServiceDetailsProvider";
import { CustomerDetailsContext } from "./Contexts/CustomerDetailsProvider";
import AuthenticationPopUp from "./AuthenticationPopUp";
// -----------------------------------------------------------------------------------------

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

const WEEKDAY = ["Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"];

const EXTERIOR_TIME_SLOTS = [
  {
    startTime: "08:45 AM",
    endTime: "09:30 AM",
    availableSlots: 3,
  },
  {
    startTime: "10:45 AM",
    endTime: "11:30 AM",
    availableSlots: 4,
  },
  {
    startTime: "12:45 AM",
    endTime: "13:30 AM",
    availableSlots: 3,
  },
  {
    startTime: "14:45 AM",
    endTime: "15:30 AM",
    availableSlots: 6,
  },
  {
    startTime: "16:45 AM",
    endTime: "17:30 AM",
    availableSlots: 3,
  },
  {
    startTime: "18:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "19:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "20:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "21:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "22:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "23:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "24:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
];
const INTERIOR_TIME_SLOTS = [
  {
    startTime: "08:45 AM",
    endTime: "09:30 AM",
    availableSlots: 3,
  },
  {
    startTime: "10:45 AM",
    endTime: "11:30 AM",
    availableSlots: 4,
  },
  {
    startTime: "12:45 AM",
    endTime: "13:30 AM",
    availableSlots: 3,
  },
  {
    startTime: "14:45 AM",
    endTime: "15:30 AM",
    availableSlots: 6,
  },
  {
    startTime: "16:45 AM",
    endTime: "17:30 AM",
    availableSlots: 3,
  },
  {
    startTime: "18:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "19:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "20:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "21:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "22:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "23:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
  {
    startTime: "24:45 AM",
    endTime: "19:30 AM",
    availableSlots: 18,
  },
];

function DateCard({ day, selectedDay, setSelectedDay }) {
  return (
    <div
      className={"day-card" + (day === selectedDay ? " selected" : "")}
      onClick={() => {
        setSelectedDay(day);
      }}
    >
      <p className="date-card-day">{day}</p>
    </div>
  );
}
function TimeCard({
  startTime,
  endTime,
  availableSlots,
  slotID,
  selectedSlot,
  onClickHandle,
}) {
  return (
    <div
      className={"time-card" + (slotID === selectedSlot ? " selected" : "")}
      onClick={() => onClickHandle()}
    >
      <p className="time-card-time">{`${startTime} - ${endTime}`}</p>
      <p className="time-card-slots">{`${availableSlots} Slots Available`}</p>
    </div>
  );
}

export default function ChooseYourPreference({
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
    selectedFuel,
    setSelectedFuel,
    selectedPlan,
    vechicleNumber,
    setVechicleNumber,
    cost,
  } = useContext(CarServiceDetailsContext);
  const {
    typeOfCarWash,
    setTypeOfCarWash,
    selectedDay,
    setSelectedDay,
    exteriorWashSelectedSlot,
    setExteriorWashSelectedSlot,
    interiorWashSelectedSlot,
    setInteriorWashSelectedSlot,
  } = useContext(CarWashServiceDetailsContext);

  const { isCustomerLoggedIn, cartItems, setCartItems } = useContext(
    CustomerDetailsContext
  );
  const [isLogInPopUpVisible, setIsLogInPopUpVisible] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const preferenceSection = useRef(null);
  useEffect(() => {
    window.scrollTo({
      top: preferenceSection.current.offsetTop,
      behavior: "smooth",
    });
  }, [typeOfCarWash]);

  const navigate = useNavigate();
  const proceedToCheckoutButton = useRef(null);
  // --------------------------------------------------------------------------
  const gotoProceedToCheckoutButton = () => {
    window.scrollTo({
      top: proceedToCheckoutButton.current.offsetTop,
      behavior: "smooth",
    });
  };
  const handleOnClickProceedToPayment = () => {
    if (!isCustomerLoggedIn) {
      setIsLogInPopUpVisible(true);
    } else {
      setCarDetailsCurrentStep(carDetailsCurrentStep + 1);
      setCartItems([
        ...cartItems,
        {
          brand: selectedBrand,
          model: selectedModel,
          vechicleNumber: vechicleNumber,
          service: selectedService,
          plan: selectedPlan,
          cost: cost,
        },
      ]);
      navigate("/payment");
    }
  };
  // --------------------------------------------------------------------------
  return (
    <>
      {isLogInPopUpVisible ? (
        <AuthenticationPopUp
          onLogIn={() => {
            setCarDetailsCurrentStep(carDetailsCurrentStep + 1);
            setCartItems([
              ...cartItems,
              {
                brand: selectedBrand,
                model: selectedModel,
                vechicleNumber: vechicleNumber,
                service: selectedService,
                plan: selectedPlan,
                cost: cost,
              },
            ]);
            navigate("/payment");
          }}
          onSignUp={() => {
            setCarDetailsCurrentStep(carDetailsCurrentStep + 1);
            setCartItems([
              ...cartItems,
              {
                brand: selectedBrand,
                model: selectedModel,
                vechicleNumber: vechicleNumber,
                service: selectedService,
                plan: selectedPlan,
                cost: cost,
              },
            ]);
            navigate("/payment");
          }}
          setIsPopUpVisible={setIsLogInPopUpVisible}
        />
      ) : (
        <></>
      )}
      <section className="slot-preference-section">
        <button
          className="slot-preference-back-button"
          onClick={() => {
            setCurrentStep(currentStep - 1);
            setCarDetailsCurrentStep(carDetailsCurrentStep - 1);
          }}
        >
          <img src={ArrowLeft} alt="Left Arrow" />
        </button>
        <header className="slot-preference-section-header">
          <h1 className="slot-preference-section-header-heading">
            Book Your <span>{selectedService}</span>
          </h1>
          <p className="slot-preference-section-header-subheading">
            Choose you Car and Model to Best Deals on the services avaliable in
            our Catelogue
          </p>
        </header>
        <div className="slot-preference-section-car-details">
          <DropDownPicker
            selectedItem={selectedBrand}
            setSelectedItem={setSelectedBrand}
            options={carBrandsNameList}
            label="Brand"
            placeholder="Brand"
          />
          <DropDownPicker
            selectedItem={selectedModel}
            setSelectedItem={setSelectedModel}
            options={modelsNameList}
            label="Model"
            placeholder="Model"
          />
          <DropDownPicker
            selectedItem={selectedFuel}
            setSelectedItem={setSelectedFuel}
            options={FUEL}
            label="Fuel"
            placeholder="Fuel"
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
        <div ref={preferenceSection} className="slot-preference-section-slots">
          <h1 className="slot-preference-section-slots-heading">
            Share Your Preference
          </h1>
          <p className="slot-preference-section-slots-subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </p>
          <div className="slot-preference-section-slots-type">
            <div
              onClick={() => {
                setTypeOfCarWash("Exterior");
              }}
              className={
                "slot-preference-section-slots-type-button" +
                (typeOfCarWash === "Exterior" ? " selected" : "")
              }
            >
              <img src={CarWashIcon} alt="Exterior Car Cleaning" />
              <p>Exterior Car Wash</p>
            </div>
            <div
              onClick={() => {
                if (!exteriorWashSelectedSlot) {
                  alert("Please select a time slot for exterior car wash");
                  return;
                }
                setTypeOfCarWash("Interior");
              }}
              className={
                "slot-preference-section-slots-type-button" +
                (typeOfCarWash === "Interior" ? " selected" : "")
              }
            >
              <img src={CarWashIcon} alt="Interior Car Cleaning" />
              <p>Interior Car Wash</p>
            </div>
          </div>
          {typeOfCarWash === "Interior" ? (
            <>
              <div className="slot-preference-section-slots-date">
                <h1 className="slot-preference-section-slots-date-heading">
                  Select Date
                </h1>
                <div className="slot-preference-section-slots-date-container">
                  {WEEKDAY.map((day, index) => {
                    return (
                      <DateCard
                        key={index}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        day={day}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="slot-preference-section-slots-time">
            <h1 className="slot-preference-section-slots-time-heading">
              Select Time
            </h1>
            <div className="slot-preference-section-slots-time-container">
              {typeOfCarWash === "Interior"
                ? INTERIOR_TIME_SLOTS.map((slot, index) => (
                    <TimeCard
                      key={index}
                      selectedSlot={interiorWashSelectedSlot}
                      // setSelectedSlot={setInteriorWashSelectedSlot}
                      onClickHandle={() => {
                        setInteriorWashSelectedSlot(
                          `${slot.startTime}-${slot.endTime}`
                        );
                        gotoProceedToCheckoutButton();
                      }}
                      slotID={`${slot.startTime}-${slot.endTime}`}
                      startTime={slot.startTime}
                      endTime={slot.endTime}
                      availableSlots={slot.availableSlots}
                    />
                  ))
                : EXTERIOR_TIME_SLOTS.map((slot, index) => (
                    <TimeCard
                      key={index}
                      selectedSlot={exteriorWashSelectedSlot}
                      // setSelectedSlot={setExteriorWashSelectedSlot}
                      onClickHandle={() => {
                        setExteriorWashSelectedSlot(
                          `${slot.startTime}-${slot.endTime}`
                        );
                        setTypeOfCarWash("Interior");
                      }}
                      slotID={`${slot.startTime}-${slot.endTime}`}
                      startTime={slot.startTime}
                      endTime={slot.endTime}
                      availableSlots={slot.availableSlots}
                    />
                  ))}
            </div>
          </div>
          <div ref={proceedToCheckoutButton}>
            {exteriorWashSelectedSlot &&
            interiorWashSelectedSlot &&
            selectedDay ? (
              <div className="slot-preference-section-slots-CTA">
                <Button
                  onClick={() => {
                    handleOnClickProceedToPayment();
                  }}
                >
                  Proceed To Payment
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
