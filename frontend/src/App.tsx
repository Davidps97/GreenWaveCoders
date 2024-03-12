import { useEffect, useState, SetStateAction } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "@/config/db.config.ts";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Map from "@/pages/Map/Map";
import {SelectedPage} from "@/shared/SelectedPage.ts";


type User = {
  name : string,
  email : string,
  password : string
};

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
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

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("users").select();
    setUsers(data as SetStateAction<User[]>);
  }

  return (
      <div className='app bg-primary-2'>
        <Router>
          <Routes>
            <Route path="/login" element={<Login selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>}/>
            <Route path="/home" element={<Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>} />
            <Route path="/map" element={<Map selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}/>
            <Route path="/" element={<Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
