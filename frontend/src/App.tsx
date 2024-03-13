import { useEffect, useState, SetStateAction } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "@/config/db.config.ts";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Map from "@/pages/Map/Map";
import Informations from "@/pages/Informations";
import MyEvent from "@/pages/My-event/MyEvent.tsx";

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
            <Route path="/home" element={<Home isTopOfPage={isTopOfPage} />} />
            <Route path="/map" element={<Map />} />
            <Route path="/myEvent" element={<MyEvent />} />
            <Route path="/" element={<Home isTopOfPage={isTopOfPage} />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
