import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// -----------------------------------------------------------------------
import "../styles/screens/MyProfile.scss";
// -----------------------------------------------------------------------
import Profile from "../assets/icons/NavBar/Profile.svg";
import DeleteIcon from "../assets/icons/MyProfile/DeleteIcon.svg";
import EditInputIcon from "../assets/icons/MyProfile/EditInputIcon.svg";
import AddAddressIcon from "../assets/icons/Payment/AddAddressIcon.svg";
import AddCarIcon from "../assets/icons/AddCarIcon.png";

// -----------------------------------------------------------------------
import { CustomerDetailsContext } from "../components/Contexts/CustomerDetailsProvider";
import InputBoxWithLabel from "../components/InputBoxWithLabel";
import Button from "../components/Button";
import AddNewAddressPopUp from "../components/AddNewAddressPopUp";
import Accordion from "../components/Accordion";
import DropDownPicker from "../components/DropDownPicker";
import { CarServiceDetailsContext } from "../components/Contexts/CarServiceDetailsProvider";
import ConfirmationPopUp from "../components/ConfirmationPopUp";
// -----------------------------------------------------------------------

const FAQS = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus, pretium sit leo ullamcorper faucibus duis. Dignissim dui quisque mattis turpis vivamus erat bibendum. Massa libero, egestas bibendum nulla ultricies lacus, iaculis. Imperdiet mauris ac lacus dis vitae magna.",
  },
];
const FUEL = ["Petrol", "Diesel", "CNG", "EV"];

function ProfileSection({
  customerFirstName,
  setCustomerFirstName,
  customerLastName,
  setCustomerLastName,
  contactNumber,
  setContactNumber,
  customerMailId,
  setCustomerMailId,
}) {
  // --------------------------------------------------------
  const [newCustomerFirstName, setNewCustomerFirstName] =
    useState(customerFirstName);
  const [newCustomerLastName, setNewCustomerLastName] =
    useState(customerLastName);
  const [newMailId, setNewMailId] = useState(customerMailId);
  const [newContactNumber, setNewContactNumber] = useState(contactNumber);
  // --------------------------------------------------------
  return (
    <div className="profile-section">
      <h2 className="profile-section-heading">Profile</h2>
      <div className="profile-section-name-input-container">
        <InputBoxWithLabel
          input={newCustomerFirstName}
          setInput={setNewCustomerFirstName}
          label="First Name"
          placeholder="First Name"
        />
        <InputBoxWithLabel
          input={newCustomerLastName}
          setInput={setNewCustomerLastName}
          label="Last Name"
          placeholder="Last Name"
        />
      </div>
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
          setCustomerFirstName(newCustomerFirstName);
          setCustomerLastName(newCustomerLastName);
          setCustomerMailId(newMailId);
          setContactNumber(newContactNumber);
        }}
      >
        Save
      </Button>
    </div>
  );
}

