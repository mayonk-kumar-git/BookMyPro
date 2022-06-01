import React, { useContext, useState } from "react";
// -----------------------------------------------------------------------
import "../styles/screens/MyProfile.scss";
// -----------------------------------------------------------------------
import Profile from "../assets/icons/NavBar/Profile.svg";
import PlusIcon from "../assets/icons/MyProfile/PlusIcon.svg";
import MinusIcon from "../assets/icons/MyProfile/MinusIcon.svg";

// -----------------------------------------------------------------------
import { CustomerDetailsContext } from "../components/Contexts/CustomerDetailsProvider";
import InputBoxWithLabel from "../components/InputBoxWithLabel";
import Button from "../components/Button";
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

function FAQSection() {
  return (
    <div className="faq-section">
      <h2 className="faq-section-heading">FAQ</h2>
      {FAQS.map((faq, index) => (
        <div key={index} className="faq-section-item">
          <div className="faq-section-item-question">
            <p>{faq.question}</p>
            <img src={MinusIcon} alt="-" />
          </div>
          <div className="faq-section-item-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SupportSection() {
  return (
    <div className="support-section">
      <h2 className="support-section-heading">Support</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus,
        pretium sit leo ullamcorper faucibus duis.
      </p>
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
      return <h1>my Address</h1>;
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
          />
        </div>
      </section>
    </>
  );
}
