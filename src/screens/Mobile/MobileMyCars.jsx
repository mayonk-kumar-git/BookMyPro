import React, { useState, useContext } from "react";
// -----------------------------------------------------------
import "../../styles/screens/Mobile/MobileMyCars.scss";
// -----------------------------------------------------------
import InputBoxWithLabel from "../../components/InputBoxWithLabel";
import { CustomerDetailsContext } from "../../components/Contexts/CustomerDetailsProvider";
import DropDownPicker from "../../components/DropDownPicker";
// -----------------------------------------------------------
const BRANDS = [
  "Hyundai",
  "Maruti",
  "Audi",
  "KIA",
  "Porsche",
  "Mercedes",
  "Land Rover",
  "Hyundai",
  "Maruti",
  "Audi",
  "KIA",
  "Porsche",
  "Mercedes",
  "Land Rover",
  "Hyundai",
  "Maruti",
  "Audi",
  "KIA",
];

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

const FUEL = ["Petrol", "Disel", "CNG", "EV"];

export default function MobileMyCars() {
  const { customerCarsList, setCustomerCarsList } = useContext(
    CustomerDetailsContext
  );
  const [isCarAlreadySaved, setIsCarAlreadySaved] = useState(false);
  const [newCarNumber, setNewCarNumber] = useState("");
  const [newCarBrand, setNewCarBrand] = useState("");
  const [newCarModel, setNewCarModel] = useState("");
  const [newCarFuelType, setNewCarFuelType] = useState("");
  return (
    <div className="mobile-my-cars">
      <header className="mobile-my-cars-header">
        <div className="mobile-my-cars-header-back-button">
          <h1>{`<`}</h1>
        </div>
        <h1>My Cars</h1>
      </header>
      <section className="mobile-my-cars-add-new-car-section">
        <h1>Add new Car</h1>
        <InputBoxWithLabel
          input={newCarNumber}
          setInput={setNewCarNumber}
          label="Car Number"
          placeholder="Enter your car number"
        />
        <div className="mobile-my-cars-add-new-car-section-select-brand">
          <DropDownPicker
            selectedItem={newCarBrand}
            setSelectedItem={setNewCarBrand}
            options={BRANDS}
            label="Brand"
            placeholder="Select your car brand"
          />
        </div>
        <div className="mobile-my-cars-add-new-car-section-select-model">
          <DropDownPicker
            selectedItem={newCarModel}
            setSelectedItem={setNewCarModel}
            options={MODELS}
            label="Model"
            placeholder="Select your car Model"
          />
        </div>
        <div className="mobile-my-cars-add-new-car-section-select-fuel">
          <DropDownPicker
            selectedItem={newCarFuelType}
            setSelectedItem={setNewCarFuelType}
            options={FUEL}
            label="Fuel"
            placeholder="Select fuel type"
          />
        </div>
      </section>
    </div>
  );
}
