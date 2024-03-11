import { createClient } from "@supabase/supabase-js";
import { SetStateAction, useEffect, useState } from "react";
import "./MyEvent.css";

const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const supabase = createClient(projectUrl, anonKey);

type myEvent = {
  id: number;
  title: string;
  description: string;
};

function MyEvent() {
  const [myEvents, setMyEvents] = useState<myEvent[]>([]);

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
      <div className="myEvent-body bg-gradient-to-b from-[#47A6C2] to-[#004567]">
        <div className="myEvent-title">
          <h1>My Events</h1>
        </div>
        <div className="myEvent-list">
          {myEvents.map((event, index) => (
            <div className={`${index%2===0?"myEvent-self-body":"myEvent-self-body-reverse"}`} >
                <div className="myEvent-title-button">
                    <div>{event.title}</div>
                    <button className="drop-shadow-[0_20px_13px_rgba(0,0,0,0.03)]">See Location</button>
                </div>
                <div className="myEvent-img">
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
