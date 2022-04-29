import React from "react";
import { motion } from "framer-motion";
// -----------------------------------------------------------
import "../styles/components/Button.scss";
// -----------------------------------------------------------

const STYLES = [
  "primary-solid",
  "primary-outline",

  //all the below classes are not styled yet
  "success-solid",
  "success-outline",
  "warning-solid",
  "warning-outline",
  "danger-solid",
  "danger-outline",
];

const SIZES = ["medium", "small", "small-square", "large"];

export default function Button({
  children,
  buttonSize = "medium",
  buttonStyle = "primary-solid",
  fontSize = 13,
  ...rest
}) {
  const setButtonSize = SIZES.includes(buttonSize) ? buttonSize : "medium";
  const setButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : "primary-solid";

  return (
    <motion.button
      className={`btn ${setButtonSize} ${setButtonStyle}`}
      style={{ fontSize: fontSize }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
