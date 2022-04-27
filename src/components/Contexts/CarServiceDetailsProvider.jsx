import React, { useState, createContext } from "react";

export const CarServiceDetailsContext = createContext();

export default function CarServiceDetailsProvider({ children }) {
  const [selectedService, setSelectedService] = useState("Daily Car Wash");
  const [selectedBrand, setSelectedBrand] = useState("Brand");
  const [selectedModel, setSelectedModel] = useState("Model");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState("Fuel");
  return (
    <CarServiceDetailsContext.Provider
      value={{
        selectedService,
        setSelectedService,
        selectedBrand,
        setSelectedBrand,
        selectedModel,
        setSelectedModel,
        selectedFuel,
        setSelectedFuel,
        selectedPackage,
        setSelectedPackage,
      }}
    >
      {children}
    </CarServiceDetailsContext.Provider>
  );
}