function AddNewCar({
  // setIsAddNewCarPopUpVisible,
  isEdit = false,
  editIndex = 0,
  setIsEdit = () => {
    console.log("setIsEdit is not passed as a parameter");
  },
}) {
  const { customerCarsList, setCustomerCarsList } = useContext(
    CustomerDetailsContext
  );
  const { carBrandsNameList, modelsNameList, setSelectedBrand } = useContext(
    CarServiceDetailsContext
  );
  // ---------------------------------------------------
  const [isCarAlreadySaved, setIsCarAlreadySaved] = useState(false);
  const [newCarNumber, setNewCarNumber] = useState("");
  const [newCarBrand, setNewCarBrand] = useState("");
  const [newCarModel, setNewCarModel] = useState("");
  const [newCarFuelType, setNewCarFuelType] = useState("");
  // ---------------------------------------------------
  useEffect(() => {
    if (!isEdit) return;

    const { carBrand, carModel, carNumber, carFuelType } =
      customerCarsList[editIndex];
    setNewCarNumber(carNumber);
    setNewCarBrand(carBrand);
    setNewCarModel(carModel);
    setNewCarFuelType(carFuelType);
  }, [isEdit, editIndex]);
  useEffect(() => {
    var carAlreadySaved = false;
    customerCarsList.forEach((car, index) => {
      // we have added a check of (index !== editIndex) because while editing the car number of the currently being edited car matches with itself in the customerCarsList and shows warning "*A car with ..." so as to avoid this unnecessary warning we have added this check
      if (index !== editIndex && car.carNumber.trim() === newCarNumber.trim()) {
        carAlreadySaved = true;
      }
    });
    if (carAlreadySaved) {
      setIsCarAlreadySaved(true);
    } else {
      setIsCarAlreadySaved(false);
    }
  }, [newCarNumber]);
  // ---------------------------------------------------
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
        carNumber: newCarNumber.trim(),
        carFuelType: newCarFuelType,
      },
    ];
    setCustomerCarsList([...newCustomerCarsList]);
    setIsCarAlreadySaved(false);
    setNewCarNumber("");
    setNewCarBrand("");
    setNewCarModel("");
    setNewCarFuelType("");
    // setIsAddNewCarPopUpVisible(false);
  };

  const handleOnClickSave = () => {
    var newCustomerCarsList = customerCarsList;
    newCustomerCarsList[editIndex] = {
      carBrand: newCarBrand,
      carModel: newCarModel,
      carNumber: newCarNumber.trim(),
      carFuelType: newCarFuelType,
    };
    setCustomerCarsList([...newCustomerCarsList]);
    setIsCarAlreadySaved(false);
    setIsEdit(false);
    // setEditIndex(null);
    setNewCarNumber("");
    setNewCarBrand("");
    setNewCarModel("");
    setNewCarFuelType("");
    // setIsAddNewCarPopUpVisible(false);
  };
  const handleOnClickCancle = () => {
    setIsCarAlreadySaved(false);
    setIsEdit(false);
    // setEditIndex(null);
    setNewCarNumber("");
    setNewCarBrand("");
    setNewCarModel("");
    setNewCarFuelType("");
    // setIsAddNewCarPopUpVisible(false);
  };

  const GetFormButton = () => {
    if (isEdit) {
      if (isCarAlreadySaved) {
        return (
          <>
            <Button buttonSize="large" buttonStyle="disabled">
              Save
            </Button>
            <div className="cancle-button">
              <p
                onClick={() => {
                  handleOnClickCancle();
                }}
              >
                Cancle
              </p>
            </div>
          </>
        );
      } else {
        return (
          <>
            <Button
              buttonSize="large"
              onClick={() => {
                handleOnClickSave();
              }}
            >
              Save
            </Button>
            <div className="cancle-button">
              <p
                onClick={() => {
                  handleOnClickCancle();
                }}
              >
                Cancle
              </p>
            </div>
          </>
        );
      }
    } else {
      if (isCarAlreadySaved) {
        return (
          <>
            <Button buttonSize="large" buttonStyle="disabled">
              Add
            </Button>
            {/* this dummy button is added just for the ui purpose  */}
            <div className="hidden-cancle-button">
              <p
                onClick={() => {
                  handleOnClickCancle();
                }}
              >
                {" . "}
              </p>
            </div>
          </>
        );
      } else {
        return (
          <>
            <Button
              buttonSize="large"
              onClick={() => {
                handleOnClickAddCar();
              }}
            >
              Add
            </Button>
            <div className="hidden-cancle-button">
              <p
                onClick={() => {
                  handleOnClickCancle();
                }}
              >
                {" ."}
              </p>
            </div>
          </>
        );
      }
    }
  };
  // ---------------------------------------------------
  return (
    <section className="profile-add-new-car-section">
      {isEdit ? <h1>Edit car details</h1> : <h1>Add new Car</h1>}
      <div className="input-fields">
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
        <div className="profile-add-new-car-section-select-model">
          <DropDownPicker
            selectedItem={newCarModel}
            setSelectedItem={setNewCarModel}
            options={modelsNameList}
            label="Model"
            placeholder="Select your car Model"
            emptyOptionsListMessage="*Select a Brand first"
          />
        </div>
        <div className="profile-add-new-car-section-select-brand">
          <DropDownPicker
            selectedItem={newCarBrand}
            // We are passing a function because we want both the newCarBrand and selected car brand to get updated when ever we change the car brand. we want selected car brand to be updated because our modelList only gets updated when we change our selectedBrand
            setSelectedItem={(brand) => {
              setSelectedBrand(brand);
              setNewCarBrand(brand);
            }}
            options={carBrandsNameList}
            label="Brand"
            placeholder="Select your car brand"
          />
        </div>
        <div className="profile-add-new-car-section-select-fuel">
          <DropDownPicker
            selectedItem={newCarFuelType}
            setSelectedItem={setNewCarFuelType}
            options={FUEL}
            label="Fuel"
            placeholder="Select fuel type"
          />
        </div>
      </div>
      <div className="button-container">
        <GetFormButton />
      </div>
    </section>
  );
}

