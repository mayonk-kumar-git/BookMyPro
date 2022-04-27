import React, { useContext } from "react";
import { Link } from "react-router-dom";
// -----------------------------------------------------------------
import "../styles/screens/LandingPage.scss";
// -----------------------------------------------------------------
import HeroSectionPhoneCenter from "../assets/images/landingPage/HeroSectionPhoneCenter.svg";
import HeroSectionPhoneLeft from "../assets/images/landingPage/HeroSectionPhoneLeft.svg";
import HeroSectionPhoneRight from "../assets/images/landingPage/HeroSectionPhoneRight.svg";
import Icon1 from "../assets/icons/LandingPage/Icon1.svg";
import Icon2 from "../assets/icons/LandingPage/Icon2.svg";
import Icon3 from "../assets/icons/LandingPage/Icon3.svg";
import Icon4 from "../assets/icons/LandingPage/Icon4.svg";
import BookACarWashPhone from "../assets/images/landingPage/BookACarWashPhone.svg";
import ForBusinessImage from "../assets/images/landingPage/ForBusinessImage.png";
import TestimonialsInvertedComas from "../assets/images/landingPage/TestimonialsInvertedComas.svg";
import AirbnbTestimonial from "../assets/images/landingPage/AirbnbTestimonial.png";
import BookMyShowTestimonial from "../assets/images/landingPage/BookMyShowTestimonial.png";
import HubspotTestimonial from "../assets/images/landingPage/HubspotTestimonial.png";

// -----------------------------------------------------------------
import Button from "../components/Button";
import { CarServiceDetailsContext } from "../components/Contexts/CarServiceDetailsProvider";
// -----------------------------------------------------------------

const OUR_SERVICES = [
  {
    serviceTitle: "Daily Car Wash",
    serviceDescription: "Turn your idea from concept to MVP",
  },
  {
    serviceTitle: "FasTag",
    serviceDescription: "Sketch out the product to align the user needs",
  },
  {
    serviceTitle: "Car Deep Cleaning",
    serviceDescription: "Convert the designs into a live application",
  },
  {
    serviceTitle: "Bike Washing",
    serviceDescription: "Launching the application to the market",
  },
  {
    serviceTitle: "Insurance",
    serviceDescription: "Turn your idea from concept to MVP",
  },
  {
    serviceTitle: "Accessories",
    serviceDescription: "Sketch out the product to align the user needs",
  },
  {
    serviceTitle: "RTO Services",
    serviceDescription: "Convert the designs into a live application  ",
  },
  {
    serviceTitle: "AC Service",
    serviceDescription: "Launching the application to the market",
  },
];

const BOOK_A_WASH = [
  {
    title: "Daily Car Wash",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit morbi a, mi egestas eu amet mauris adipiscing.",
  },
  {
    title: "FasTag",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit morbi a, mi egestas eu amet mauris adipiscing.",
  },
  {
    title: "Car Deep Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit morbi a, mi egestas eu amet mauris adipiscing.",
  },
  {
    title: "Bike Washing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit morbi a, mi egestas eu amet mauris adipiscing.",
  },
  {
    title: "Insurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit morbi a, mi egestas eu amet mauris adipiscing.",
  },
];

