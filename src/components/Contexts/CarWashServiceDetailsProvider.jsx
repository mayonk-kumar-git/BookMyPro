import React, { useState, createContext } from "react";

const CURRENT_DATE = new Date();
export const CarWashServiceDetailsContext = createContext();

export default function CarWashServiceDetailsProvider({ children }) {
  const [typeOfCarWash, setTypeOfCarWash] = useState("Exterior");
  // const [selectedDate, setSelectedDate] = useState(
  //   `${CURRENT_DATE.getDate()}/${CURRENT_DATE.getMonth()}/${CURRENT_DATE.getFullYear()}`
  // );
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  return (
    <CarWashServiceDetailsContext.Provider
      value={{
        typeOfCarWash,
        setTypeOfCarWash,
        selectedDate,
        setSelectedDate,
        selectedSlot,
        setSelectedSlot,
      }}
    >
      {children}
    </CarWashServiceDetailsContext.Provider>
  );
}
