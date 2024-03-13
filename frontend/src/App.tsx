import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "@/config/db.config.ts";
import Login from "@/pages/login/Login.tsx";
import Home from "@/pages/home/Home.tsx";
import Map from "@/pages/map/Map";
import Informations from "@/pages/informations/Informations.tsx";
import MyEvent from "@/pages/my-event/MyEvent.tsx";
import {SetStateAction, useEffect, useState} from "react";

type User = {
  name : string,
  email : string,
  password : string
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("users").select();
    setUsers(data as SetStateAction<User[]>);
  }

  return (
      <div className='app bg-primary-2'>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/infos" element={<Informations />} />
            <Route path="/my-event" element={<MyEvent />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
