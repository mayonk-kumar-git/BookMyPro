import React from "react";
import { Rings } from "react-loader-spinner";
// -------------------------------------------------
import "../../styles/components/Mobile/MobileLoadingScreen.scss";
// -------------------------------------------------

export default function MobileLoadingScreen() {
  return (
    <div className="mobile-loading-screen">
      <Rings ariaLabel="loading-indicator" color="#5084fc" />
      <p>Loading ... </p>
    </div>
  );
}
