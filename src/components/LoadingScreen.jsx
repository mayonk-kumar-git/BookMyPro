import React from "react";
import { Rings } from "react-loader-spinner";
// ----------------------------------------------------
import "../styles/components/LoadingScreen.scss";
// ----------------------------------------------------

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <Rings ariaLabel="loading-indicator" color="#5084fc" />
			<p>Loading ... </p>
    </div>
  );
}
