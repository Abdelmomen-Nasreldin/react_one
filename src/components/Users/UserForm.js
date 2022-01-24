import React, { useState } from "react";
import ErrorModel from './ErrorModel';
import CartUI from './../UI/CartUI';
import classes from './UserForm.module.css'

const UserFormUsingState = ({setUsers}) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isErrFound, setIsErrFound] = useState(false);
  const nameHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageHandler = (e) => {
    setUserAge(e.target.value);
  };

  const formController = (e) => {
    e.preventDefault();
    if (!userName || !userAge) {
        setIsErrFound(true);
        // alert('Nothing to confirm Oo!!!!')
        return;
    }
    if (+userAge <= 18 ) {
        setIsErrFound(true);
        // alert('you are not allowed')
        
        return;
    }
    setUsers(pre => [...pre ,{id: Math.random().toString(), name: userName, age: userAge}]);
    setUserName("")
    setUserAge("")
  };
  return (
    <CartUI>
       {isErrFound && <ErrorModel setIsErrFound={setIsErrFound} errTitle="ERROR" errMassage="you know how to do it"/> } 
      <form onSubmit={formController} className="d-flex flex-column justify-content-center align-items-center">
      <div className="w-75 col-12">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className={`${classes.formInput} form-control `}
          name="name"
          id="name"
          placeholder="name"
          value={userName}
          onChange={nameHandler}
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
          value={userAge}
          onChange={ageHandler}
        />
        </div>
        <div className="col-12">
          <input type="submit" className={`${classes.formInput} btn btn-primary m-2`} />
        </div>
      </form>
    </CartUI>
  );
};

export default UserFormUsingState;
