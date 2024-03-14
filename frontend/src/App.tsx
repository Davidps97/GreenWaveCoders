import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import MyEvent from "@/pages/my-event/MyEvent.tsx";
import Map from '@/pages/Map/Map.tsx';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/SignUp";
import Event from "./pages/events-page/Event";


function App() {
    return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/myEvent" element={<MyEvent/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Event/>}/>
      </Routes>
    </Router>
  );
}

export default App;
