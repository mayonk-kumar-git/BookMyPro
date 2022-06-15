import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// --------------------------------------------------------
import "../../styles/screens/Mobile/MobileMyProfile.scss";

// --------------------------------------------------------
import Profile from "../../assets/icons/Mobile/MobileNavBar/Profile.svg";
import EditPenIcon from "../../assets/icons/EditPenIcon.svg";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";
import DownArrowHeadBlue from "../../assets/icons/DownArrowHeadBlue.svg";
import LeftArrowHeadBlue from "../../assets/icons/LeftArrowHeadBlue.svg";
import CarImage from "../../assets/images/Mobile/MobileMyCarsScreen/CarImage.svg";
// --------------------------------------------------------
import { CustomerDetailsContext } from "../../components/Contexts/CustomerDetailsProvider";
import Button from "../../components/Button";
import InputBoxWithLabel from "../../components/InputBoxWithLabel";
import DropDownPicker from "../../components/DropDownPicker";
// --------------------------------------------------------

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



function VehicleCard({ brand, model, carNumber, fuel }) {
  // ----------------------------------------------------------------
  return (
    <div className="vehicle-card">
      <div className="vehicle-card-left">
        <img src={CarImage} alt="car" />
        <div className="vehicle-details">
          <p>
            <strong>{`${brand} ${model}`}</strong>
          </p>
          <p>{`${carNumber} | ${fuel}`}</p>
        </div>
      </div>
      <div className="button-container">
        <img src={EditPenIcon} alt="edit" />
        <img src={DeleteIcon} alt="edit" />
      </div>
    </div>
  );
}

function MyVehicles({
  setIsMyVehicleVisible,
  newCarNumber,
  setNewCarNumber,
  isCarAlreadySaved,
  newCarBrand,
  setNewCarBrand,
  newCarModel,
  setNewCarModel,
  newCarFuelType,
  setNewCarFuelType,
  customerCarsList,
  setCustomerCarsList,
  setIsCarAlreadySaved,
}) {
  // -------------------------------------------------------
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
    setIsCarAlreadySaved(false);
    setNewCarNumber("");
    setNewCarBrand("");
    setNewCarModel("");
    setNewCarFuelType("");
  };
  // -------------------------------------------------------
  return (
    <div className="mobile-profile-my-vehicles">
      <div
        className="close-button"
        onClick={() => {
          setIsMyVehicleVisible(false);
        }}
      >
        <p>x</p>
      </div>
      <section className="mobile-profile-my-vehicles-add-new-car-section">
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
        <div className="mobile-profile-my-vehicles-add-new-car-section-select-brand">
          <DropDownPicker
            selectedItem={newCarBrand}
            setSelectedItem={setNewCarBrand}
            options={BRANDS}
            label="Brand"
            placeholder="Select your car brand"
          />
        </div>
        <div className="mobile-profile-my-vehicles-add-new-car-section-select-model">
          <DropDownPicker
            selectedItem={newCarModel}
            setSelectedItem={setNewCarModel}
            options={MODELS}
            label="Model"
            placeholder="Select your car Model"
          />
        </div>
        <div className="mobile-profile-my-vehicles-add-new-car-section-select-fuel">
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
          <h1>Saved Cars</h1>
          {customerCarsList.map((car, index) => (
            <VehicleCard
              key={index}
              brand={car.carBrand}
              model={car.carModel}
              carNumber={car.carNumber}
              fuel={car.carFuelType}
            />
          ))}
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function MobileMyProfile() {
  const {
    customerName,
    setCustomerName,
    contactNumber,
    setContactNumber,
    customerMailId,
    setCustomerMailId,
    cartItems,
    setCartItems,
    customerAddressList,
    setCustomerAddressList,
    customerCarsList,
    setCustomerCarsList,
  } = useContext(CustomerDetailsContext);
  const navigate = useNavigate();
  const [isCarAlreadySaved, setIsCarAlreadySaved] = useState(false);
  const [newCarNumber, setNewCarNumber] = useState("");
  const [newCarBrand, setNewCarBrand] = useState("");
  const [newCarModel, setNewCarModel] = useState("");
  const [newCarFuelType, setNewCarFuelType] = useState("");
  const [isMyVehicleVisible, setIsMyVehicleVisible] = useState(false);
  const [isMyAddressVisible, setIsMyAddressVisible] = useState(false);
  const [isHelpAndSupportVisible, setIsHelpAndSupportVisible] = useState(false);

  // ------------------------------------------------------

  // ------------------------------------------------------
  return (
    <>
      {isMyVehicleVisible ? (
        <MyVehicles
          setIsMyVehicleVisible={setIsMyVehicleVisible}
          newCarNumber={newCarNumber}
          setNewCarNumber={setNewCarNumber}
          isCarAlreadySaved={isCarAlreadySaved}
          newCarBrand={newCarBrand}
          setNewCarBrand={setNewCarBrand}
          newCarModel={newCarModel}
          setNewCarModel={setNewCarModel}
          newCarFuelType={newCarFuelType}
          setNewCarFuelType={setNewCarFuelType}
          customerCarsList={customerCarsList}
          setCustomerCarsList={setCustomerCarsList}
          setIsCarAlreadySaved={setIsCarAlreadySaved}
        />
      ) : (
        <></>
      )}
      <div className="mobile-my-profile">
        <header className="mobile-my-profile-header">
          <div
            className="mobile-my-cars-header-back-button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <h2>{`<`}</h2>
          </div>
          <h2>My Profile</h2>
        </header>
        <div className="mobile-my-profile-user-brief">
          <div className="user-info">
            <img src={Profile} alt="user" />
            <div className="user-info-text">
              <h3>{customerName}</h3>
              <p>{contactNumber}</p>
            </div>
          </div>
          <div className="edit-button">
            <img src={EditPenIcon} alt="" />
          </div>
        </div>
        <div className="mobile-my-profile-user-details">
          <div className="details-btn">
            <header
              onClick={() => {
                setIsMyVehicleVisible(true);
              }}
            >
              <p>My Vechile</p>
              {isMyVehicleVisible ? (
                <img src={DownArrowHeadBlue} alt="v" />
              ) : (
                <img src={LeftArrowHeadBlue} alt=">" />
              )}
            </header>
          </div>
          <div className="details-btn">
            <header>
              <p>My Address</p>
              <img src={LeftArrowHeadBlue} alt="" />
            </header>
          </div>
          <div className="details-btn">
            <header>
              <p>Refer and Earn</p>
              <img src={LeftArrowHeadBlue} alt="" />
            </header>
          </div>
          <div className="details-btn">
            <header>
              <p>Help & Support</p>
              <img src={LeftArrowHeadBlue} alt="" />
            </header>
          </div>
          <div className="details-btn">
            <header>
              <p>Legal Information</p>
              <img src={LeftArrowHeadBlue} alt="" />
            </header>
          </div>
        </div>
        <div className="log-out-button">
          <Button buttonSize="large">Log Out</Button>
        </div>
      </div>
    </>
  );
}
