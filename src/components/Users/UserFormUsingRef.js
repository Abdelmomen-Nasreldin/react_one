import React, { useRef, useState } from "react";
import ErrorModel from './ErrorModel';
import CartUI from './../UI/CartUI';
import classes from './UserForm.module.css'

const UserFormUsingRef = ({setUsers}) => {
    const [isErrFound, setIsErrFound] = useState(false);
    const userNameRef = useRef()
    const userAgeRef = useRef()
  
  
    const formController = (e) => {
      e.preventDefault();
      if (!userNameRef.current.value || !userAgeRef.current.value) {
          setIsErrFound(true);
        
          return;
      }
      if (+userAgeRef.current.value <= 18 ) {
          setIsErrFound(true);
         
          
          return;
      }
      setUsers(pre => [...pre ,{id: Math.random().toString(), name: userNameRef.current.value, age: userAgeRef.current.value}]);
     
    };
  return (
    <CartUI>
      {isErrFound && (
        <ErrorModel
          setIsErrFound={setIsErrFound}
          errTitle="ERROR"
          errMassage="you know how to do it"
        />
      )}
      <form
        onSubmit={formController}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="w-75 col-12">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`${classes.formInput} form-control `}
            name="name"
            id="name"
            placeholder="name"
            ref={userNameRef}
          />
        </div>
        <div className="w-75 col-12">
          <label htmlFor="age">age</label>
          <input
            type="number"
            className={`${classes.formInput} form-control`}
            name="name"
            id="age"
            placeholder="age"
            ref={userAgeRef}
          />
        </div>
        <div className="col-12">
          <input
            type="submit"
            className={`${classes.formInput} btn btn-primary m-2`}
          />
        </div>
      </form>
    </CartUI>
  );
};

export default UserFormUsingRef;
