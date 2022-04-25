import React from "react";
// -----------------------------------------------------------------
import "../styles/components/Footer.scss";
// -----------------------------------------------------------------
import GooglePlaystoreBadge from "../assets/icons/GooglePlaystoreBadge.svg";
import MobileAppScreenshotBottomHalf from "../assets/images/downloadOurApp/MobileAppScreenshotBottomHalf.svg";
import MobileAppScreenshotTopHalf from "../assets/images/downloadOurApp/MobileAppScreenshotTopHalf.svg";
// -----------------------------------------------------------------
// -----------------------------------------------------------------

export default function Footer() {
  return (
    <>
      <section className="download-app">
        <div className="download-app-text">
          <header>
            <h1 className="download-app-text-heading">
              Download our Latest App Today
            </h1>
            <p className="download-app-text-description">
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procastinating. Stay on track
              and complete on time!
            </p>
          </header>
          <div className="download-app-text-call-to-action">
            <p className="download-app-text-call-t-action-label">Get the App</p>
            <a href="#" className="call-to-action-playstore-badge">
              <img
                src={GooglePlaystoreBadge}
                alt="Google Playstore Badge"
                className="call-to-action-playstore-badge-icon"
              />
            </a>
          </div>
        </div>
        <div className="download-app-images">
          <img
            src={MobileAppScreenshotBottomHalf}
            alt="Mobile Application Screenshots"
            className="download-app-images-bottom"
          />
          <img
            src={MobileAppScreenshotTopHalf}
            alt="Mobile Application Screenshots"
            className="download-app-images-top"
          />
        </div>
      </section>
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
        </div>
        <div className="footer-copyright">
          <p>Made with Love in India</p>
        </div>
      </footer>
    </>
  );
}
