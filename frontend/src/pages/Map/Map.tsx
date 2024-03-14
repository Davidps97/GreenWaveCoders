import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, SetStateAction } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLocation, useNavigate } from "react-router-dom";

const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const supabase = createClient(projectUrl, anonKey);

type location = {
  id: number;
  latitude: number;
  longitude: number;
};

function Map() {
  const navigate = useNavigate();
  const [locations, setLocations] = useState<location[]>([]);
  const [event, setEvent] = useState<location>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const map_id = searchParams.get("map_id");

  useEffect(() => {
    getLocations();

    if (map_id) getEvents(Number(map_id));
  }, []);

  async function getLocations() {
    const { data } = await supabase.from("maps").select();
    setLocations(data as SetStateAction<location[]>);
  }

  async function getEvents(id: number | null) {
    
    console.log(id);
    const { data } = await supabase.from("maps").select().eq("id", id);
    if (data) setEvent(data[0]);
    console.log(id)
    navigate("/events", { state: { locationId:id } });
    console.log(data);
  }



  if (map_id) {
    return (
      <div className="map-main-container h-full">
        {event && (
          <MapContainer
            center={[event.latitude, event.longitude]}
            zoom={20}
            style={{ height: "100vh", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location) => (
              <div key={location.id}>
                <Marker
                  key={location.id}
                  position={[location.latitude, location.longitude]}
                  eventHandlers={{
                    click: () => getEvents(location.id),
                  }}
                ></Marker>
              </div>
            ))}
          </MapContainer>
        )}
      </div>
    );
  }

  return (
    <div className="map-main-container h-full">
      <MapContainer
        center={[35.380602, -5.0]}
        zoom={4}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <div key={location.id}>
            <Marker
              key={location.id}
              position={[location.latitude, location.longitude]}
              eventHandlers={{
                click: () => getEvents(location.id),
              }}
            ></Marker>
          </div>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
