import React, { useState } from "react";
// ---------------------------------------------------
import "../styles/components/Accordion.scss";
// ---------------------------------------------------
import PlusIcon from "../assets/icons/MyProfile/PlusIcon.svg";
import MinusIcon from "../assets/icons/MyProfile/MinusIcon.svg";
// ---------------------------------------------------

export default function Accordion({ title, description }) {
  const [show, setShow] = useState(false);
  return (
    <div className="item">
      <div className="item-title">
        <p>{title}</p>
        {show ? (
          <img
            src={MinusIcon}
            alt="-"
            onClick={() => {
              setShow(false);
            }}
          />
        ) : (
          <img
            src={PlusIcon}
            alt="-"
            onClick={() => {
              setShow(true);
            }}
          />
        )}
      </div>
      <div className={"item-description" + (show ? " show" : "")}>
        <p>{description}</p>
      </div>
    </div>
  );
}
