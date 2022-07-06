import React, { useState, createContext, useEffect } from "react";

const BASE_URL = "http://carwash.smartcarefoundation.com";

export const CarServiceDetailsContext = createContext();

export default function CarServiceDetailsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [carBrandsList, setCarBrandsList] = useState([]);
  const [carBrandsNameList, setCarBrandsNameList] = useState([]);
  const [bikeBrandsList, setBikeBrandsList] = useState([]);
  const [bikeBrandsNameList, setBikeBrandsNameList] = useState([]);
  const [allModelsList, setAllModelsList] = useState([]);
  const [modelsList, setModelsList] = useState([]);
  const [modelsNameList, setModelsNameList] = useState([]);
  const [OUR_SERVICES, setOUR_SERVICES] = useState([]);
  const [selectedService, setSelectedService] = useState("Daily Car Wash");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [planList, setPlanList] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedSegment, setSelectedSegment] = useState("");
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [vechicleNumber, setVechicleNumber] = useState("");
  const [cost, setCost] = useState(0);
  // --------------------------------------------------------------------
  useEffect(() => {
    // fetch(`${}http://carwash.smartcarefoundation.com/api/get_all_services`)
    fetch(`${BASE_URL}/api/get_all_services`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.services);
        setOUR_SERVICES(data.services);
        // Is loading is set false only after services are fetched because on the landing page services are visible but not brands and logos
        setIsLoading(false);
      })
      .catch((err) =>
        console.log("Error occured while loading services api", err)
      );

    fetch(`${BASE_URL}/api/get_all_brands`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.brands);
        setCarBrandsList(data.brands.filter((brand) => brand.type === "Car"));
        setBikeBrandsList(data.brands.filter((brand) => brand.type === "Bike"));
      })
      .catch((err) =>
        console.log("Error occured while loading Brands api", err)
      );

    fetch(`${BASE_URL}/api/get_all_modals`)
      .then((response) => response.json())
      .then((data) => {
        setAllModelsList(data.modal);
      })
      .catch((err) =>
        console.log("Error occured while loading all modals api", err)
      );
  }, []);

  useEffect(() => {
    setCarBrandsNameList(carBrandsList.map((brand) => brand.name));
  }, [carBrandsList]);

  useEffect(() => {
    var brandId;
    for (let brand of carBrandsList) {
      if (brand.name === selectedBrand) {
        brandId = brand.id;
        break;
      }
    }
    setSelectedBrandId(brandId);
    setSelectedModel(null);
    setModelsList(allModelsList.filter((model) => model.brand === brandId));
  }, [selectedBrand]);

  useEffect(() => {
    setModelsNameList(modelsList.map((model) => model.modal));
  }, [modelsList]);

  useEffect(() => {
    if (!selectedBrandId || !selectedModel) return;

    var modelId;
    for (let model of modelsList) {
      if (model.modal === selectedModel) {
        modelId = model.id;
        break;
      }
    }
    setSelectedModelId(modelId);

    let formData = new FormData();
    formData.append("brand_id", selectedBrandId);
    // here i have use variable modelId instead of state value selectedModelId because sometimes the state values may not update imediately which me result in unespected segmets. Hence i have used variable modelId
    formData.append("modal_id", modelId);

    const segmentRequestOptions = {
      method: "POST",
      body: formData,
    };

    fetch(`${BASE_URL}/api/get_segment`, segmentRequestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setSelectedSegment(data.segment[0].segment_name);
      })
      .catch((err) =>
        console.log("Error occured while fetching segment :", err)
      );
  }, [selectedModel]);

  useEffect(() => {
    if (!selectedModel || !selectedService) return;
    let formData = new FormData();
    formData.append("service_name", selectedService);
    formData.append("category", selectedServiceCategory);
    formData.append("segment", selectedSegment);
    const packageRequestOptions = {
      method: "POST",
      body: formData,
    };
    // console.log("service_name : ", selectedService);
    // console.log("category : ", selectedServiceCategory);
    // console.log("segment : ", selectedSegment);
    fetch(`${BASE_URL}/api/get_package`, packageRequestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.package) setPlanList(data.package);
        else setPlanList([]);
      })
      .catch((err) =>
        console.log("Error occured while fetching package :", err)
      );
  }, [selectedModel, selectedService, selectedSegment]);

  // --------------------------------------------------------------------
  return (
    <CarServiceDetailsContext.Provider
      value={{
        isLoading,
        carBrandsList,
        setCarBrandsList,
        carBrandsNameList,
        setCarBrandsNameList,
        bikeBrandsList,
        setBikeBrandsList,
        bikeBrandsNameList,
        setBikeBrandsNameList,
        allModelsList,
        setAllModelsList,
        modelsList,
        setModelsList,
        modelsNameList,
        setModelsNameList,
        OUR_SERVICES,
        setOUR_SERVICES,
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
        planList,
        setPlanList,
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
