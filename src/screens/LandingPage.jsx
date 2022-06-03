import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// -----------------------------------------------------------------
import "../styles/screens/LandingPage.scss";
// -----------------------------------------------------------------
import LandingPageImage from "../assets/images/landingPage/LandingPageImage.svg";
import Icon1 from "../assets/icons/LandingPage/Icon1.svg";
import Icon2 from "../assets/icons/LandingPage/Icon2.svg";
import Icon3 from "../assets/icons/LandingPage/Icon3.svg";
import Icon4 from "../assets/icons/LandingPage/Icon4.svg";
import CarWashingIcon from "../assets/icons/LandingPage/CarWashingIcon.svg";
import DeepCleaningIcon from "../assets/icons/LandingPage/DeepCleaningIcon.svg";
import EssentialCleaningIcon from "../assets/icons/LandingPage/EssentialCleaningIcon.svg";
import InteriorCleaningIcon from "../assets/icons/LandingPage/InteriorCleaningIcon.svg";
import BookACarWashImage from "../assets/images/landingPage/BookACarWashImage.svg";
import WhyChooseUs from "../assets/images/landingPage/WhyChooseUs.svg";
import ForBusinessImage from "../assets/images/landingPage/ForBusinessImage.png";
import CircleCheck from "../assets/icons/CircleCheck.svg";
import BookNowSection from "../assets/images/ChooseYourService/BookNowSection.svg";
import TestimonialsInvertedComas from "../assets/images/landingPage/TestimonialsInvertedComas.svg";
import AirbnbTestimonial from "../assets/images/landingPage/AirbnbTestimonial.png";
import BookMyShowTestimonial from "../assets/images/landingPage/BookMyShowTestimonial.png";
import HubspotTestimonial from "../assets/images/landingPage/HubspotTestimonial.png";
// -----------------------------------------------------------------
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import { CarServiceDetailsContext } from "../components/Contexts/CarServiceDetailsProvider";
import { CustomerDetailsContext } from "../components/Contexts/CustomerDetailsProvider";
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

const WHY_CHOOSE_US = [
  "Easy Bookings",
  "Trained Crew",
  "Eco-Friendly Wash",
  "Quality Products",
  "Daily Service Update",
  "Doorstep Services",
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
          className="rectangular-card-icon"
        />
      );
    case 2:
      return (
        <img
          src={Icon2}
          alt="Book a Wash Icon"
          className="rectangular-card-icon"
        />
      );
    case 3:
      return (
        <img
          src={Icon3}
          alt="Book a Wash Icon"
          className="rectangular-card-icon"
        />
      );
    case 4:
      return (
        <img
          src={Icon4}
          alt="Book a Wash Icon"
          className="rectangular-card-icon"
        />
      );
    default:
      return (
        <img
          src={Icon1}
          alt="Book a Wash Icon"
          className="rectangular-card-icon"
        />
      );
  }
}
function RectangularCard({ icon, title, description }) {
  return (
    <motion.div variants={item} className="rectangular-card">
      {setBookAWashIcon(icon)}
      <div className="rectangular-card-text">
        {title && <h4 className="rectangular-card-text-heading">{title}</h4>}
        {description && (
          <p className="rectangular-card-text-description">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------

export default function LandingPage() {
  // const [ref, inView] = useInView({ threshold: 0.2 });  This will be used in achievement section
  const { setSelectedService } = useContext(CarServiceDetailsContext);
  const { contactNumber, setContactNumber } = useContext(
    CustomerDetailsContext
  );
  return (
    <>
      <section className="hero-section">
        <motion.div
          className="hero-section-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <header className="hero-section-left-header">
            <motion.h1
              variants={item}
              className="hero-section-left-header-heading"
            >
              Auto Car & Car Maintenance
            </motion.h1>
            <motion.p
              variants={item}
              className="hero-section-left-header-subheading"
            >
              Avoid Costly Repairs with Preventive Maintenance. One of the Most
              costly repairs is Engine replacement. Handled by Certified
              Technicians
            </motion.p>
          </header>
          <motion.div variants={item} className="hero-section-left-CTA">
            <InputBox
              placeholder="Enter Your Contact Number"
              input={contactNumber}
              setInput={setContactNumber}
            />
            <Button>Book an Appointment</Button>
          </motion.div>
        </motion.div>
        <div className="hero-section-right">
          <motion.img
            variants={imageAnimationUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={LandingPageImage}
            alt="Landing page"
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
              <RectangularCard
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
      <section className="why-choose-us-section">
        <motion.div className="why-choose-us-section-left">
          <motion.img
            variants={imageAnimationUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="why-choose-us-section-left-image"
            src={WhyChooseUs}
            alt="Why choose us"
          />
          <motion.div
            variants={imageAnimationUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button buttonSize="large">Book Your Service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="why-choose-us-section-right"
        >
          <motion.h1
            variants={item}
            className="why-choose-us-section-right-heading"
          >
            Why Choose Us?
          </motion.h1>
          <div className="why-choose-us-section-right-card-container">
            {WHY_CHOOSE_US.map((description, index) => (
              <RectangularCard
                key={index}
                icon={index}
                description={description}
              />
            ))}
          </div>
        </motion.div>
      </section>
      <section className="book-now-section">
        <motion.div
          className="book-now-section-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h1 variants={item} className="book-now-section-left-heading">
            Hi,I'm your{" "}
            <span className="book-now-section-left-heading-span">Pro</span>
          </motion.h1>
          <ul>
            <motion.li variants={item}>
              <img src={CircleCheck} alt="." />
              <p>I have no hidden fees</p>
            </motion.li>
            <motion.li variants={item}>
              <img src={CircleCheck} alt="." />
              <p>I will clean your car properly</p>
            </motion.li>
            <motion.li variants={item}>
              <img src={CircleCheck} alt="." />
              <p>I will come on time</p>
            </motion.li>
            <motion.li variants={item}>
              <img src={CircleCheck} alt="." />
              <p>I will not take unnecessary leaves</p>
            </motion.li>
          </ul>
          <motion.div variants={item} >
            <Link to="/services" className="book-now-section-left-CTA">
              <Button>Book Now</Button>
            </Link>
          </motion.div>
        </motion.div>
        <div className="book-now-section-right">
          <motion.img
            variants={imageAnimationUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={BookNowSection}
            alt="Our Loyal Working Patner's"
          />
        </div>
      </section>
      {/* <section className="for-business">
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
      </section> */}
      <section className="customer-testimonial">
        <motion.img
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          src={TestimonialsInvertedComas}
          alt="Invertedcomas shape"
          className="customer-testimonial-invertedcomas"
        />
        <motion.header
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="customer-testimonial-header"
        >
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          src={AirbnbTestimonial}
          alt="Invertedcomas shape"
          className="customer-testimonial-airbnb"
        />
        <motion.img
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          src={HubspotTestimonial}
          alt="Invertedcomas shape"
          className="customer-testimonial-hubspot"
        />
        <motion.img
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          src={BookMyShowTestimonial}
          alt="Invertedcomas shape"
          className="customer-testimonial-bookmyshow"
        />
      </section>
    </>
  );
}