// -----------------------------------------------------------------
function setOurServiceIcon(index) {
  const iconNumber = (index % 5) + 1;
  switch (iconNumber) {
    case 1:
      return (
        <img src={Icon1} alt="service Icon" className="service-card-icon" />
      );
      break;
    case 2:
      return (
        <img src={Icon2} alt="service Icon" className="service-card-icon" />
      );
      break;
    case 3:
      return (
        <img src={Icon3} alt="service Icon" className="service-card-icon" />
      );
      break;
    case 4:
      return (
        <img src={Icon4} alt="service Icon" className="service-card-icon" />
      );
      break;
    default:
      return (
        <img src={Icon1} alt="service Icon" className="service-card-icon" />
      );
  }
}
function SquareServiceCard({
  icon,
  serviceTitle,
  serviceDescription,
  setSelectedService,
}) {
  return (
    <Link
      to="chooseCarServiceDetails"
      className="service-card"
      onClick={() => {
        setSelectedService(serviceTitle);
      }}
    >
      {setOurServiceIcon(icon)}
      <h4 className="service-card-heading">{serviceTitle}</h4>
      <p className="service-card-description">{serviceDescription}</p>
    </Link>
  );
}
function setBookAWashIcon(index) {
  const iconNumber = (index % 5) + 1;
  switch (iconNumber) {
    case 1:
      return (
        <img
          src={Icon1}
          alt="Book a Wash Icon"
          className="book-a-wash-card-icon"
        />
      );
      break;
    case 2:
      return (
        <img
          src={Icon2}
          alt="Book a Wash Icon"
          className="book-a-wash-card-icon"
        />
      );
      break;
    case 3:
      return (
        <img
          src={Icon3}
          alt="Book a Wash Icon"
          className="book-a-wash-card-icon"
        />
      );
      break;
    case 4:
      return (
        <img
          src={Icon4}
          alt="Book a Wash Icon"
          className="book-a-wash-card-icon"
        />
      );
      break;
    default:
      return (
        <img
          src={Icon1}
          alt="Book a Wash Icon"
          className="book-a-wash-card-icon"
        />
      );
  }
}
function BookAWashCard({ icon, title, description }) {
  return (
    <div className="book-a-wash-card">
      {setBookAWashIcon(icon)}
      <div className="book-a-wash-card-text">
        <h4 className="book-a-wash-card-text-heading">{title}</h4>
        <p className="book-a-wash-card-text-description">{description}</p>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------

export default function LandingPage() {
  const { setSelectedService } = useContext(CarServiceDetailsContext);
  return (
    <>
      <section className="hero-section">
        <h1 className="hero-section-heading">
          Get all your vehicle releated services at one place
        </h1>
        <Button fontSize={20}>Download our App</Button>
        <div className="hero-section-images">
          <img
            src={HeroSectionPhoneCenter}
            alt="Mobile Application Screenshot"
            className="hero-section-images-phone hero-section-images-phone-center"
          />
          <img
            src={HeroSectionPhoneLeft}
            alt="Mobile Application Screenshot"
            className="hero-section-images-phone hero-section-images-phone-left"
          />
          <img
            src={HeroSectionPhoneRight}
            alt="Mobile Application Screenshot"
            className="hero-section-images-phone hero-section-images-phone-right"
          />
        </div>
      </section>
      <section className="our-services">
        <h1 className="our-services-heading">Our Services</h1>
        <div className="our-services-list">
          {OUR_SERVICES.map((service, index) => (
            <SquareServiceCard
              key={index}
              setSelectedService={setSelectedService}
              icon={index}
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
            />
          ))}
        </div>
      </section>
      <section className="book-a-wash">
        <div className="book-a-wash-description">
          <header className="book-a-wash-description-header">
            <h1 className="book-a-wash-description-header-heading">
              Book a Car Wash in 30 Seconds
            </h1>
            <p className="book-a-wash-description-header-subheading">
              Apart from a Well Trainned Team and Expert Pro
            </p>
          </header>
          <div className="book-a-wash-description-list">
            {BOOK_A_WASH.map((item, index) => (
              <BookAWashCard
                key={index}
                icon={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="book-a-wash-images">
          <img
            src={BookACarWashPhone}
            alt="Mobile Application Screenshot"
            className="book-a-wash-images-phone"
          />
        </div>
      </section>
      <section className="achievements">
        <header className="achievements-header">
          <h3 className="achievements-header-heading">
            What we have Achieved so far
          </h3>
          <p className="achievements-header-subheading">
            With our super powers we have reached this
          </p>
        </header>
        <div className="achievements-numbers">
          <div className="achievements-numbers-card">
            <img
              src={Icon1}
              alt="achievement Icon"
              className="achievements-numbers-card-icon"
            />
            <div className="achievements-numbers-card-text">
              <h4 className="achievements-numbers-card-text-heading">1000+</h4>
              <p className="achievements-numbers-card-text-description">
                Daily Car Cleaning
              </p>
            </div>
          </div>
          <div className="achievements-numbers-card">
            <img
              src={Icon2}
              alt="achievement Icon"
              className="achievements-numbers-card-icon"
            />
            <div className="achievements-numbers-card-text">
              <h4 className="achievements-numbers-card-text-heading">1000+</h4>
              <p className="achievements-numbers-card-text-description">
                BookMyPro Societies
              </p>
            </div>
          </div>
          <div className="achievements-numbers-card">
            <img
              src={Icon3}
              alt="achievement Icon"
              className="achievements-numbers-card-icon"
            />
            <div className="achievements-numbers-card-text">
              <h4 className="achievements-numbers-card-text-heading">500+</h4>
              <p className="achievements-numbers-card-text-description">
                On Demand Cleaning
              </p>
            </div>
          </div>
          <div className="achievements-numbers-card">
            <img
              src={Icon4}
              alt="achievement Icon"
              className="achievements-numbers-card-icon"
            />
            <div className="achievements-numbers-card-text">
              <h4 className="achievements-numbers-card-text-heading">40+</h4>
              <p className="achievements-numbers-card-text-description">
                Societies
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="for-business">
        <div className="for-business-left">
          <header className="for-business-left-header">
            <h1 className="for-business-left-header-heading">
              <span className="for-business-left-header-heading-span">
                BookMyPro
              </span>{" "}
              For Business
            </h1>
            <p className="for-business-left-header-subheading">
              Our technology has transformed the tricky traffic movement in
              parking lots for various business establishments
            </p>
          </header>
          <div className="for-business-left-description">
            <h1 className="for-business-left-description-heading">
              <span className="for-business-left-description-heading-span">
                BookMyPro
              </span>{" "}
              For Business
            </h1>
            <p className="for-business-left-description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </p>
            <a href="#" className="for-business-left-description-CTA">
              Get started →{" "}
            </a>
          </div>
        </div>
        <div className="for-business-right">
          <ul>
            <li>
              <a className="active" href="#">
                Corporate
              </a>
            </li>
            <li>
              <a href="#">Society</a>
            </li>
            <li>
              <a href="#">Malls</a>
            </li>
          </ul>
          <img
            src={ForBusinessImage}
            alt="For Business Image"
            className="for-business-right-image"
          />
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
