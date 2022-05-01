import React, { useState, createContext } from "react";

export const CarServiceDetailsContext = createContext();

export default function CarServiceDetailsProvider({ children }) {
  const [selectedService, setSelectedService] = useState("Daily Car Wash");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedSegment, setSelectedSegment] = useState(null);
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
        selectedSegment,
        setSelectedSegment,
      }}
    >
      {children}
    </CarServiceDetailsContext.Provider>
  );
}
