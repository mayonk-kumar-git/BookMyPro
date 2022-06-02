import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// -----------------------------------------------------------------
import "../styles/components/Footer.scss";
// -----------------------------------------------------------------
import GooglePlaystoreBadge from "../assets/icons/GooglePlaystoreBadge.svg";
import MobileAppScreenshotBottomHalf from "../assets/images/downloadOurApp/MobileAppScreenshotBottomHalf.svg";
import MobileAppScreenshotTopHalf from "../assets/images/downloadOurApp/MobileAppScreenshotTopHalf.svg";

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
        <h2 className="footer-heading">Book My Pro</h2>
        <div className="footer-description">
          <ul>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Releases</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Cookies Policy</a>
            </li>
            <li>
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/termsAndConditions">Terms & Conditions</Link>
              {/* <a href="#">Terms of Service</a> */}
            </li>
            <li>
              <a href="#">Law Enforcement</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>Made with Love in India</p>
        </div>
      </footer>
    </>
  );
}
