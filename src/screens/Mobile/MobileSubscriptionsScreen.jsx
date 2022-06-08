import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// -----------------------------------------------------------
import "../../styles/screens/Mobile/MobileSubscriptionScreen.scss";
// -----------------------------------------------------------
import SubscriptionScreenBanner from "../../assets/images/Mobile/MobileServiceSubscriptionScreen/SubscriptionScreenBanner.svg";
// -----------------------------------------------------------
import { CarServiceDetailsContext } from "../../components/Contexts/CarServiceDetailsProvider";
import Button from "../../components/Button";
// -----------------------------------------------------------

const SUBSCRIPTION_PACKAGES = [
  {
    isBestSeller: false,
    title: "30 Days Wash Plan",
    originalPrice: "799",
    discountedPrice: "699",
    brifDescription: "Get 26 Exterior & 4 Internal Car Washes a Month",
    fullDescription: [
      "Waterless car washes & microfiber cleaners",
      "Industry Grade Car Shiner & Dust Removable Solution",
      "26 Days - Exterior Wash & 4 Days - Interior Wash",
      "Cleaners Take Rest Day On Monday",
      "Cleaners Take Rest Day On Monday",
    ],
  },
  {
    isBestSeller: true,
    title: "45 Days Wash Plan",
    originalPrice: "899",
    discountedPrice: "799",
    brifDescription: "Get 26 Exterior & 4 Internal Car Washes a Month",
    fullDescription: [
      "Waterless car washes & microfiber cleaners",
      "Industry Grade Car Shiner & Dust Removable Solution",
      "26 Days - Exterior Wash & 4 Days - Interior Wash",
      "Cleaners Take Rest Day On Monday",
      "Cleaners Take Rest Day On Monday",
    ],
  },
  {
    isBestSeller: false,
    title: "60 Days Wash Plan",
    originalPrice: "999",
    discountedPrice: "899",
    brifDescription: "Get 26 Exterior & 4 Internal Car Washes a Month",
    fullDescription: [
      "Waterless car washes & microfiber cleaners",
      "Industry Grade Car Shiner & Dust Removable Solution",
      "26 Days - Exterior Wash & 4 Days - Interior Wash",
      "Cleaners Take Rest Day On Monday",
      "Cleaners Take Rest Day On Monday",
    ],
  },
  {
    isBestSeller: false,
    title: "120 Days Wash Plan",
    originalPrice: "1099",
    discountedPrice: "999",
    brifDescription: "Get 26 Exterior & 4 Internal Car Washes a Month",
    fullDescription: [
      "Waterless car washes & microfiber cleaners",
      "Industry Grade Car Shiner & Dust Removable Solution",
      "26 Days - Exterior Wash & 4 Days - Interior Wash",
      "Cleaners Take Rest Day On Monday",
      "Cleaners Take Rest Day On Monday",
    ],
  },
];

function ConfirmationPopUp({
  confirmationPopUpMessage,
  navigate,
  setIsPopUpConfirmationVisible,
  setSelectedPackage,
}) {
  const { packageName, packageDescription } = confirmationPopUpMessage;
  return (
    <div className="confirmation">
      <div className="confirmation-pop-up">
        <div
          className="close-pop-up-button"
          onClick={() => {
            setIsPopUpConfirmationVisible(false);
          }}
        >
          <h1>x</h1>
        </div>
        <h3 className="heading">
          Do you want to continue with <span>{packageName}</span>
        </h3>
        <p className="subheading">This plan includes the following services</p>
        <ul className="services-list">
          {packageDescription.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <Button
          onClick={() => {
            setSelectedPackage(packageName);
            navigate("/preferences");
            setIsPopUpConfirmationVisible(false);
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

function SubscriptionCard({
  isBestSeller,
  title,
  originalPrice,
  discountedPrice,
  brifDescription,
  fullDescription,
  setConfirmationPopUpMessage,
  setIsPopUpConfirmationVisible,
}) {
  return (
    <div className={"package-card" + (isBestSeller ? " best-seller" : "")}>
      {isBestSeller ? <p className="best-seller-badge">Best Seller</p> : <></>}
      <div className="package-info">
        <h3 className="package-info-heading">
          {`${title} for `}
          <span className="original-price">₹{originalPrice}</span>
          <span className="discounted-price">{` ₹${discountedPrice}`}</span>
        </h3>
        <p>{brifDescription}</p>
      </div>
      <div
        className="select-button"
        onClick={() => {
          setIsPopUpConfirmationVisible(true);
          setConfirmationPopUpMessage({
            packageName: title,
            packageDescription: fullDescription,
          });
        }}
      >
        <p>Select</p>
      </div>
    </div>
  );
}

export default function MobileSubscriptionsScreen() {
  const { selectedService, setSelectedPackage } = useContext(
    CarServiceDetailsContext
  );
  const navigate = useNavigate();
  const [isPopUpConfirmationVisible, setIsPopUpConfirmationVisible] =
    useState(false);
  const [confirmationPopUpMessage, setConfirmationPopUpMessage] = useState({
    packageName: "",
    packageDescription: [],
  });
  return (
    <>
      {isPopUpConfirmationVisible ? (
        <ConfirmationPopUp
          navigate={navigate}
          confirmationPopUpMessage={confirmationPopUpMessage}
          setIsPopUpConfirmationVisible={setIsPopUpConfirmationVisible}
          setSelectedPackage={setSelectedPackage}
        />
      ) : (
        <></>
      )}
      <div className="mobile-service-subscriptions">
        <header className="mobile-service-subscriptions-header">
          <div
            className="mobile-service-subscriptions-header-back-button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <h1>{`<`}</h1>
          </div>
          <h1>Subcriptions</h1>
        </header>
        <img
          src={SubscriptionScreenBanner}
          alt="Banner"
          className="mobile-service-subscriptions-banner"
        />
        <section className="mobile-service-subscription-packages">
          <h2 className="heading">
            Book your <span>{selectedService}</span>
          </h2>
          <p className="subheading">
            Get you car washed Daily with Expert & Professional Trained
          </p>
          {SUBSCRIPTION_PACKAGES.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              isBestSeller={subscription.isBestSeller}
              title={subscription.title}
              originalPrice={subscription.originalPrice}
              discountedPrice={subscription.discountedPrice}
              brifDescription={subscription.brifDescription}
              fullDescription={subscription.fullDescription}
              setConfirmationPopUpMessage={setConfirmationPopUpMessage}
              setIsPopUpConfirmationVisible={setIsPopUpConfirmationVisible}
            />
          ))}
        </section>
      </div>
    </>
  );
}
