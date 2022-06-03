import React, { useState, createContext } from "react";

const CURRENT_DATE = new Date();
export const CarWashServiceDetailsContext = createContext();

export default function CarWashServiceDetailsProvider({ children }) {
  const [typeOfCarWash, setTypeOfCarWash] = useState("Exterior");
  // const [selectedDate, setSelectedDate] = useState(
  //   `${CURRENT_DATE.getDate()}/${CURRENT_DATE.getMonth()}/${CURRENT_DATE.getFullYear()}`
  // );
  const [selectedDate, setSelectedDate] = useState(null);
  const [exteriorWashSelectedSlot, setExteriorWashSelectedSlot] =
    useState(null);
  const [interiorWashSelectedSlot, setInteriorWashSelectedSlot] =
    useState(null);
  return (
    <CarWashServiceDetailsContext.Provider
      value={{
        typeOfCarWash,
        setTypeOfCarWash,
        selectedDate,
        setSelectedDate,
        exteriorWashSelectedSlot,
        setExteriorWashSelectedSlot,
        interiorWashSelectedSlot,
        setInteriorWashSelectedSlot,
      }}
    >
      {children}
    </CarWashServiceDetailsContext.Provider>
  );
}
