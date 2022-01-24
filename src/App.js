import "./App.css";
import UserForm from "./components/Users/UserForm";
import { useState } from "react";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  
  return (
    <div className="text-center">
      <UserForm setUsers={setUsers} />
      <UsersList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
