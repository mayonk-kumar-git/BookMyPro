import React, { useState, createContext } from "react";

export const CarServiceDetailsContext = createContext();

export default function CarServiceDetailsProvider({ children }) {
  const [selectedBrand, setSelectedBrand] = useState("Brand");
  const [selectedModel, setSelectedModel] = useState("Model");
  const [selectedService, setSelectedService] = useState("Sevice");
  const [selectedFuel, setSelectedFuel] = useState("Fuel");
  return (
    <CarServiceDetailsContext.Provider
      value={{
        selectedBrand,
        setSelectedBrand,
        selectedModel,
        setSelectedModel,
        selectedService,
        setSelectedService,
        selectedFuel,
        setSelectedFuel,
      }}
    >
      {children}
    </CarServiceDetailsContext.Provider>
  );
}
