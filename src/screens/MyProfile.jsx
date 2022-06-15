import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// -----------------------------------------------------------------------
import "../styles/screens/MyProfile.scss";
// -----------------------------------------------------------------------
import Profile from "../assets/icons/NavBar/Profile.svg";
import DeleteIcon from "../assets/icons/MyProfile/DeleteIcon.svg";
import EditInputIcon from "../assets/icons/MyProfile/EditInputIcon.svg";
import AddAddressIcon from "../assets/icons/Payment/AddAddressIcon.svg";
// -----------------------------------------------------------------------
import { CustomerDetailsContext } from "../components/Contexts/CustomerDetailsProvider";
import InputBoxWithLabel from "../components/InputBoxWithLabel";
import Button from "../components/Button";
import AddNewAddressPopUp from "../components/AddNewAddressPopUp";
import Accordion from "../components/Accordion";
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

function ProfileSection({
  customerName,
  setCustomerName,
  contactNumber,
  setContactNumber,
  customerMailId,
  setCustomerMailId,
  newName,
  setNewName,
  newMailId,
  setNewMailId,
  newContactNumber,
  setNewContactNumber,
}) {
  return (
    <div className="profile-section">
      <h2 className="profile-section-heading">Profile</h2>
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
    </div>
  );
}

function AddressSection({
  isAddAddressPopupVisible,
  setIsAddAddressPopupVisible,
  customerAddressList,
  setCustomerAddressList,
  customerName,
  contactNumber,
  isEditAddress,
  setIsEditAddress,
  editAddressIndex,
  setEditAddressIndex,
}) {
  const handleDeleteAddress = (addressIndex) => {
    var newCustomerAddressList = customerAddressList;
    var deletedAddress = newCustomerAddressList.splice(addressIndex, 1);
    setCustomerAddressList([...newCustomerAddressList]);
  };
  const handleEditAddress = (addressIndex) => {
    setIsAddAddressPopupVisible(true);
    setIsEditAddress(true);
    setEditAddressIndex(addressIndex);
  };
  return (
    <>
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
                  <p>{customerName}</p>
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
                  <p>{contactNumber}</p>
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
                    handleDeleteAddress(index);
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
  customerName,
  setCustomerName,
  contactNumber,
  setContactNumber,
  customerMailId,
  setCustomerMailId,
  newName,
  setNewName,
  newMailId,
  setNewMailId,
  newContactNumber,
  setNewContactNumber,
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
          customerName={customerName}
          setCustomerName={setCustomerName}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
          customerMailId={customerMailId}
          setCustomerMailId={setCustomerMailId}
          newName={newName}
          setNewName={setNewName}
          newMailId={newMailId}
          setNewMailId={setNewMailId}
          newContactNumber={newContactNumber}
          setNewContactNumber={setNewContactNumber}
        />
      );
    }
    case "orders": {
      return <h1>orders</h1>;
    }
    case "myCars": {
      return <h1>my Cars</h1>;
    }
    case "myAddress": {
      return (
        <AddressSection
          isAddAddressPopupVisible={isAddAddressPopupVisible}
          setIsAddAddressPopupVisible={setIsAddAddressPopupVisible}
          customerAddressList={customerAddressList}
          setCustomerAddressList={setCustomerAddressList}
          customerName={customerName}
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
          customerName={customerName}
          setCustomerName={setCustomerName}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
          customerMailId={customerMailId}
          setCustomerMailId={setCustomerMailId}
          newName={newName}
          setNewName={setNewName}
          newMailId={newMailId}
          setNewMailId={setNewMailId}
          newContactNumber={newContactNumber}
          setNewContactNumber={setNewContactNumber}
        />
      );
    }
  }
}

export default function MyProfile() {
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
    customerOrderList,
    setCustomerOrderList,
    customerCurrentOrder,
    setCustomerCurrentOrder,
  } = useContext(CustomerDetailsContext);
  const [sectionInView, setSectionInView] = useState("profile");
  // --------------------------------------------------------
  const [newName, setNewName] = useState(customerName);
  const [newMailId, setNewMailId] = useState(customerMailId);
  const [newContactNumber, setNewContactNumber] = useState(contactNumber);
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
            <h3>{customerName}</h3>
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
            customerName={customerName}
            setCustomerName={setCustomerName}
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
            newName={newName}
            setNewName={setNewName}
            newMailId={newMailId}
            setNewMailId={setNewMailId}
            newContactNumber={newContactNumber}
            setNewContactNumber={setNewContactNumber}
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
