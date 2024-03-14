import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyEvent from "@/pages/my-event/MyEvent.tsx";
import Map from '@/pages/Map/Map.tsx';
import Event from "./pages/events-page/Event";
import SignInForm from "@/pages/SignIn";


function App() {
    return (
    <Router>
      <Routes>
      <Route path="/signin" element={<SignInForm/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/myEvent" element={<MyEvent/>}/>
        <Route path="/events" element={<Event/>}/>
      </Routes>
    </Router>
  );
}

export default App;
