import { useEffect, useState, SetStateAction } from "react";
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/Home";

const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const supabase = createClient(projectUrl, anonKey);

type user = {
  name : string,
  email : string,
  password : string
};

function App() {
  const [users, setUsers] = useState<user[]>([
    
  ]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("users").select();
    setUsers(data as SetStateAction<user[]>);
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
