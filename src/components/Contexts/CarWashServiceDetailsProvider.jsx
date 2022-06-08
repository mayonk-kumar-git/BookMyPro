import React, { useState, createContext } from "react";

export const CarWashServiceDetailsContext = createContext();

export default function CarWashServiceDetailsProvider({ children }) {
  const [typeOfCarWash, setTypeOfCarWash] = useState("Exterior");
  const [selectedDay, setSelectedDay] = useState(null);
  const [exteriorWashSelectedSlot, setExteriorWashSelectedSlot] =
    useState(null);
  const [interiorWashSelectedSlot, setInteriorWashSelectedSlot] =
    useState(null);
  return (
    <CarWashServiceDetailsContext.Provider
      value={{
        typeOfCarWash,
        setTypeOfCarWash,
        selectedDay,
        setSelectedDay,
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
