import React, { useState, createContext, useEffect } from "react";

export const CarServiceDetailsContext = createContext();

export default function CarServiceDetailsProvider({ children }) {
  const [OUR_SERVICES, setOUR_SERVICES] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState("Daily Car Wash");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedSegment, setSelectedSegment] = useState("");
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [vechicleNumber, setVechicleNumber] = useState("");
  const [cost, setCost] = useState(0);
  // --------------------------------------------------------------------
  useEffect(() => {
    fetch("http://carwash.smartcarefoundation.com/api/get_all_services")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.serices);
        setOUR_SERVICES(data.serices);
        setIsLoading(false);
      })
      .catch((err) =>
        console.log("Error occured while loading services api", err)
      );
  }, []);

  // --------------------------------------------------------------------
  return (
    <CarServiceDetailsContext.Provider
      value={{
        OUR_SERVICES,
        setOUR_SERVICES,
        isLoading,
        setIsLoading,
        selectedService,
        setSelectedService,
        selectedServiceCategory,
        setSelectedServiceCategory,
        selectedBrand,
        setSelectedBrand,
        selectedModel,
        setSelectedModel,
        selectedFuel,
        setSelectedFuel,
        selectedPlan,
        setSelectedPlan,
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
