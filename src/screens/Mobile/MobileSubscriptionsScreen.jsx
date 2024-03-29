import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// -----------------------------------------------------------
import "../../styles/screens/Mobile/MobileSubscriptionScreen.scss";
// -----------------------------------------------------------
import SubscriptionScreenBanner from "../../assets/images/Mobile/MobileServiceSubscriptionScreen/SubscriptionScreenBanner.svg";
import LeftArrowHeadBlue from "../../assets/icons/LeftArrowHeadBlue.svg";
import Clock from "../../assets/icons/Clock.svg";
import CheckCircleOutline from "../../assets/icons/CheckCircleOutline.svg";
// -----------------------------------------------------------
import { CarServiceDetailsContext } from "../../components/Contexts/CarServiceDetailsProvider";
import MobileConfirmationPopUp from "../../components/Mobile/MobileConfirmationPopUp";
// -----------------------------------------------------------

// const SUBSCRIPTION_PACKAGES = [
//   {
//     isBestSeller: false,
//     title: "30 Days Wash Plan",
//     originalPrice: "799",
//     discountedPrice: "699",
//     brifDescription: "Get 26 Exterior & 4 Internal Car Washes a Month",
//     fullDescription: [
//       "Waterless car washes & microfiber cleaners",
//       "Industry Grade Car Shiner & Dust Removable Solution",
//       "26 Days - Exterior Wash & 4 Days - Interior Wash",
//       "Cleaners Take Rest Day On Monday",
//       "Cleaners Take Rest Day On Monday",
//     ],
//   },
//   {
//     isBestSeller: true,
//     title: "45 Days Wash Plan",
//     originalPrice: "899",
//     discountedPrice: "799",
//     brifDescription: "Get 26 Exterior & 4 Internal Car Washes a Month",
//     fullDescription: [
//       "Waterless car washes & microfiber cleaners",
//       "Industry Grade Car Shiner & Dust Removable Solution",
//       "26 Days - Exterior Wash & 4 Days - Interior Wash",
//       "Cleaners Take Rest Day On Monday",
//       "Cleaners Take Rest Day On Monday",
//     ],
//   },
//   {
//     isBestSeller: false,
//     title: "60 Days Wash Plan",
//     originalPrice: "999",
//     discountedPrice: "899",
//     brifDescription: "Get 26 Exterior & 4 Internal Car Washes a Month",
//     fullDescription: [
//       "Waterless car washes & microfiber cleaners",
//       "Industry Grade Car Shiner & Dust Removable Solution",
//       "26 Days - Exterior Wash & 4 Days - Interior Wash",
//       "Cleaners Take Rest Day On Monday",
//       "Cleaners Take Rest Day On Monday",
//     ],
//   },
//   {
//     isBestSeller: false,
//     title: "120 Days Wash Plan",
//     originalPrice: "1099",
//     discountedPrice: "999",
//     brifDescription: "Get 26 Exterior & 4 Internal Car Washes a Month",
//     fullDescription: [
//       "Waterless car washes & microfiber cleaners",
//       "Industry Grade Car Shiner & Dust Removable Solution",
//       "26 Days - Exterior Wash & 4 Days - Interior Wash",
//       "Cleaners Take Rest Day On Monday",
//       "Cleaners Take Rest Day On Monday",
//     ],
//   },
// ];

