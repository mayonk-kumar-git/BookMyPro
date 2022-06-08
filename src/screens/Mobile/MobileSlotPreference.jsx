import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// -----------------------------------------------------
import "../../styles/screens/Mobile/MobileSlotPreference.scss";
// -----------------------------------------------------
import CarWashIcon from "../../assets/icons/Mobile/MobileSlotPreferences/CarWashIcon.svg";
// -----------------------------------------------------
import { CarServiceDetailsContext } from "../../components/Contexts/CarServiceDetailsProvider";
import { CarWashServiceDetailsContext } from "../../components/Contexts/CarWashServiceDetailsProvider";
import { CustomerDetailsContext } from "../../components/Contexts/CustomerDetailsProvider";
import MobileLogIn from "../../components/Mobile/MobileLogIn";
import Button from "../../components/Button";
// -----------------------------------------------------

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

const WEEKDAY = ["Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"];

function DayCard({ day, selectedDay, setSelectedDay }) {
  return (
    <div
      className={"mobile-day-card" + (day === selectedDay ? " selected" : "")}
      onClick={() => {
        setSelectedDay(day);
      }}
    >
      <p className="mobile-day-card-day">{day}</p>
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
      className={"mobile-time-card" + (slotID === selectedSlot ? " selected" : "")}
      onClick={() => onClickHandle()}
    >
      <p className="mobile-time-card-time">{`${startTime} - ${endTime}`}</p>
      <p className="mobile-time-card-slots">{`${availableSlots} Slots Available`}</p>
    </div>
  );
}

export default function MobileSlotPreference() {
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
  const {
    selectedService,
    selectedBrand,
    selectedModel,
    vechicleNumber,
    cost,
  } = useContext(CarServiceDetailsContext);
  const { isCustomerLoggedIn, cartItems, setCartItems } = useContext(
    CustomerDetailsContext
  );
  const [isLogInPopUpVisible, setIsLogInPopUpVisible] = useState(false);
  const navigate = useNavigate();
  // --------------------------------------------------------------------------
  const handleOnClickProceedToPayment = () => {
    if (!isCustomerLoggedIn) {
      setIsLogInPopUpVisible(true);
    } else {
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
      navigate("/payment");
    }
  };
  // --------------------------------------------------------------------------
  return (
    <>
      {isLogInPopUpVisible ? (
        <MobileLogIn
          onLogIn={() => {
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
            navigate("/payment");
          }}
          setIsPopUpVisible={setIsLogInPopUpVisible}
        />
      ) : (
        <></>
      )}
      <div className="mobile-slot-preference">
        <header className="mobile-slot-preference-header">
          <div
            className="mobile-slot-preference-header-back-button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <h1>{`<`}</h1>
          </div>
          <h1>{`${typeOfCarWash} Wash Timing`}</h1>
        </header>
        <section className="mobile-slot-preference-section">
          <h2 className="heading">Share your preference</h2>
          <div className="mobile-slot-preference-section-slots-type">
            <div
              onClick={() => {
                setTypeOfCarWash("Exterior");
              }}
              className={
                "mobile-slot-preference-section-slots-type-button" +
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
                "mobile-slot-preference-section-slots-type-button" +
                (typeOfCarWash === "Interior" ? " selected" : "")
              }
            >
              <img src={CarWashIcon} alt="Interior Car Cleaning" />
              <p>Interior Car Wash</p>
            </div>
          </div>
          {typeOfCarWash === "Interior" ? (
            <>
              <div className="mobile-slot-preference-section-slots-date">
                <h1 className="mobile-slot-preference-section-slots-date-heading">
                  Select Date
                </h1>
                <div className="mobile-slot-preference-section-slots-date-container">
                  {WEEKDAY.map((day, index) => {
                    return (
                      <DayCard
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

          <div className="mobile-slot-preference-section-slots-time">
            <h1 className="mobile-slot-preference-section-slots-time-heading">
              Select Time
            </h1>
            <div className="mobile-slot-preference-section-slots-time-container">
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
          selectedDay ? (
            <div className="mobile-slot-preference-section-slots-CTA">
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
        </section>
      </div>
    </>
  );
}
