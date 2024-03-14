import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyEvent from "@/pages/my-event/MyEvent.tsx";
import Map from '@/pages/Map/Map.tsx';
import Event from "./pages/events-page/Event";
import SignInForm from "@/pages/SignIn";
import Home from "./pages/home/Home";
import Information from "./pages/information/Information";
import SignUpForm from "./pages/SignUp";
import SignUpForm from "./pages/SignUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/map" element={<Map />} />
        <Route path="/myEvent" element={<MyEvent />} />
        <Route path="/events" element={<Event />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </Router>
  );
}

export default App;
