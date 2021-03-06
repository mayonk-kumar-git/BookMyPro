import React from "react";
import { motion } from "framer-motion";
// -----------------------------------------------------------------
import "../styles/screens/AboutUs.scss";
// -----------------------------------------------------------------
import AboutUsHeroImage from "../assets/images/AboutUs/AboutUsHeroImage.svg";
import VisionIcon from "../assets/icons/AboutUs/VisionIcon.svg";
import RelationshipIcon from "../assets/icons/AboutUs/RelationshipIcon.svg";
import MissionIcon from "../assets/icons/AboutUs/MissionIcon.svg";
import ConservationIcon from "../assets/icons/AboutUs/ConservationIcon.svg";
import GenerosityIcon from "../assets/icons/AboutUs/GenerosityIcon.svg";
import InnovationIcon from "../assets/icons/AboutUs/InnovationIcon.svg";
import QualityIcon from "../assets/icons/AboutUs/QualityIcon.svg";
import Step1Icon from "../assets/icons/AboutUs/Step1Icon.svg";
import Step2Icon from "../assets/icons/AboutUs/Step2Icon.svg";
import Step3Icon from "../assets/icons/AboutUs/Step3Icon.svg";
// -----------------------------------------------------------------

const OUR_AIMS = [
  {
    title: "Vision",
    description:
      "To be leaders in car clean systems by providing waterless car wash solutions and by providing innovative, affordable, technologically efficient solutions.",
  },
  {
    title: "Relationship",
    description:
      "We believe success is determined first & foremost by God’s grace, secondly through the extraordinary efforts of team, & thirdly at discretion of our guests.",
  },
  {
    title: "Mission",
    description:
      " Making the lives of people easy through our services and care and also preserving mother earth. To preserve our nature by not wasting water to provide clean cars.",
  },
  {
    title: "Conservation",
    description:
      "We have been entrusted with the care, beauty, and resources of the earth and we desire to leave it in a better condition than how we found it for future generations.",
  },
  {
    title: "Generosity",
    description:
      " Our guests have honored us with the privilege of being a successful business, it is our responsibility to be civic-minded, give back to the community and beyond.",
  },
  {
    title: "Innovation",
    description:
      "Staying up-to-date and using the latest technology and chemistry will enhance the quality, speed, and environmental impact of each guest’s car wash and experience.",
  },
  {
    title: "Quality",
    description:
      "The quality of a brand and product is attractive and creates loyalty. We want our brand to be irresistible and create remarkable word-of-mouth.",
  },
];

function OurAimBox({ title, description }) {
  const iconImage = () => {
    switch (title) {
      case "Vision": {
        return <img src={VisionIcon} alt="" />;
      }
      case "Relationship": {
        return <img src={RelationshipIcon} alt="" />;
      }
      case "Mission": {
        return <img src={MissionIcon} alt="" />;
      }
      case "Conservation": {
        return <img src={ConservationIcon} alt="" />;
      }
      case "Generosity": {
        return <img src={GenerosityIcon} alt="" />;
      }
      case "Innovation": {
        return <img src={InnovationIcon} alt="" />;
      }
      case "Quality": {
        return <img src={QualityIcon} alt="" />;
      }
      default: {
        return <img src={VisionIcon} alt="" />;
      }
    }
  };

  return (
    <div className="our-aim-box">
      {iconImage()}
      <h3 className="our-aim-box-heading">{title}</h3>
      <p className="our-aim-box-description">{description}</p>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <section className="about-us-hero-section">
        <div className="about-us-hero-section-left">
          <h2 className="about-us-hero-section-left-heading">About Us</h2>
          <p>
            That's our customer promise. Since 2019, we’ve used ourpassion for
            technology and customer experience to pursue our goal of truly
            convenient and eco-conscious car care for individuals and fleets
            nationwide.
          </p>
          <p>
            Some things have changed along the way and others remained the same.
            We have always been mobile, app-based, and car wash &
            detail-focused. We offer day-to-day car cleaning services and other
            maintenance services. Our Wagon CrewTM solution uses eco-friendly
            supplies, less than half the water of a traditional car wash, and
            never leaves anything behind. We take care of cars so our customers
            can get back to living their lives. Are you ready to deliver on the
            Wagon Crew promise?
          </p>
        </div>
        <div className="about-us-hero-section-right">
          <img src={AboutUsHeroImage} alt="Car washing illustration" />
        </div>
      </section>
      <section className="second-section">
        <p className="second-section-subheading">
          We’ve been dedicated to building a positive brand since day 1. We
          believe we are here for a purpose much greater than washing cars!
          While in the scheme of things a car wash may not be all that
          important, we expect an experience to enhance the lives of our guests
          and our team.
        </p>
        <div className="second-section-aims-container">
          {OUR_AIMS.map((aim, index) => (
            <div key={index}>
              <OurAimBox title={aim.title} description={aim.description} />
            </div>
          ))}
        </div>
      </section>
      <section className="how-it-works-section">
        <h1 className="how-it-works-section-heading">How It Works ? </h1>
        <div className="how-it-works-section-steps-container">
          <div className="step-box">
            <div className="step-box-icon-container">
              <img src={Step1Icon} alt="" />
            </div>
            <h3># Step 1</h3>
            <p>
              Schedule your Booking, using our website, phone, or our Iphone/
              Android App
            </p>
          </div>
          <div className="step-box">
            <div className="step-box-icon-container">
              <img src={Step2Icon} alt="" />
            </div>
            <h3># Step 2</h3>
            <p>We come to your with power & water. All we need is your keys</p>
          </div>
          <div className="step-box">
            <div className="step-box-icon-container">
              <img src={Step3Icon} alt="" />
            </div>
            <h3># Step 3</h3>
            <p>you can Digitally track, rate, & easily pay for each service</p>
          </div>
        </div>
      </section>
    </>
  );
}
