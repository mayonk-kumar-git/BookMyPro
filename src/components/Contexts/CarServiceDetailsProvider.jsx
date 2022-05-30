import React, { useState, createContext } from "react";

export const CarServiceDetailsContext = createContext();

export default function CarServiceDetailsProvider({ children }) {
  const [selectedService, setSelectedService] = useState("Daily Car Wash");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedSegment, setSelectedSegment] = useState("");
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [vechicleNumber, setVechicleNumber] = useState("");
  const [cost, setCost] = useState(0);
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
        vechicleNumber,
        setVechicleNumber,
        cost,
        setCost,
      }}
    >
      {children}
    </CarServiceDetailsContext.Provider>
  );
}