function SubscriptionCard({
  isBestSeller,
  title,
  originalPrice,
  discountedPrice,
  // brifDescription,
  fullDescription,
  setConfirmationPopUpMessage,
  setIsConfirmationPopUpVisible,
}) {
  // ---------------------------------------------------
  const firstFewDescriptions = [...fullDescription];
  // ---------------------------------------------------
  return (
    <div
      className={"package-card" + (isBestSeller ? " best-seller" : "")}
      onClick={() => {
        setIsConfirmationPopUpVisible(true);
        setConfirmationPopUpMessage({
          packageName: title,
          packageDescription: fullDescription,
          cost: discountedPrice,
        });
      }}
    >
      {isBestSeller ? <p className="best-seller-badge">Best Seller</p> : <></>}
      <div className="package-info">
        <h3 className="package-info-heading">
          {`${title} for `}
          <span className="original-price">₹{originalPrice}</span>
          <span className="discounted-price">{` ₹${discountedPrice}`}</span>
        </h3>
        {/* <div className="brief-description">
          <img src={Clock} alt="." />
          <p>{brifDescription}</p>
        </div> */}
        <ul className="description-container">
          {firstFewDescriptions
            .splice(0, Math.min(fullDescription.length, 2))
            .map((feature, index) => (
              <li key={index}>
                <img src={CheckCircleOutline} alt="list icon" />{" "}
                <p>{feature}</p>
              </li>
            ))}
          {fullDescription.length > 2 ? (
            <li>
              <span className="description-more-button">...more</span>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="select-button">
        <p>Select</p>
      </div>
    </div>
  );
}

export default function MobileSubscriptionsScreen() {
  const { planList, selectedService, setSelectedPlan, setCost } = useContext(
    CarServiceDetailsContext
  );
  const navigate = useNavigate();
  const [isConfirmationPopUpVisible, setIsConfirmationPopUpVisible] =
    useState(false);
  const [confirmationPopUpMessage, setConfirmationPopUpMessage] = useState({
    packageName: "",
    packageDescription: [],
    cost: 0,
  });
  return (
    <>
      <MobileConfirmationPopUp
        isConfirmationPopUpVisible={isConfirmationPopUpVisible}
        setIsConfirmationPopUpVisible={setIsConfirmationPopUpVisible}
        confirmButtonText="Continue"
        onClickConfirmButton={() => {
          setSelectedPlan(confirmationPopUpMessage.packageName);
          setCost(confirmationPopUpMessage.cost);
          navigate("/preferences");
        }}
      >
        <div className="mobile-subscription-confirmation">
          <h3 className="heading">
            Do you want to continue with{" "}
            <span>{confirmationPopUpMessage.packageName}</span>
          </h3>
          <p className="subheading">
            This plan includes the following services
          </p>
          <ul className="package-description-container">
            {confirmationPopUpMessage.packageDescription.map(
              (service, index) => (
                <li key={index}>
                  <img src={CheckCircleOutline} alt="list icon" />
                  <p>{service}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </MobileConfirmationPopUp>

      <div className="mobile-service-subscriptions">
        <header className="mobile-service-subscriptions-header">
          <div
            className="mobile-service-subscriptions-header-back-button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={LeftArrowHeadBlue} alt="<" />
          </div>
          <h2>Subcriptions</h2>
        </header>
        <div className="mobile-service-subscriptions-banner">
          <img src={SubscriptionScreenBanner} alt="Banner" />
        </div>
        <section className="mobile-service-subscription-packages">
          <h2 className="heading">
            Book your <span>{selectedService}</span>
          </h2>
          <p className="subheading">
            Get you car washed Daily with Expert & Professional Trained
          </p>
          {/* {SUBSCRIPTION_PACKAGES.map((subscription, index) => (
            <SubscriptionCard
              key={index}
              isBestSeller={subscription.isBestSeller}
              title={subscription.title}
              originalPrice={subscription.originalPrice}
              discountedPrice={subscription.discountedPrice}
              brifDescription={subscription.brifDescription}
              fullDescription={subscription.fullDescription}
              setConfirmationPopUpMessage={setConfirmationPopUpMessage}
              setIsConfirmationPopUpVisible={setIsConfirmationPopUpVisible}
            />
          ))} */}
          {planList.map((plan) => (
            <SubscriptionCard
              key={plan.package_id}
              isBestSeller={plan.package_id === "25"}
              title={plan.package_name}
              originalPrice={plan.amount}
              discountedPrice={
                Math.round(
                  (parseFloat(plan.amount) - parseFloat(plan.discount_amount)) *
                    100
                ) / 100
              }
              // brifDescription={"35 exterior wash 35 interior wash"}
              fullDescription={plan.description}
              setConfirmationPopUpMessage={setConfirmationPopUpMessage}
              setIsConfirmationPopUpVisible={setIsConfirmationPopUpVisible}
            />
          ))}
        </section>
      </div>
    </>
  );
}
