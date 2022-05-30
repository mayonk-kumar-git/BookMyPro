import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
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
import CarWashingIcon from "../assets/icons/LandingPage/CarWashingIcon.svg";
import DeepCleaningIcon from "../assets/icons/LandingPage/DeepCleaningIcon.svg";
import EssentialCleaningIcon from "../assets/icons/LandingPage/EssentialCleaningIcon.svg";
import InteriorCleaningIcon from "../assets/icons/LandingPage/InteriorCleaningIcon.svg";
import BookACarWashImage from "../assets/images/landingPage/BookACarWashImage.svg";
import ForBusinessImage from "../assets/images/landingPage/ForBusinessImage.png";
import TestimonialsInvertedComas from "../assets/images/landingPage/TestimonialsInvertedComas.svg";
import AirbnbTestimonial from "../assets/images/landingPage/AirbnbTestimonial.png";
import BookMyShowTestimonial from "../assets/images/landingPage/BookMyShowTestimonial.png";
import HubspotTestimonial from "../assets/images/landingPage/HubspotTestimonial.png";
// -----------------------------------------------------------------
import Button from "../components/Button";
import { CarServiceDetailsContext } from "../components/Contexts/CarServiceDetailsProvider";
// import CountUp from "../components/CountUp";
// -----------------------------------------------------------------

const OUR_SERVICES = [
  {
    serviceTitle: "Daily Car Wash",
    serviceDescription: "Turn your idea from concept to MVP",
  },
  {
    serviceTitle: "Essential Cleaning",
    serviceDescription: "Sketch out the product to align the user needs",
  },
  {
    serviceTitle: "Full Interior Cleaning",
    serviceDescription: "Convert the designs into a live application",
  },
  {
    serviceTitle: "Full Deep Cleaning",
    serviceDescription: "Launching the application to the market",
  },
];

