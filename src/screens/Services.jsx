import React, { useContext } from "react";
import { Link } from "react-router-dom";
// -----------------------------------------------------------------
import "../styles/screens/Services.scss";
// -----------------------------------------------------------------
import GasStationIcon from "../assets/icons/GasStationIcon.svg";
import Clock from "../assets/icons/Clock.svg";
import CheckCircleOutline from "../assets/icons/CheckCircleOutline.svg";
import TestimonialsInvertedComas from "../assets/images/landingPage/TestimonialsInvertedComas.svg";
import AirbnbTestimonial from "../assets/images/landingPage/AirbnbTestimonial.png";
import BookMyShowTestimonial from "../assets/images/landingPage/BookMyShowTestimonial.png";
import HubspotTestimonial from "../assets/images/landingPage/HubspotTestimonial.png";
// -----------------------------------------------------------------
import Button from "../components/Button";
import { CarServiceDetailsContext } from "../components/Contexts/CarServiceDetailsProvider";
// -----------------------------------------------------------------
const SERVICES = [
  {
    productName: "Daily Car Wash",
    productTime: "45 Mins",
    productFeatures: [
      "Waterless car washes & microfiber cleaners",
      "Industry Grade Car Shiner & Dust Removable Solution",
      "26 Days - Exterior Wash & 4 Days - Interior Wash",
      "Cleaners Take Rest Day On Monday",
    ],
  },
  {
    productName: "Car Deep Cleaning",
    productTime: "45 Mins",
    productFeatures: [
      "Waterless car washes & microfiber cleaners",
      "Industry Grade Car Shiner & Dust Removable Solution",
      "26 Days - Exterior Wash & 4 Days - Interior Wash",
      "Cleaners Take Rest Day On Monday",
    ],
  },
  {
    productName: "Full Interior Cleaning",
    productTime: "45 Mins",
    productFeatures: [
      "Waterless car washes & microfiber cleaners",
      "Industry Grade Car Shiner & Dust Removable Solution",
      "26 Days - Exterior Wash & 4 Days - Interior Wash",
      "Cleaners Take Rest Day On Monday",
    ],
  },
  {
    productName: "Essential Car Cleaning",
    productTime: "45 Mins",
    productFeatures: [
      "Waterless car washes & microfiber cleaners",
      "Industry Grade Car Shiner & Dust Removable Solution",
      "26 Days - Exterior Wash & 4 Days - Interior Wash",
      "Cleaners Take Rest Day On Monday",
    ],
  },
  {
    productName: "Essential Bike Cleaning",
    productTime: "45 Mins",
    productFeatures: [
      "Waterless car washes & microfiber cleaners",
      "Industry Grade Car Shiner & Dust Removable Solution",
      "26 Days - Exterior Wash & 4 Days - Interior Wash",
      "Cleaners Take Rest Day On Monday",
    ],
  },
  {
    productName: "Daily Bike Wash",
    productTime: "45 Mins",
    productFeatures: [
      "Waterless car washes & microfiber cleaners",
      "Industry Grade Car Shiner & Dust Removable Solution",
      "26 Days - Exterior Wash & 4 Days - Interior Wash",
      "Cleaners Take Rest Day On Monday",
    ],
  },
];

function ServiceCard({ name, time, features, setSelectedService }) {
  return (
    <div className="product-card">
      <header className="product-card-header">
        <img
          className="product-card-header-image"
          src={GasStationIcon}
          alt="Gas Station"
        />
        <div className="product-card-header-text">
          <h3 className="product-card-header-text-heading">{name}</h3>
          <div className="product-card-header-text-time">
            <img src={Clock} alt="clock icon" />
            <p>{time}</p>
          </div>
        </div>
      </header>
      <ul className="product-card-feature-list">
        {features.map((feature, index) => (
          <li key={index}>
            <img src={CheckCircleOutline} alt="list icon" /> <p>{feature}</p>
          </li>
        ))}
      </ul>
      <div className="product-card-CTA">
        <Link
          className="product-card-CTA-link"
          to={{ pathname: "/chooseCarServiceDetails" }}
        >
          <Button
            onClick={() => {
              setSelectedService(name);
              localStorage.setItem("selectedService", JSON.stringify(name));
            }}
          >
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  const { setSelectedService } = useContext(CarServiceDetailsContext);
  return (
    <>
      <section className="products">
        <h1 className="products-heading">
          Choose the Service your are interested in
        </h1>
        <div className="products-list">
          {SERVICES.map((product, index) => (
            <ServiceCard
              key={index}
              name={product.productName}
              time={product.productTime}
              features={product.productFeatures}
              setSelectedService={setSelectedService}
            />
          ))}
        </div>
      </section>
      <section className="customer-testimonial">
        <img
          src={TestimonialsInvertedComas}
          alt="Invertedcomas shape"
          className="customer-testimonial-invertedcomas"
        />
        <header className="customer-testimonial-header">
          <h1 className="customer-testimonial-header-heading">
            Know why our <br />
            Customer Love Us!
          </h1>
          <p className="customer-testimonial-header-subheading">
            Get inspired by these stories.
          </p>
        </header>
        <img
          src={AirbnbTestimonial}
          alt="Invertedcomas shape"
          className="customer-testimonial-airbnb"
        />
        <img
          src={HubspotTestimonial}
          alt="Invertedcomas shape"
          className="customer-testimonial-hubspot"
        />
        <img
          src={BookMyShowTestimonial}
          alt="Invertedcomas shape"
          className="customer-testimonial-bookmyshow"
        />
      </section>
    </>
  );
}
