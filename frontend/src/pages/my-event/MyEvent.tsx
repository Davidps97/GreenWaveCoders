import { SetStateAction, useEffect, useState } from "react";
import "./MyEvent.css";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import EventCard from "@/components/event-card/Event-card";

const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const supabase = createClient(projectUrl, anonKey);

type myEvent = {
  id: number;
  title: string;
  description: string;
  imgUrl?: string;
  map_id: number;
};

function MyEvent() {
  const [myEvents, setMyEvents] = useState<myEvent[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMyEvents();
  }, []);

  async function getMyEvents() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data } = await supabase.from("events").select();
    setMyEvents(data as SetStateAction<myEvent[]>);

    console.log(data);

    console.log(user?.id);
  }
  return (
    <>

      <EventCard title={"Titulo"} description={"Opa"} imageSrc={"imagen.jpeg"}/>
      
    
      <div className="myEvent-body bg-gradient-to-b from-[#47A6C2] to-[#004567]">
        <div className="myEvent-title">
          <h1>My Events</h1>
        </div>
        <div className="myEvent-list">
          {myEvents.map((event, index) => (
            <div
              key={event.id}
              className={`${
                index % 2 === 0
                  ? "myEvent-self-body"
                  : "myEvent-self-body-reverse"
              }`}
            >
              <div className="myEvent-title-button">
                <div>{event.title}</div>
                <button
                  onClick={() => navigate(`/map?&map_id=${event.map_id}`)}
                >
                  See Location
                </button>
              </div>
              <div className="myEvent-img">
                <img
                  className="myEvent-img size-full object-cover"
                  src={event.imgUrl}
                ></img>
                <div>Joined</div>
              </div>
            </div>
          ))}
        </div>
      </div>

 
    </>
  );
}

export default MyEvent;