const BOOK_A_WASH = [
  {
    title: "Choose your subscription",
    description:
      "Select your car and choose from our Daily, Alternate days and weekly subscription options",
  },
  {
    title: "Fix your daily schedule",
    description:
      "Choose the day for exterior and interior cleaning, and the time slot",
  },
  {
    title: "Make the payment",
    description:
      "Make the payment using one of the payment options. Set up Auto Pay",
  },
  {
    title: "We find you a cleaner",
    description: "We will find a cleaner in your area and assign them to you.",
  },
  {
    title: "Regular cleaning service begins",
    description:
      "On your chosen day of start, our cleaner and supervisor will come to your place and start the regular cleaning",
  },
];
const imageAnimationUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const imageAnimationRight = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};
const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
// -----------------------------------------------------------------
function setOurServiceIcon(service) {
  switch (service) {
    case "Daily Car Wash":
      return (
        <img
          src={CarWashingIcon}
          alt="service Icon"
          className="service-card-icon"
        />
      );
    case "Essential Cleaning":
      return (
        <img
          src={EssentialCleaningIcon}
          alt="service Icon"
          className="service-card-icon"
        />
      );
    case "Full Interior Cleaning":
      return (
        <img
          src={InteriorCleaningIcon}
          alt="service Icon"
          className="service-card-icon"
        />
      );
    case "Full Deep Cleaning":
      return (
        <img
          src={DeepCleaningIcon}
          alt="service Icon"
          className="service-card-icon"
        />
      );
    default:
      return (
        <img
          src={CarWashingIcon}
          alt="service Icon"
          className="service-card-icon"
        />
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
      to="/chooseCarServiceDetails"
      className="service-card"
      onClick={() => {
        setSelectedService(serviceTitle);
        localStorage.setItem("selectedService", JSON.stringify(icon));
      }}
    >
      {setOurServiceIcon(serviceTitle)}
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
    case 2:
      return (
        <img
          src={Icon2}
          alt="Book a Wash Icon"
          className="book-a-wash-card-icon"
        />
      );
    case 3:
      return (
        <img
          src={Icon3}
          alt="Book a Wash Icon"
          className="book-a-wash-card-icon"
        />
      );
    case 4:
      return (
        <img
          src={Icon4}
          alt="Book a Wash Icon"
          className="book-a-wash-card-icon"
        />
      );
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
    <motion.div variants={item} className="book-a-wash-card">
      {setBookAWashIcon(icon)}
      <div className="book-a-wash-card-text">
        <h4 className="book-a-wash-card-text-heading">{title}</h4>
        <p className="book-a-wash-card-text-description">{description}</p>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------

export default function LandingPage() {
  // const [ref, inView] = useInView({ threshold: 0.2 });  This will be used in achievement section
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
        <motion.h1
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="our-services-heading"
          viewport={{ once: true }}
        >
          Our Services
        </motion.h1>
        <div className="our-services-list">
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {OUR_SERVICES.map((service, index) => (
              <motion.li variants={item} key={index}>
                <SquareServiceCard
                  setSelectedService={setSelectedService}
                  icon={service.serviceTitle}
                  serviceTitle={service.serviceTitle}
                  serviceDescription={service.serviceDescription}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
      <section className="book-a-wash">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="book-a-wash-description"
        >
          <motion.header className="book-a-wash-description-header">
            <motion.h1
              variants={item}
              className="book-a-wash-description-header-heading"
            >
              Book a Car Wash in 2 minutes
            </motion.h1>
            <motion.p
              variants={item}
              className="book-a-wash-description-header-subheading"
            >
              Apart from a Well Trainned Team and Expert Pro
            </motion.p>
          </motion.header>
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
        </motion.div>
        <div className="book-a-wash-right">
          <motion.img
            variants={imageAnimationUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={BookACarWashImage}
            alt="Mobile Application Screenshot"
            className="book-a-wash-right-image"
          />
          <motion.div
            variants={imageAnimationUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button buttonSize="large">Book Your Service</Button>
          </motion.div>
        </div>
      </section>
      <section className="for-business">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="for-business-left"
        >
          <header className="for-business-left-header">
            <motion.h1
              variants={item}
              className="for-business-left-header-heading"
            >
              <span className="for-business-left-header-heading-span">
                BookMyPro
              </span>{" "}
              For Business
            </motion.h1>
            <motion.p
              variants={item}
              className="for-business-left-header-subheading"
            >
              Our technology has transformed the tricky traffic movement in
              parking lots for various business establishments
            </motion.p>
          </header>
          <div className="for-business-left-description">
            <motion.h1
              variants={item}
              className="for-business-left-description-heading"
            >
              <span className="for-business-left-description-heading-span">
                BookMyPro
              </span>{" "}
              For Business
            </motion.h1>
            <motion.p
              variants={item}
              className="for-business-left-description-text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </motion.p>
            <motion.a
              variants={item}
              href="#"
              className="for-business-left-description-CTA"
            >
              Get started →{" "}
            </motion.a>
          </div>
        </motion.div>
        <motion.div className="for-business-right">
          <motion.ul>
            <motion.li variants={item}>
              <motion.a className="active" href="#">
                Corporate
              </motion.a>
            </motion.li>
            <motion.li variants={item}>
              <motion.a href="#">Society</motion.a>
            </motion.li>
            <motion.li variants={item}>
              <motion.a href="#">Malls</motion.a>
            </motion.li>
          </motion.ul>
          <motion.img
            variants={imageAnimationRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            src={ForBusinessImage}
            alt="For Business Image"
            className="for-business-right-image"
          />
        </motion.div>
      </section>
			<motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="customer-testimonial"
      >
        <motion.img
          variants={item}
          src={TestimonialsInvertedComas}
          alt="Invertedcomas shape"
          className="customer-testimonial-invertedcomas"
        />
        <motion.header variants={item} className="customer-testimonial-header">
          <h1 className="customer-testimonial-header-heading">
            Know why our <br />
            Customer Love Us!
          </h1>
          <p className="customer-testimonial-header-subheading">
            Get inspired by these stories.
          </p>
        </motion.header>
        <motion.img
          variants={item}
          src={AirbnbTestimonial}
          alt="Invertedcomas shape"
          className="customer-testimonial-airbnb"
        />
        <motion.img
          variants={item}
          src={HubspotTestimonial}
          alt="Invertedcomas shape"
          className="customer-testimonial-hubspot"
        />
        <motion.img
          variants={item}
          src={BookMyShowTestimonial}
          alt="Invertedcomas shape"
          className="customer-testimonial-bookmyshow"
        />
      </motion.section>
    </>
  );
}
