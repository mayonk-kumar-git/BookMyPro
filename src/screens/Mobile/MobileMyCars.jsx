import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// -----------------------------------------------------------
import "../../styles/screens/Mobile/MobileMyCars.scss";
// -----------------------------------------------------------
import CarImage from "../../assets/images/Mobile/MobileMyCarsScreen/CarImage.svg";
// -----------------------------------------------------------
import InputBoxWithLabel from "../../components/InputBoxWithLabel";
import { CustomerDetailsContext } from "../../components/Contexts/CustomerDetailsProvider";
import { CarServiceDetailsContext } from "../../components/Contexts/CarServiceDetailsProvider";
import DropDownPicker from "../../components/DropDownPicker";
import Button from "../../components/Button";
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

const FUEL = ["Petrol", "Diesel", "CNG", "EV"];

function CarCard({
  brand,
  model,
  carNumber,
  fuel,
  setSelectedBrand,
  setSelectedModel,
  setVechicleNumber,
  setSelectedFuel,
  navigate,
}) {
  const handleOnClickSelect = () => {
    setSelectedBrand(brand);
    setSelectedModel(model);
    setVechicleNumber(carNumber);
    setSelectedFuel(fuel);
    navigate("/subscriptions");
  };
  // ----------------------------------------------------------------
  return (
    <div className="car-card">
      <div className="car-card-left">
        <img src={CarImage} alt="car" />
        <div className="car-details">
          <p>
            <strong>{`${brand} ${model}`}</strong>
          </p>
          <p>{`${carNumber} | ${fuel}`}</p>
        </div>
      </div>
      <div className="select-button" onClick={() => handleOnClickSelect()}>
        <p>Select</p>
      </div>
    </div>
  );
}

export default function MobileMyCars() {
  const { customerCarsList, setCustomerCarsList } = useContext(
    CustomerDetailsContext
  );
  const {
    setSelectedBrand,
    setSelectedModel,
    setSelectedFuel,
    setVechicleNumber,
  } = useContext(CarServiceDetailsContext);
  const [isCarAlreadySaved, setIsCarAlreadySaved] = useState(false);
  const [newCarNumber, setNewCarNumber] = useState("");
  const [newCarBrand, setNewCarBrand] = useState("");
  const [newCarModel, setNewCarModel] = useState("");
  const [newCarFuelType, setNewCarFuelType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    var carAlreadySaved = false;
    customerCarsList.forEach((car) => {
      if (car.carNumber.trim() === newCarNumber.trim()) {
        // console.log("i am here");
        carAlreadySaved = true;
      }
    });
    if (carAlreadySaved) {
      setIsCarAlreadySaved(true);
    } else {
      setIsCarAlreadySaved(false);
    }
  }, [newCarNumber]);

  // --------------------------------------------------------------
  const handleOnClickAddCar = () => {
    if (
      newCarNumber === "" ||
      newCarBrand === "" ||
      newCarModel === "" ||
      newCarFuelType === ""
    ) {
      alert("Please enter all the details of the car to add new car");
      return;
    }

    if (newCarNumber.length < 8) {
      alert("Please enter a valid car number");
      return;
    }

    const newCustomerCarsList = [
      ...customerCarsList,
      {
        carBrand: newCarBrand,
        carModel: newCarModel,
        carNumber: newCarNumber,
        carFuelType: newCarFuelType,
      },
    ];
    setCustomerCarsList([...newCustomerCarsList]);
    setSelectedBrand(newCarBrand);
    setSelectedModel(newCarModel);
    setVechicleNumber(newCarNumber);
    setSelectedFuel(newCarFuelType);
    navigate("/subscriptions");
    setIsCarAlreadySaved(false);
    setNewCarNumber("");
    setNewCarBrand("");
    setNewCarModel("");
    setNewCarFuelType("");
  };
  // --------------------------------------------------------------

  return (
    <div className="mobile-my-cars">
      <header className="mobile-my-cars-header">
        <div
          className="mobile-my-cars-header-back-button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <h2>{`<`}</h2>
        </div>
        <h2>My Cars</h2>
      </header>
      <section className="mobile-my-cars-add-new-car-section">
        <h1>Add new Car</h1>
        <div>
          <InputBoxWithLabel
            input={newCarNumber}
            setInput={setNewCarNumber}
            label="Car Number"
            placeholder="Enter your car number"
          />
          {isCarAlreadySaved ? (
            <>
              <p className="car-number-warning">
                *A car with this number is already saved
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
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
        {isCarAlreadySaved ? (
          <Button buttonStyle="disabled">Add</Button>
        ) : (
          <Button
            onClick={() => {
              handleOnClickAddCar();
            }}
          >
            Add
          </Button>
        )}
      </section>
      {customerCarsList.length > 0 ? (
        <section className="mobile-my-cars-saved-cars-section">
          <h1>Select from your saved cars</h1>
          {customerCarsList.map((car, index) => (
            <CarCard
              key={index}
              brand={car.carBrand}
              model={car.carModel}
              carNumber={car.carNumber}
              fuel={car.carFuelType}
              setSelectedBrand={setSelectedBrand}
              setSelectedModel={setSelectedModel}
              setVechicleNumber={setVechicleNumber}
              setSelectedFuel={setSelectedFuel}
              navigate={navigate}
            />
          ))}
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}
