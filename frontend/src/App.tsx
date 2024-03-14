import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "@/pages/home/Home.tsx";
import Map from "@/pages/map/Map.tsx";
import Informations from "@/pages/informations/Informations.tsx";
import MyEvent from "@/pages/my-event/MyEvent.tsx";
import SignIn from "@/pages/sign-in/SignIn.tsx";
import SignUp from "@/pages/sign-up/SignUp.tsx";


function App() {


  return (
      <Router>
        <div className='app'>
          <Routes>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/map" element={<Map/>}/>
            <Route path="/infos" element={<Informations />}/>
            <Route path="/my-event" element={<MyEvent/>}/>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
