import { useEffect, useState, SetStateAction } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "@/config/db.config.ts";
import Login from "@/pages/Login";
import Home from "@/pages/Home";


type User = {
  name : string,
  email : string,
  password : string
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("users").select();
    setUsers(data as SetStateAction<User[]>);
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
