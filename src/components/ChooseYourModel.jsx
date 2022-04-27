import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// ---------------------------------------------------------
import "../styles/components/ChooseYourModel.scss";
// ---------------------------------------------------------
import Audi from "../assets/icons/CarModels/Audi.svg";
import Hyundai from "../assets/icons/CarModels/Hyundai.svg";
import Kia from "../assets/icons/CarModels/Kia.svg";
import Porsche from "../assets/icons/CarModels/Porsche.svg";

// ---------------------------------------------------------
import SearchBar from "./SearchBar";
import { CarServiceDetailsContext } from "./Contexts/CarServiceDetailsProvider.jsx";
// ---------------------------------------------------------

const MODELS = [
  "Hyundai",
  "Honda",
  "Audi",
  "KIA",
  "Porsche",
  "Hyundai",
  "Honda",
  "Audi",
  "KIA",
  "Porsche",
  "Hyundai",
  "Honda",
  "Audi",
  "KIA",
  "Porsche",
  "Hyundai",
  "Honda",
  "Audi",
];

function ModelLogo({ modelName }) {
  switch (modelName) {
    case "Hyundai":
      return (
        <img
          className="model-list-card-logo"
          src={Hyundai}
          alt="Hundai Car Logo"
        />
      );
    case "Audi":
      return (
        <img
          className="model-list-card-logo"
          src={Audi}
          alt="Hundai Car Logo"
        />
      );
    case "KIA":
      return (
        <img className="model-list-card-logo" src={Kia} alt="Hundai Car Logo" />
      );
    case "Porsche":
      return (
        <img
          className="model-list-card-logo"
          src={Porsche}
          alt="Hundai Car Logo"
        />
      );
    default:
      return (
        <img
          className="model-list-card-logo"
          src={Audi}
          alt="Hundai Car Logo"
        />
      );
  }
}

function ModelCard({
  modelName,
  index,
  setSelectedModel,
  updateCurrentStep,
  currentStep,
}) {
  return (
    <button
      onClick={() => {
        setSelectedModel(modelName);
        updateCurrentStep(currentStep + 1);
      }}
      className="model-list-card"
    >
      <ModelLogo modelName={modelName} />
      <h4 className="model-list-card-name">{modelName}</h4>
    </button>
  );
}
// function ModelCard({
//   modelName,
//   index,
//   setSelectedModel,
//   updateCurrentStep,
//   currentStep,
// }) {
//   return (
//     <Link
//       to="/carWashPlans"
//       onClick={() => {
//         setSelectedModel(modelName);
//         updateCurrentStep(currentStep + 1);
//         console.log("current Step : ", currentStep);
//       }}
//       className="model-list-card"
//     >
//       <ModelLogo modelName={modelName} />
//       <h4 className="model-list-card-name">{modelName}</h4>
//     </Link>
//   );
// }

export default function ChooseYourModel({ updateCurrentStep, currentStep }) {
  const { setSelectedModel } = useContext(CarServiceDetailsContext);
  const [searchedModel, setSearchedModel] = useState("");
  const [searchResult, setSearchResult] = useState([]);
	useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (searchedModel === "") {
      setSearchResult([]);
      return;
    }
    let newSearchResultList = MODELS.filter((model) =>
      model.toLowerCase().startsWith(searchedModel.toLowerCase())
    );
    setSearchResult(newSearchResultList);
  }, [searchedModel]);
  return (
    <div className="choose-your-model">
      <h1 className="choose-your-model-heading">Choose your Model</h1>
      <SearchBar
        searchedItem={searchedModel}
        setSearchedItem={setSearchedModel}
      />
      <div className="model-list">
        {searchResult.length > 0 ? (
          searchResult.map((modelName, index) => (
            <ModelCard
              key={index}
              modelName={modelName}
              index={index}
              setSelectedModel={setSelectedModel}
              updateCurrentStep={updateCurrentStep}
              currentStep={currentStep}
            />
          ))
        ) : (
          <></>
        )}
        {searchResult.length > 0 ? (
          <div className="search-result-divider-line"></div>
        ) : (
          <></>
        )}
        {MODELS.map((modelName, index) => (
          <ModelCard
            key={index}
            modelName={modelName}
            index={index}
            setSelectedModel={setSelectedModel}
            updateCurrentStep={updateCurrentStep}
            currentStep={currentStep}
          />
        ))}
      </div>
    </div>
  );
}
