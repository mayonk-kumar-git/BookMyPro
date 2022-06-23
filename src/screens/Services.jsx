import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
// function ServiceCard({
//   name,
//   icon,
//   description,
//   category,
//   setSelectedService,
//   setSelectedServiceCategory,
// }) {
//   // --------------------------------------------------
//   const navigate = useNavigate();
//   // --------------------------------------------------
//   // --------------------------------------------------
//   return (
//     <div className="services-screen-service-card">
//       <div>
//         <header className="services-screen-service-card-header">
//           <div className="services-screen-service-card-header-left">
//             <img
//               className="services-screen-service-card-header-left-image"
//               src={`http://carwash.smartcarefoundation.com/uploads/service/${icon}`}
//               alt="Gas Station"
//             />
//             <div className="services-screen-service-card-header-left-text">
//               <h3 className="services-screen-service-card-header-left-text-heading">
//                 {name}
//               </h3>
//               <div className="services-screen-service-card-header-left-text-time">
//                 <img src={Clock} alt="clock icon" />
//                 <p>35 exterior wash 35 interior wash</p>
//               </div>
//             </div>
//           </div>
//           <div className="right">
//             <p>
//               ₹ 369 <span>6969</span>
//             </p>
//           </div>
//         </header>
//         <ul className="product-card-feature-list">
//           {features.map((feature, index) => (
//             <li key={index}>
//               <img src={CheckCircleOutline} alt="list icon" /> <p>{feature}</p>
//             </li>
//           ))}
//         </ul>
//         {/* <div
//           className="services-screen-service-card-description-container"
//           dangerouslySetInnerHTML={{ __html: description }}
//         /> */}
//       </div>
//       {/* <div className="services-screen-service-card-description-container">{description}</div> */}
//       <div className="services-screen-service-card-CTA">
//         <Button
//           onClick={() => {
//             setSelectedService(name);
//             setSelectedServiceCategory(category);
//             localStorage.setItem("selectedService", JSON.stringify(name));
//             localStorage.setItem(
//               "selectedServiceCategory",
//               JSON.stringify(category)
//             );
//             navigate("/chooseCarServiceDetails");
//           }}
//         >
//           Book Now
//         </Button>
//       </div>
//     </div>
//   );
// }
function ServiceCard({
  name,
  icon,
  description,
  category,
  setSelectedService,
  setSelectedServiceCategory,
}) {
  // --------------------------------------------------
  const navigate = useNavigate();
  // --------------------------------------------------
  // --------------------------------------------------
  return (
    <div className="services-screen-service-card">
      <div>
        <header className="services-screen-service-card-header">
          <img
            className="services-screen-service-card-header-left-image"
            src={`http://carwash.smartcarefoundation.com/uploads/service/${icon}`}
            alt="Gas Station"
          />
          <h3 className="services-screen-service-card-header-left-text-heading">
            {name}
          </h3>
        </header>
        <ul className="product-card-feature-list">
          {description.map((feature, index) => (
            <li key={index}>
              <img src={CheckCircleOutline} alt="list icon" /> <p>{feature}</p>
            </li>
          ))}
        </ul>
        {/* <div
          className="services-screen-service-card-description-container"
          dangerouslySetInnerHTML={{ __html: description }}
        /> */}
      </div>
      {/* <div className="services-screen-service-card-description-container">{description}</div> */}
      <div className="services-screen-service-card-CTA">
        <Button
          onClick={() => {
            setSelectedService(name);
            setSelectedServiceCategory(category);
            localStorage.setItem("selectedService", JSON.stringify(name));
            localStorage.setItem(
              "selectedServiceCategory",
              JSON.stringify(category)
            );
            navigate("/chooseCarServiceDetails");
          }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default function Services() {
  const { OUR_SERVICES, setSelectedService, setSelectedServiceCategory } =
    useContext(CarServiceDetailsContext);
  return (
    <>
      <section className="services">
        <h1 className="services-heading">
          Choose the Service your are interested in
        </h1>
        <div className="services-list">
          {OUR_SERVICES.map((service) => (
            <ServiceCard
              key={service.service_id}
              name={service.service_name}
              icon={service.icon}
              description={service.long_description}
              category={service.category}
              setSelectedService={setSelectedService}
              setSelectedServiceCategory={setSelectedServiceCategory}
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
