import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// --------------------------------------------------------
import "../../styles/screens/Mobile/MobileLandingPage.scss";
// --------------------------------------------------------
import UserImage from "../../assets/images/Mobile/MobileLandingPage/UserImage.svg";
import BannerImage from "../../assets/images/Mobile/MobileLandingPage/BannerImage.svg";
import ServiceImage from "../../assets/images/Mobile/MobileLandingPage/ServiceImage.svg";
// --------------------------------------------------------
import { CustomerDetailsContext } from "../../components/Contexts/CustomerDetailsProvider";
import { CarServiceDetailsContext } from "../../components/Contexts/CarServiceDetailsProvider";
import Button from "../../components/Button";
import MobileLogIn from "../../components/Mobile/MobileLogIn";
import MobileNavBar from "../../components/Mobile/MobileNavBar";
import MobileLoadingScreen from "../../components/Mobile/MobileLoadingScreen";
// --------------------------------------------------------

// const SERVICES = [
//   {
//     serviceTitle: "Daily Car Wash",
//     serviceDescription: "Get 30 Days Daily On-demand Car Wash Service",
//   },
//   {
//     serviceTitle: "Car Deep Cleaning",
//     serviceDescription: "Get 30 Days Daily On-demand Car Wash Service",
//   },
//   {
//     serviceTitle: "Full Interior Cleaningh",
//     serviceDescription: "Get 30 Days Daily On-demand Car Wash Service",
//   },
//   {
//     serviceTitle: "Essential Car Cleaning",
//     serviceDescription: "Get 30 Days Daily On-demand Car Wash Service",
//   },
//   {
//     serviceTitle: "Essential Bike Cleaning",
//     serviceDescription: "Get 30 Days Daily On-demand Car Wash Service",
//   },
//   {
//     serviceTitle: "Daily Bike Wash",
//     serviceDescription: "Get 30 Days Daily On-demand Car Wash Service",
//   },
// ];

function ServiceCard({
  title,
  description,
  category,
  navigate,
  setSelectedService,
  setSelectedServiceCategory,
}) {
  return (
    <div className="mobile-service-card">
      <div className="mobile-service-card-left">
        <h2>{title}</h2>
        <p>{description}</p>
        <Button
          buttonSize="small"
          onClick={() => {
            setSelectedService(title);
            setSelectedServiceCategory(category);
            navigate("/myCars");
          }}
        >
          Book Now
        </Button>
      </div>
      <div className="mobile-service-card-right">
        <img src={ServiceImage} alt="" />
      </div>
    </div>
  );
}

export default function MobileLandingPage() {
  const { isCustomerLoggedIn, customerFirstName, customerLastName } =
    useContext(CustomerDetailsContext);
  const {
    OUR_SERVICES,
    isLoading,
    setSelectedService,
    setSelectedServiceCategory,
  } = useContext(CarServiceDetailsContext);
  const [isLogInPopUpVisible, setIsLogInPopUpVisible] = useState(false);
  const navigate = useNavigate();
  // ------------------------------------------------------------------------
  const handleOnClickProfile = () => {
    if (isCustomerLoggedIn) {
      navigate("/myProfile");
    } else {
      setIsLogInPopUpVisible(true);
    }
  };
  // ------------------------------------------------------------------------
  if (isLoading) {
    return <MobileLoadingScreen />;
  } else {
    return (
      <>
        <MobileNavBar />
        <div className="mobile-landing-page">
          {isLogInPopUpVisible ? (
            <MobileLogIn
              onLogIn={() => {
                navigate("/myProfile");
              }}
              setIsPopUpVisible={setIsLogInPopUpVisible}
            />
          ) : (
            <></>
          )}
          <section
            className="landing-page-user-info"
            onClick={() => {
              handleOnClickProfile();
            }}
          >
            <img src={UserImage} alt="Customer" />
            <p>
              Hi, <strong>{`${customerFirstName} ${customerLastName}`}</strong>
            </p>
          </section>
          <section className="landing-page-banner">
            <div className="landing-page-banner-left">
              <div>
                <p>We maintain operate and improve your car and Bikes</p>
                <p>#BookMyPro</p>
              </div>
              <Button
                buttonSize="small"
                buttonStyle="white-solid"
                onClick={() => {
                  // navigate("/myCars");
                }}
              >
                Book Now
              </Button>
            </div>
            <div className="landing-page-banner-right">
              <img src={BannerImage} alt="car mechanic illustration" />
            </div>
          </section>
          <section className="landing-page-services">
            <h1 className="landing-page-services-heading">Service We offer</h1>
            <div className="landing-page-services-list-container">
              {OUR_SERVICES.map((service) => (
                <ServiceCard
                  key={service.service_id}
                  // icon={service.icon}
                  title={service.service_name}
                  description={service.short_description}
                  category={service.category}
                  navigate={navigate}
                  setSelectedService={setSelectedService}
                  setSelectedServiceCategory={setSelectedServiceCategory}
                />
              ))}
            </div>
          </section>
        </div>
      </>
    );
  }
}