function MyCarsSection() {
  const { customerCarsList, setCustomerCarsList } = useContext(
    CustomerDetailsContext
  );
  const [isEditCar, setIsEditCar] = useState(false);
  const [editCarIndex, setEditCarIndex] = useState(null);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [deleteCarIndex, setDeleteCarIndex] = useState(null);
  // const [isAddNewCarPopUpVisible, setIsAddNewCarPopUpVisible] = useState(false);
  // ---------------------------------------------------

  const handleDeleteCar = () => {
    var newCustomerCarsList = customerCarsList;
    var deletedCar = newCustomerCarsList.splice(deleteCarIndex, 1);
    setCustomerCarsList([...newCustomerCarsList]);
  };
  const handleEditCar = (carIndex) => {
    // setIsAddNewCarPopUpVisible(true);
    setIsEditCar(true);
    setEditCarIndex(carIndex);
  };
  // ---------------------------------------------------
  return (
    <>
      {/* {isAddNewCarPopUpVisible ? (
        <AddNewCarPopUp
          setIsAddNewCarPopUpVisible={setIsAddNewCarPopUpVisible}
          isEdit={isEditCar}
          editIndex={editCarIndex}
          setIsEdit={setIsEditCar}
        />
      ) : (
        <></>
      )} */}
      {isDeleteConfirmationVisible ? (
        <ConfirmationPopUp
          isConfirmationPopUpVisible={isDeleteConfirmationVisible}
          setIsConfirmationPopUpVisible={setIsDeleteConfirmationVisible}
          confirmationButtonStyle="danger-solid"
          confirmButtonText="Remove"
          onClickConfirmButton={handleDeleteCar}
        >
          Do you want to remove this Car?
        </ConfirmationPopUp>
      ) : (
        <></>
      )}
      <div className="profile-my-cars-section">
        <h1>My Cars</h1>
        <AddNewCar
          // setIsAddNewCarPopUpVisible={setIsAddNewCarPopUpVisible}
          isEdit={isEditCar}
          editIndex={editCarIndex}
          setIsEdit={setIsEditCar}
        />
        {/* <div
          className="profile-my-cars-section-add-car"
          onClick={() => {
            setIsAddNewCarPopUpVisible(true);
          }}
        >
          <img src={AddCarIcon} alt="Add car" />
          <p>Add new car</p>
        </div> */}
        {customerCarsList.length > 0 ? <h3>Saved Cars</h3> : <></>}
        {customerCarsList &&
          customerCarsList.map((car, index) => {
            const { carBrand, carModel, carNumber, carFuelType } = car;
            return (
              <div
                key={index}
                className="profile-my-cars-section-saved-car-box"
              >
                <div className="profile-my-cars-section-saved-car-box-details">
                  <p>{`${carBrand} | ${carModel}`}</p>
                  <p>{`${carNumber} |  ${carFuelType}`}</p>
                </div>
                <div
                  className="profile-my-cars-section-saved-car-box-edit"
                  onClick={() => {
                    handleEditCar(index);
                  }}
                >
                  <img src={EditInputIcon} alt="Edit" />
                </div>
                <div
                  className="profile-my-cars-section-saved-car-box-delete"
                  onClick={() => {
                    setDeleteCarIndex(index);
                    setIsDeleteConfirmationVisible(true);
                  }}
                >
                  <img src={DeleteIcon} alt="Delete" />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

function AddressSection({
  isAddAddressPopupVisible,
  setIsAddAddressPopupVisible,
  customerAddressList,
  setCustomerAddressList,
  customerFirstName,
  customerLastName,
  contactNumber,
  isEditAddress,
  setIsEditAddress,
  editAddressIndex,
  setEditAddressIndex,
}) {
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [deleteAddressIndex, setDeleteAddressIndex] = useState(null);
  // -----------------------------------------------------
  const handleDeleteAddress = () => {
    var newCustomerAddressList = customerAddressList;
    var deletedAddress = newCustomerAddressList.splice(deleteAddressIndex, 1);
    setCustomerAddressList([...newCustomerAddressList]);
  };
  const handleEditAddress = (addressIndex) => {
    setIsAddAddressPopupVisible(true);
    setIsEditAddress(true);
    setEditAddressIndex(addressIndex);
  };
  // -----------------------------------------------------
  return (
    <>
      {isDeleteConfirmationVisible ? (
        <ConfirmationPopUp
          isConfirmationPopUpVisible={isDeleteConfirmationVisible}
          setIsConfirmationPopUpVisible={setIsDeleteConfirmationVisible}
          confirmationButtonStyle="danger-solid"
          confirmButtonText="Remove"
          onClickConfirmButton={handleDeleteAddress}
        >
          Do you want to remove this address?
        </ConfirmationPopUp>
      ) : (
        <></>
      )}
      {isAddAddressPopupVisible ? (
        <AddNewAddressPopUp
          setIsAddAddressPopupVisible={setIsAddAddressPopupVisible}
          isEdit={isEditAddress}
          editIndex={editAddressIndex}
          setIsEditAddress={setIsEditAddress}
        />
      ) : (
        <></>
      )}
      <div className="profile-address-section">
        <h2 className="profile-address-section-heading">My Address</h2>
        <div
          className="profile-address-section-add-address"
          onClick={() => {
            setIsAddAddressPopupVisible(true);
          }}
        >
          <img src={AddAddressIcon} alt="Add location" />
          <p>Add a Service address</p>
        </div>
        {customerAddressList &&
          customerAddressList.map((savedAddress, index) => {
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
            } = savedAddress;
            return (
              <div
                key={index}
                className="profile-address-section-saved-address-box"
              >
                <div className="profile-address-section-saved-address-box-details">
                  <p>{`${customerFirstName} ${customerLastName}`}</p>
                  {isSociety ? (
                    <>
                      <p>{`${society}, ${tower}, ${houseNumber}`}</p>
                      <p>{`parking : ${parkingFloor}, ${parkingNumber}`}</p>
                    </>
                  ) : (
                    <>
                      <p>{addressLine1}</p>
                      <p>{addressLine2}</p>
                    </>
                  )}
                  <p>{`${pin}, ${area}, ${state}`}</p>
                  <p>{`Contact : ${contactNumber}`}</p>
                </div>
                <div
                  className="profile-address-section-saved-address-box-edit"
                  onClick={() => {
                    handleEditAddress(index);
                  }}
                >
                  <img src={EditInputIcon} alt="Edit" />
                </div>
                <div
                  className="profile-address-section-saved-address-box-delete"
                  onClick={() => {
                    // handleDeleteAddress(index);
                    setDeleteAddressIndex(index);
                    setIsDeleteConfirmationVisible(true);
                  }}
                >
                  <img src={DeleteIcon} alt="Delete" />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

function MySubscriptionsSection() {
  return (
    <div className="my-subscriptions-section">
      <h2 className="my-subscriptions-section-heading">My Subscriptions</h2>
    </div>
  );
}

function FAQSection() {
  return (
    <div className="faq-section">
      <h2 className="faq-section-heading">FAQ</h2>
      {FAQS.map((faq, index) => (
        <Accordion key={index} title={faq.question} description={faq.answer} />
      ))}
    </div>
  );
}

function SupportSection() {
  const handleOnClickMailTo = () => {
    window.location = "mailto:ftoitechnologies@gmail.com";
  };
  const handleOnClickPhoneCallTo = () => {
    window.open("tel:9876543210");
  };

  return (
    <div className="support-section">
      <h2 className="support-section-heading">Support</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus,
        pretium sit leo ullamcorper faucibus duis.
      </p>
      <div
        className="contact"
        onClick={() => {
          handleOnClickMailTo();
        }}
      >
        <p>ftoitechnologies@gmail.com</p>
      </div>
      <div
        className="contact"
        onClick={() => {
          handleOnClickPhoneCallTo();
        }}
      >
        <p>9876543210</p>
      </div>
    </div>
  );
}

function DisplaySectionInView({
  sectionInView,
  customerFirstName,
  setCustomerFirstName,
  customerLastName,
  setCustomerLastName,
  contactNumber,
  setContactNumber,
  customerMailId,
  setCustomerMailId,
  cartItems,
  setCartItems,
  customerAddressList,
  setCustomerAddressList,
  customerOrderList,
  setCustomerOrderList,
  customerCurrentOrder,
  setCustomerCurrentOrder,
  isAddAddressPopupVisible,
  setIsAddAddressPopupVisible,
  isEditAddress,
  setIsEditAddress,
  editAddressIndex,
  setEditAddressIndex,
}) {
  switch (sectionInView) {
    case "profile": {
      return (
        <ProfileSection
          customerFirstName={customerFirstName}
          setCustomerFirstName={setCustomerFirstName}
          customerLastName={customerLastName}
          setCustomerLastName={setCustomerLastName}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
          customerMailId={customerMailId}
          setCustomerMailId={setCustomerMailId}
        />
      );
    }
    case "orders": {
      return <h1>orders</h1>;
    }
    case "myCars": {
      return <MyCarsSection />;
    }
    case "myAddress": {
      return (
        <AddressSection
          isAddAddressPopupVisible={isAddAddressPopupVisible}
          setIsAddAddressPopupVisible={setIsAddAddressPopupVisible}
          customerAddressList={customerAddressList}
          setCustomerAddressList={setCustomerAddressList}
          customerFirstName={customerFirstName}
          customerLastName={customerLastName}
          contactNumber={contactNumber}
          isEditAddress={isEditAddress}
          setIsEditAddress={setIsEditAddress}
          editAddressIndex={editAddressIndex}
          setEditAddressIndex={setEditAddressIndex}
        />
      );
    }
    case "mySubscriptions": {
      return <MySubscriptionsSection />;
    }
    case "faq": {
      return <FAQSection />;
    }
    case "support": {
      return <SupportSection />;
    }
    default: {
      return (
        <ProfileSection
          customerFirstName={customerFirstName}
          setCustomerFirstName={setCustomerFirstName}
          customerLastName={customerLastName}
          setCustomerLastName={setCustomerLastName}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
          customerMailId={customerMailId}
          setCustomerMailId={setCustomerMailId}
        />
      );
    }
  }
}

export default function MyProfile() {
  const {
    customerFirstName,
    setCustomerFirstName,
    customerLastName,
    setCustomerLastName,
    contactNumber,
    setContactNumber,
    customerMailId,
    setCustomerMailId,
    cartItems,
    setCartItems,
    customerAddressList,
    setCustomerAddressList,
    customerOrderList,
    setCustomerOrderList,
    customerCurrentOrder,
    setCustomerCurrentOrder,
  } = useContext(CustomerDetailsContext);
  const [sectionInView, setSectionInView] = useState("profile");
  // --------------------------------------------------------
  const [isAddAddressPopupVisible, setIsAddAddressPopupVisible] =
    useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);
  const [editAddressIndex, setEditAddressIndex] = useState(0);
  const location = useLocation();
  // --------------------------------------------------------
  useEffect(() => {
    if (location.state && location.state.routedFrom === "navBar") {
      setSectionInView("mySubscriptions");
    } else {
      setSectionInView("profile");
    }
  }, [location]);

  // --------------------------------------------------------
  return (
    <>
      <section className="my-profile-section">
        <div className="my-profile-section-left">
          <div className="my-profile-section-left-header">
            <img src={Profile} alt="profile icon" />
            <h3>{`${customerFirstName} ${customerLastName}`}</h3>
          </div>
          <div
            className="my-profile-section-left-btn"
            onClick={() => {
              setSectionInView("profile");
            }}
          >
            <p className={sectionInView === "profile" ? "selected" : ""}>
              Profile
            </p>
          </div>
          <div
            className="my-profile-section-left-btn"
            onClick={() => {
              setSectionInView("orders");
            }}
          >
            <p className={sectionInView === "orders" ? "selected" : ""}>
              Orders
            </p>
          </div>
          <div
            className="my-profile-section-left-btn"
            onClick={() => {
              setSectionInView("myCars");
            }}
          >
            <p className={sectionInView === "myCars" ? "selected" : ""}>
              My Cars
            </p>
          </div>
          <div
            className="my-profile-section-left-btn"
            onClick={() => {
              setSectionInView("myAddress");
            }}
          >
            <p className={sectionInView === "myAddress" ? "selected" : ""}>
              My Address
            </p>
          </div>
          <div
            className="my-profile-section-left-btn"
            onClick={() => {
              setSectionInView("mySubscriptions");
            }}
          >
            <p
              className={sectionInView === "mySubscriptions" ? "selected" : ""}
            >
              My Subscriptions
            </p>
          </div>
          <div
            className="my-profile-section-left-btn"
            onClick={() => {
              setSectionInView("faq");
            }}
          >
            <p className={sectionInView === "faq" ? "selected" : ""}>FAQ</p>
          </div>
          <div
            className="my-profile-section-left-btn"
            onClick={() => {
              setSectionInView("support");
            }}
          >
            <p className={sectionInView === "support" ? "selected" : ""}>
              Support
            </p>
          </div>
        </div>
        <div className="my-profile-section-right">
          <DisplaySectionInView
            sectionInView={sectionInView}
            customerFirstName={customerFirstName}
            setCustomerFirstName={setCustomerFirstName}
            customerLastName={customerLastName}
            setCustomerLastName={setCustomerLastName}
            contactNumber={contactNumber}
            setContactNumber={setContactNumber}
            customerMailId={customerMailId}
            setCustomerMailId={setCustomerMailId}
            cartItems={cartItems}
            setCartItems={setCartItems}
            customerAddressList={customerAddressList}
            setCustomerAddressList={setCustomerAddressList}
            customerOrderList={customerOrderList}
            setCustomerOrderList={setCustomerOrderList}
            customerCurrentOrder={customerCurrentOrder}
            setCustomerCurrentOrder={setCustomerCurrentOrder}
            isAddAddressPopupVisible={isAddAddressPopupVisible}
            setIsAddAddressPopupVisible={setIsAddAddressPopupVisible}
            isEditAddress={isEditAddress}
            setIsEditAddress={setIsEditAddress}
            editAddressIndex={editAddressIndex}
            setEditAddressIndex={setEditAddressIndex}
          />
        </div>
      </section>
    </>
  );
}
