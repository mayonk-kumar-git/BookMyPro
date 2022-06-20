import React from "react";
// ----------------------------------------------------------
import "../styles/screens/ContactUs.scss";
// ----------------------------------------------------------

export default function ContactUs() {
  const handleOnClickMailTo = () => {
    window.location = "mailto:ftoitechnologies@gmail.com";
  };
  const handleOnClickPhoneCallTo = () => {
    window.open("tel:9876543210");
  };

  return (
    <div className="contact-us">
      <h2 className="contact-us-heading">Support</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio lacus,
        pretium sit leo ullamcorper faucibus duis.
      </p>
      <div
        className="contact"
        onClick={() => {
          handleOnClickMailTo();
        }}
      >
        <p>ftoitechnologies@gmail.com</p>
      </div>
      <div
        className="contact"
        onClick={() => {
          handleOnClickPhoneCallTo();
        }}
      >
        <p>9876543210</p>
      </div>
    </div>
  );
}
