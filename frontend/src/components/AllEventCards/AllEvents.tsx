import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import "../../pages/my-event/MyEvent.css";

const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const supabase = createClient(projectUrl, anonKey);

type Event = {
  id: number;
  title: string;
  description: string;
  imgUrl?: string;
  map_id: number;
};

const AllEventCards = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEvents();
  }, []);

  async function getAllEvents() {
    const { data } = await supabase.from("events").select();
    setEvents(data as Event[]);
  }

  return (
    <div className="myEvent-body">
      <div className="myEvent-list">
        {events.map((event, index) => (
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
                alt={event.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEventCards;
