import React from "react";
import classes from "./CartUI.module.css"

const CartUI = ({ children, className }) => {
  return <div className={`${classes.cart} ${className}`}>{children}</div>;
};

export default CartUI;
