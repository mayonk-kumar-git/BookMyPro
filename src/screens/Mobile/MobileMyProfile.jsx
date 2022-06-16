import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// --------------------------------------------------------
import "../../styles/screens/Mobile/MobileMyProfile.scss";

// --------------------------------------------------------
import Profile from "../../assets/icons/Mobile/MobileNavBar/Profile.svg";
import EditPenIcon from "../../assets/icons/EditPenIcon.svg";
import DeleteIcon from "../../assets/icons/DeleteIcon.svg";
import DownArrowHeadBlue from "../../assets/icons/DownArrowHeadBlue.svg";
import RightArrowHeadBlue from "../../assets/icons/RightArrowHeadBlue.svg";
import LeftArrowHeadBlue from "../../assets/icons/LeftArrowHeadBlue.svg";
import CarImage from "../../assets/images/Mobile/MobileMyCarsScreen/CarImage.svg";
import CirclePlusIcon from "../../assets/icons/CirclePlusIcon.svg";
// --------------------------------------------------------
import { CustomerDetailsContext } from "../../components/Contexts/CustomerDetailsProvider";
import Button from "../../components/Button";
import InputBoxWithLabel from "../../components/InputBoxWithLabel";
import DropDownPicker from "../../components/DropDownPicker";
import MobileConfirmationPopUp from "../../components/Mobile/MobileConfirmationPopUp";
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

function EditUserProfile({
  setIsEditUserProfileVisible,
  customerName,
  setCustomerName,
  contactNumber,
  setContactNumber,
  customerMailId,
  setCustomerMailId,
}) {
  // --------------------------------------------------------
  const [newName, setNewName] = useState(customerName);
  const [newMailId, setNewMailId] = useState(customerMailId);
  const [newContactNumber, setNewContactNumber] = useState(contactNumber);
  // --------------------------------------------------------
  return (
    <>
      <div className="mobile-profile-edit-user-profile">
        <div
          className="close-button"
          onClick={() => {
            setIsEditUserProfileVisible(false);
          }}
        >
          <p>x</p>
        </div>
        <section className="mobile-profile-edit-user-profile-input-section">
          <h2>Edit Profile</h2>
          <InputBoxWithLabel
            input={newName}
            setInput={setNewName}
            label="Name"
            placeholder="Enter Your Name"
          />
          <InputBoxWithLabel
            input={newMailId}
            setInput={setNewMailId}
            label="Mail"
            placeholder="Enter Your Mail Id"
          />
          <InputBoxWithLabel
            prefix="+91"
            input={newContactNumber}
            setInput={setNewContactNumber}
            label="Contact Number"
            placeholder="Enter Your contact number"
          />
          <Button
            buttonSize="large"
            onClick={() => {
              setCustomerName(newName);
              setCustomerMailId(newMailId);
              setContactNumber(newContactNumber);
            }}
          >
            Save
          </Button>
        </section>
      </div>
    </>
  );
}

function AddressBox({
  address,
  index,
  setIsAddressDeleteConfirmationPopUpVisible,
  setIndexOfToBeDeletedAddress,
}) {
  const {
    isSociety,
    society,
    houseNumber,
    tower,
    parkingNumber,
    parkingFloor,
    addressLine1,
    addressLine2,
    pin,
    area,
    state,
  } = address;
  // --------------------------------------------------------
  const handleOnClickDelete = () => {
    setIsAddressDeleteConfirmationPopUpVisible(true);
    setIndexOfToBeDeletedAddress(index);
  };
  // --------------------------------------------------------
  return (
    <div className="mobile-profile-address-box">
      <div className="mobile-profile-address-box-details">
        {isSociety ? (
          <>
            <p>{`Society: ${society}, Tower: ${tower}, House No.: ${houseNumber}`}</p>
            <p>{`Parking: ${parkingFloor}, ${parkingNumber}`}</p>
          </>
        ) : (
          <>
            <p>{addressLine1}</p>
            <p>{addressLine2}</p>
          </>
        )}
        <p>{`${pin}, ${area}, ${state}`}</p>
      </div>
      <div className="button-container">
        <img src={EditPenIcon} alt="edit" />
        <img
          src={DeleteIcon}
          alt="edit"
          onClick={() => {
            handleOnClickDelete();
          }}
        />
      </div>
    </div>
  );
}

