import React from "react";
import CartUI from "../UI/CartUI";
import classes from "./ErrorModel.module.css";

const ErrorModel = ({ setIsErrFound, errMassage, errTitle }) => {
  const errorHandler = () => {
    setIsErrFound(false);
    alert("متنساش انك حلفت")
  };
  return (
    <>
      <div className={classes.overLay} onClick={errorHandler}></div>
      <CartUI
        className={`${classes.cartError} d-flex flex-column justify-content-center align-items-center`}
      >
        <h1>{errTitle}</h1>
        <p>{errMassage}</p>
        <button
          type="button"
          className="btn btn-warning"
          onClick={errorHandler}
        >
          I swear to do it right
        </button>
      </CartUI>
    </>
  );
};

export default ErrorModel;
