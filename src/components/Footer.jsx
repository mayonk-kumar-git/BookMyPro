import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
// import { motion } from "framer-motion";
// -----------------------------------------------------------------
import "../styles/components/Footer.scss";
// -----------------------------------------------------------------
// import GooglePlaystoreBadge from "../assets/icons/GooglePlaystoreBadge.svg";
// import MobileAppScreenshotBottomHalf from "../assets/images/downloadOurApp/MobileAppScreenshotBottomHalf.svg";
// import MobileAppScreenshotTopHalf from "../assets/images/downloadOurApp/MobileAppScreenshotTopHalf.svg";

// -----------------------------------------------------------------
// -----------------------------------------------------------------

const imageAnimationUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const imageAnimationDown = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
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

export default function Footer() {
  return (
    <>
      {/* <section className="download-app">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="download-app-text"
        >
          <header>
            <motion.h1 variants={item} className="download-app-text-heading">
              Download our Latest App Today
            </motion.h1>
            <motion.p variants={item} className="download-app-text-description">
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </motion.p>
          </header>
          <motion.div className="download-app-text-call-to-action">
            <motion.p
              variants={item}
              className="download-app-text-call-t-action-label"
            >
              Get the App
            </motion.p>
            <motion.a
              href="#"
              variants={item}
              className="call-to-action-playstore-badge"
            >
              <img
                src={GooglePlaystoreBadge}
                alt="Google Playstore Badge"
                className="call-to-action-playstore-badge-icon"
              />
            </motion.a>
          </motion.div>
        </motion.div>
        <div className="download-app-images">
          <motion.img
            variants={imageAnimationDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            src={MobileAppScreenshotBottomHalf}
            alt="Mobile Application Screenshots"
            className="download-app-images-bottom"
          />
          <motion.img
            variants={imageAnimationUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            src={MobileAppScreenshotTopHalf}
            alt="Mobile Application Screenshots"
            className="download-app-images-top"
          />
        </div>
      </section> */}
      <footer className="footer">
        <div className="left">
          <div>
            <header>
              <Link to="/">
                <h1>BookMyPro</h1>
              </Link>
            </header>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              eius sint quos reprehenderit non debitis quia, impedit obcaecati
              ad dolore saepe enim labore tempore hic corporis cupiditate ex
              ullam quaerat?
            </p>
          </div>
          <p className="copyright">
            © 2022 BookMyPro | All rights reserved | Made with ♡ in India
          </p>
        </div>
        <div className="right">
          <div className="column-container">
            <ul>
              <li>
                <Link to="/">
                  <strong>BookMyPro</strong>
                </Link>
              </li>
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Become a Partner</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/services">
                  <strong>Services</strong>
                </Link>
              </li>
              <li>Daily Car & Bike Wash</li>
              <li>Essential Car & Bike Cleaning</li>
              <li>Car Deep Cleaning</li>
              <li>Full Interior Cleaning</li>
            </ul>
            <ul>
              <li>
                <strong>Legal</strong>
              </li>
              <li>
                <Link to="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/termsAndConditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="social-media-container">
            <a href="#" className="LinkedIn social">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
            <a href="#" className="Facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="Twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#" className="Instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