function MyAddress({
  setIsMyAddressVisible,
  customerAddressList,
  setCustomerAddressList,
  setIsAddressDeleteConfirmationPopUpVisible,
  setIndexOfToBeDeletedAddress,
}) {
  const [newIsSociety, setNewIsSociety] = useState("");
  const [newSociety, setNewSociety] = useState("");
  const [newHouseNumber, setNewHouseNumber] = useState("");
  const [newTower, setNewTower] = useState("");
  const [newParkingNumber, setNewParkingNumber] = useState("");
  const [newParkingFloor, setNewParkingFloor] = useState("");
  const [newAddressLine1, setNewAddressLine1] = useState("");
  const [newAddressLine2, setNewAddressLine2] = useState("");
  const [newPin, setNewPin] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newState, setNewState] = useState("");

  const [isAddAddressInputVisible, setIsAddAddressInputVisible] =
    useState(false);

  useEffect(() => {
    //This if conditon is used so that the state hook values are not changed back to empty strings even in case of editing
    setNewIsSociety(true);
    setNewSociety("");
    setNewHouseNumber("");
    setNewTower("");
    setNewParkingNumber("");
    setNewParkingFloor("");
    setNewAddressLine1("");
    setNewAddressLine2("");
    setNewPin("");
    setNewArea("");
    setNewState("");
  }, [customerAddressList]);
  return (
    <div className="mobile-profile-my-address">
      <div
        className="close-popup"
        onClick={() => {
          setIsMyAddressVisible(false);
        }}
      >
        <p>x</p>
      </div>
      <div className="saved-address-container">
        <div className="saved-address">
          {customerAddressList.length > 0 ? (
            <>
              <h2>My saved addresses</h2>
              {customerAddressList.map((address, index) => (
                <AddressBox
                  key={index}
                  index={index}
                  address={address}
                  setIsAddressDeleteConfirmationPopUpVisible={
                    setIsAddressDeleteConfirmationPopUpVisible
                  }
                  setIndexOfToBeDeletedAddress={setIndexOfToBeDeletedAddress}
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        <div
          className="add-new-address-button"
          onClick={() => {
            setIsAddAddressInputVisible(true);
          }}
        >
          <img src={CirclePlusIcon} alt="" />
          <p>Add new Address</p>
        </div>
      </div>
      <div
        className={
          "mobile-address-pop-up" +
          (isAddAddressInputVisible ? " show" : " hide")
        }
      >
        <div
          className="close-popup"
          onClick={() => {
            setIsAddAddressInputVisible(false);
          }}
        >
          <p>x</p>
        </div>
        <div className="mobile-profile-my-address-pop-up-address-type">
          <p>I live in a </p>
          <p
            className={"btn" + (newIsSociety ? " selected" : "")}
            onClick={() => {
              setNewIsSociety(true);
            }}
          >
            Society
          </p>
          <p
            className={"btn" + (newIsSociety ? "" : " selected")}
            onClick={() => {
              setNewIsSociety(false);
            }}
          >
            Open Area
          </p>
        </div>
        {newIsSociety ? (
          <>
            <InputBoxWithLabel
              input={newSociety}
              setInput={setNewSociety}
              label="Society Name"
              placeholder="Enter Society Name"
            />
            <InputBoxWithLabel
              input={newTower}
              setInput={setNewTower}
              label="Tower Name / Number"
              placeholder="Enter Tower Name or Number"
            />
            <InputBoxWithLabel
              input={newHouseNumber}
              setInput={setNewHouseNumber}
              label="House Number"
              placeholder="Enter House Number"
            />
            <InputBoxWithLabel
              input={newParkingFloor}
              setInput={setNewParkingFloor}
              label="Parking Floor"
              placeholder="Enter Parking Floor"
            />
            <InputBoxWithLabel
              input={newParkingNumber}
              setInput={setNewParkingNumber}
              label="Parking Number"
              placeholder="Enter Parking Number"
            />
          </>
        ) : (
          <>
            <InputBoxWithLabel
              input={newAddressLine1}
              setInput={setNewAddressLine1}
              label="Address Line 1"
              placeholder="Enter Address"
            />
            <InputBoxWithLabel
              input={newAddressLine2}
              setInput={setNewAddressLine2}
              label="Address Line 2"
              placeholder="Enter Address"
            />
          </>
        )}
        <InputBoxWithLabel
          input={newPin}
          setInput={setNewPin}
          label="PIN code"
          placeholder="Enter your PIN code"
        />
        <InputBoxWithLabel
          input={newArea}
          setInput={setNewArea}
          label="Area"
          placeholder="Enter Area"
        />
        <InputBoxWithLabel
          input={newState}
          setInput={setNewState}
          label="State"
          placeholder="Enter State Name"
        />
        <Button
          onClick={() => {
            if (
              (newIsSociety &&
                (!newSociety ||
                  !newHouseNumber ||
                  !newHouseNumber ||
                  !newTower ||
                  !newParkingNumber ||
                  !newParkingFloor)) ||
              (!newIsSociety && !newAddressLine1) ||
              !newPin ||
              !newArea ||
              !newState
            ) {
              alert("Please enter all the data fields");
              return;
            }
            const newAddress = {
              isSociety: newIsSociety,
              society: newSociety,
              houseNumber: newHouseNumber,
              tower: newTower,
              parkingNumber: newParkingNumber,
              parkingFloor: newParkingFloor,
              addressLine1: newAddressLine1,
              addressLine2: newAddressLine2,
              pin: newPin,
              area: newArea,
              state: newState,
            };
            const newCustomerAddressList = [...customerAddressList, newAddress];
            setCustomerAddressList([...newCustomerAddressList]);
            setIsAddAddressInputVisible(false);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

function VehicleCard({
  index,
  brand,
  model,
  carNumber,
  fuel,
  setIsVehicleDeleteConfirmationPopUpVisible,
  setIndexOfToBeDeletedVehicle,
}) {
  // ----------------------------------------------------------------
  const handleOnClickDelete = () => {
    setIsVehicleDeleteConfirmationPopUpVisible(true);
    setIndexOfToBeDeletedVehicle(index);
  };
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
        <img
          src={DeleteIcon}
          alt="edit"
          onClick={() => {
            handleOnClickDelete();
          }}
        />
      </div>
    </div>
  );
}

function MyVehicles({
  setIsMyVehicleVisible,
  customerCarsList,
  setCustomerCarsList,
  setIsVehicleDeleteConfirmationPopUpVisible,
  setIndexOfToBeDeletedVehicle,
}) {
  // -------------------------------------------------------
  const [isCarAlreadySaved, setIsCarAlreadySaved] = useState(false);
  const [newCarNumber, setNewCarNumber] = useState("");
  const [newCarBrand, setNewCarBrand] = useState("");
  const [newCarModel, setNewCarModel] = useState("");
  const [newCarFuelType, setNewCarFuelType] = useState("");
  // -------------------------------------------------------
  useEffect(() => {
    var carAlreadySaved = false;
    customerCarsList.forEach((car) => {
      if (car.carNumber.trim() === newCarNumber.trim()) {
        carAlreadySaved = true;
      }
    });
    if (carAlreadySaved) {
      setIsCarAlreadySaved(true);
    } else {
      setIsCarAlreadySaved(false);
    }
  }, [newCarNumber]);
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
              index={index}
              brand={car.carBrand}
              model={car.carModel}
              carNumber={car.carNumber}
              fuel={car.carFuelType}
              setIsVehicleDeleteConfirmationPopUpVisible={
                setIsVehicleDeleteConfirmationPopUpVisible
              }
              setIndexOfToBeDeletedVehicle={setIndexOfToBeDeletedVehicle}
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
    customerAddressList,
    setCustomerAddressList,
    customerCarsList,
    setCustomerCarsList,
  } = useContext(CustomerDetailsContext);
  const navigate = useNavigate();
  const [isEditUserProfileVisible, setIsEditUserProfileVisible] =
    useState(false);
  const [isMyVehicleVisible, setIsMyVehicleVisible] = useState(false);
  const [isMyAddressVisible, setIsMyAddressVisible] = useState(false);
  const [isHelpAndSupportVisible, setIsHelpAndSupportVisible] = useState(false);
  const [
    isAddressDeleteConfirmationPopUpVisible,
    setIsAddressDeleteConfirmationPopUpVisible,
  ] = useState(false);
  const [indexOfToBeDeletedAddress, setIndexOfToBeDeletedAddress] =
    useState(null);
  const [
    isVehicleDeleteConfirmationPopUpVisible,
    setIsVehicleDeleteConfirmationPopUpVisible,
  ] = useState(false);
  const [indexOfToBeDeletedVehicle, setIndexOfToBeDeletedVehicle] =
    useState(null);

  // ------------------------------------------------------
  // ------------------------------------------------------
  const removeAddress = () => {
    var newCustomerAddressList = customerAddressList;
    var deletedAddress = newCustomerAddressList.splice(
      indexOfToBeDeletedAddress,
      1
    );
    setCustomerAddressList([...newCustomerAddressList]);
  };
  const removeVehicle = () => {
    var newCustomerCarsList = customerCarsList;
    var deletedVehicle = newCustomerCarsList.splice(
      indexOfToBeDeletedVehicle,
      1
    );
    setCustomerAddressList([...newCustomerCarsList]);
  };

  // ------------------------------------------------------
  return (
    <>
      <MobileConfirmationPopUp
        isConfirmationPopUpVisible={isAddressDeleteConfirmationPopUpVisible}
        setIsConfirmationPopUpVisible={
          setIsAddressDeleteConfirmationPopUpVisible
        }
        confirmationButtonStyle="danger-solid"
        confirmButtonText="Remove"
        onClickConfirmButton={removeAddress}
      >
        Do you want to remove this address?
      </MobileConfirmationPopUp>
      <MobileConfirmationPopUp
        isConfirmationPopUpVisible={isVehicleDeleteConfirmationPopUpVisible}
        setIsConfirmationPopUpVisible={
          setIsVehicleDeleteConfirmationPopUpVisible
        }
        confirmationButtonStyle="danger-solid"
        confirmButtonText="Remove"
        onClickConfirmButton={removeVehicle}
      >
        Do you want to remove this vehicle?
      </MobileConfirmationPopUp>
      {isMyVehicleVisible ? (
        <MyVehicles
          setIsMyVehicleVisible={setIsMyVehicleVisible}
          customerCarsList={customerCarsList}
          setCustomerCarsList={setCustomerCarsList}
          setIsVehicleDeleteConfirmationPopUpVisible={
            setIsVehicleDeleteConfirmationPopUpVisible
          }
          setIndexOfToBeDeletedVehicle={setIndexOfToBeDeletedVehicle}
        />
      ) : (
        <></>
      )}
      {isEditUserProfileVisible ? (
        <EditUserProfile
          setIsEditUserProfileVisible={setIsEditUserProfileVisible}
          customerName={customerName}
          setCustomerName={setCustomerName}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
          customerMailId={customerMailId}
          setCustomerMailId={setCustomerMailId}
        />
      ) : (
        <></>
      )}
      {isMyAddressVisible ? (
        <MyAddress
          setIsMyAddressVisible={setIsMyAddressVisible}
          customerAddressList={customerAddressList}
          setCustomerAddressList={setCustomerAddressList}
          setIsAddressDeleteConfirmationPopUpVisible={
            setIsAddressDeleteConfirmationPopUpVisible
          }
          setIndexOfToBeDeletedAddress={setIndexOfToBeDeletedAddress}
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
            {/* <h2>{`<`}</h2> */}
            <img src={LeftArrowHeadBlue} alt="<" />
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
          <div
            className="edit-button"
            onClick={() => {
              setIsEditUserProfileVisible(true);
            }}
          >
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
                <img src={RightArrowHeadBlue} alt=">" />
              )}
            </header>
          </div>
          <div className="details-btn">
            <header
              onClick={() => {
                setIsMyAddressVisible(true);
              }}
            >
              <p>My Address</p>
              <img src={RightArrowHeadBlue} alt="" />
            </header>
          </div>
          <div className="details-btn">
            <header>
              <p>Refer and Earn</p>
              <img src={RightArrowHeadBlue} alt="" />
            </header>
          </div>
          <div className="details-btn">
            <header>
              <p>Help & Support</p>
              <img src={RightArrowHeadBlue} alt="" />
            </header>
          </div>
          <div className="details-btn">
            <header>
              <p>Legal Information</p>
              <img src={RightArrowHeadBlue} alt="" />
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
