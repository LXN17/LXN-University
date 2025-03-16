import React, { useState } from "react";

import buttonClass from "./Button.module.css";

const Button = ({ children, isActive, ...props }) => {
  return (
    <button
      {...props}
      className={
        isActive
          ? `${buttonClass.button} ${buttonClass.active}`
          : buttonClass.button
      }
    >
      {children}
    </button>
  );
};

export default Button;
