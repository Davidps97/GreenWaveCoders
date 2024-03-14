import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import MyEvent from "@/pages/my-event/MyEvent.tsx";
import Map from '@/pages/Map/Map.tsx';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/SignUp";

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        {/*<Route path="/home" element={<Home/>}/>*/}
        <Route path="/map" element={<Map/>}/>
        <Route path="/myEvent" element={<MyEvent/>}/>
        {/*<Route path="/" element={<Home/>}/>*/}
      </Routes>
    </Router>
  );
}

export default App;
