import React from "react";
import CartUI from "./../UI/CartUI";
import classes from "./UsersList.module.css"

const UsersList = ({ users, setUsers }) => {

  const exitIconHandler = (id) => {
    setUsers((pre) => [...pre].filter((user) => user.id !== id)); // ask is this right ?
  };
  return (
   <>
    
      <CartUI>
      {users.length === 0 && <p className="m-0">Nothing To Show</p>}
        <ul className={classes.unorderedList}>
          {users &&
            users.map((user) => {
              return (
                <>
                  <li className={classes.listIcon} key={user.id}>
                    {" "}
                    {user.name} and age: {user.age}
                    <div
                      className={classes.exitIcon}
                      onClick={() => exitIconHandler(user.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-x-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </div>
                  </li>
                </>
              );
            })}
        </ul>
      </CartUI>
   </>
  );
};

export default UsersList;
