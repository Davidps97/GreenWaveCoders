import { useEffect, useState, SetStateAction } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import {supabase} from '@/config/db.config.ts';
import MyEvent from "@/pages/my-event/MyEvent.tsx";
import Map from '@/pages/Map/Map.tsx';

type User = {
  name : string,
  email : string,
  password : string
};

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

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

    return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home isTopOfPage={isTopOfPage} />} />
        <Route path="/map" element={<Map />} />
        <Route path="/myEvent" element={<MyEvent />} />
        <Route path="/" element={<Home isTopOfPage={isTopOfPage} />} />
      </Routes>
    </Router>
  );
}

export default App;
