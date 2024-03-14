
import EventCard from "@/components/event-card/Event-card";
import AllEventCards from "../../components/allEventCards/AllEvents";
import JoinButton from "@/components/joinEvent/JoinEventButton";
import { useState,SetStateAction, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLocation } from "react-router";
const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;


type event = {
    id: number;
    title: string;
    description: string;
    map_id: number;
  };
  function Event() {
    const location = useLocation();
    const locationId = location.state?.locationId;
    const [event, setEvent] = useState<event[]>([]);

    async function getEvent(id: number) {
        const supabase = createClient(projectUrl, anonKey);
        const { data } = await supabase.from("events").select().eq("map_id", id);
        setEvent(data as SetStateAction<event[]>);
    }

    useEffect(() => {
        getEvent(locationId);
    }, []);

    return (
        <div className="bg-gradient-to-b from-[#47A6C2] to-[#004567]">
            <div className="myEvent-title">
                <h1>Oceans</h1>
            </div>
            <div className="static">
        
                {event.length > 0 && (
                    <>
                        <EventCard title={event[0].title} description={event[0].description} imageSrc={"imagen.jpeg"} />
                        <JoinButton eventID={event[0].id} userID="78b08c3d-483e-42ae-a776-49bc4b9d877e"/>
                    </>
                )}
            </div>
            <AllEventCards />
        </div>
    );
}


export default Event;
