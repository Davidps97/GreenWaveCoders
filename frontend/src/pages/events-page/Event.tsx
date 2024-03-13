
import EventCard from "@/components/event-card/Event-card";
import AllEventCards from "../../components/AllEventCards/AllEvents";

  function Event() {

  return (
    <div className=" bg-gradient-to-b from-[#47A6C2] to-[#004567]">

        <div className="myEvent-title  ">
            <h1>Oceans</h1>
        </div>

        <div className="static">
        <EventCard title={"Titulo"} description={"Opa"} imageSrc={"imagen.jpeg"}/>
        </div>
        
        <AllEventCards/>
     
    </div>
  );
}

export default Event;
