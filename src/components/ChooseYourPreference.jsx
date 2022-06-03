import React, { useEffect, useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";

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
// -----------------------------------------------------------------------------------------
const CURRENT_DATE = new Date();

const RANGE0to6 = [0, 1, 2, 3, 4, 5, 6];

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

function DateCard({ day, date, selectedDate, setSelectedDate }) {
  return (
    <div
      className={"date-card" + (date === selectedDate ? " selected" : "")}
      onClick={() => {
        setSelectedDate(date);
      }}
    >
      <p className="date-card-day">{day}</p>
      <p className="date-card-date">{date}</p>
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
    selectedService,
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedSegment,
    setSelectedSegment,
    selectedFuel,
    setSelectedFuel,
    vechicleNumber,
    setVechicleNumber,
    cost,
  } = useContext(CarServiceDetailsContext);
  // const [typeOfCarWash, setTypeOfCarWash] = useState("Exterior");
  const {
    typeOfCarWash,
    setTypeOfCarWash,
    selectedDate,
    setSelectedDate,
    exteriorWashSelectedSlot,
    setExteriorWashSelectedSlot,
    interiorWashSelectedSlot,
    setInteriorWashSelectedSlot,
  } = useContext(CarWashServiceDetailsContext);

  const { cartItems, setCartItems } = useContext(CustomerDetailsContext);
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
  return (
    <>
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
            selectedItem={selectedFuel}
            setSelectedItem={setSelectedFuel}
            options={FUEL}
            label="Fuel"
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
                  {RANGE0to6.map((i, index) => {
                    var newDate = new Date();
                    newDate.setDate(CURRENT_DATE.getDate() + i);
                    return (
                      <DateCard
                        key={index}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        date={`${newDate.getDate()}/${
                          newDate.getMonth() + 1
                        }/${newDate.getFullYear()}`}
                        day={WEEKDAY[newDate.getDay()]}
                        // date={(CURRENT_DATE + i).getDate()}
                        // day={WEEKDAY[(CURRENT_DATE + i).getDay()]}
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
          {exteriorWashSelectedSlot &&
          interiorWashSelectedSlot &&
          selectedDate ? (
            <Link to="/payment" className="slot-preference-section-slots-CTA">
              <Button
                onClick={() => {
                  if (!selectedDate) {
                    alert("Please select a date");
                  } else if (
                    !exteriorWashSelectedSlot ||
                    !interiorWashSelectedSlot
                  ) {
                    alert("Please select a slot");
                  } else {
                    setCarDetailsCurrentStep(carDetailsCurrentStep + 1);
                    setCartItems([
                      ...cartItems,
                      {
                        brand: selectedBrand,
                        model: selectedModel,
                        vechicleNumber: vechicleNumber,
                        service: selectedService,
                        cost: cost,
                      },
                    ]);
                  }
                }}
              >
                Proceed To Payment
              </Button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
}
