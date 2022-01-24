import "./App.css";
// import UserFormUsingState from "./components/Users/UserForm";
import { useState } from "react";
import UsersList from "./components/Users/UsersList";
import UserFormUsingRef from './components/Users/UserFormUsingRef';

function App() {
  const [users, setUsers] = useState([]);
  
  return (
    <div className="text-center">
      {/* <UserFormUsingState setUsers={setUsers} />  */} 
      {/*using State when you need to read and Write the input data and wanna change it (more code) using onchangr and value attributes*/}
      <UserFormUsingRef setUsers={setUsers} /> 
      {/*using Ref when you just read the input data and do not want to change it (less code)*/}
      <UsersList users={users} setUsers={setUsers} />
    </div>
  );
}
// NOTES: 
// useRef do not re-render the component but State do.
// useRef most often used in counter and reference elements (input)
// useRef store the previous value of the state
// using Ref make the component Uncontrolled component but state make it controlled one
// controlled component => Internal State is Controlled By React
// Uncontrolled component => controlled by DOM

export default App;
