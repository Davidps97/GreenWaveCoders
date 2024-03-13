import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import MyEvent from "@/pages/my-event/MyEvent.tsx";
import Map from '@/pages/Map/Map.tsx';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="/myEvent" element={<MyEvent />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
