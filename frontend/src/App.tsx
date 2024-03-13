import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Map from "./pages/map/Map";
import MyEvent from "./pages/my-event/MyEvent";
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
