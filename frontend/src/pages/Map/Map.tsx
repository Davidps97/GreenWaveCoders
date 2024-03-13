import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, SetStateAction, Key } from "react";
import { supabase } from "@/config/db.config.ts";

type location = {
  id: number;
  latitude: number;
  longitude: number;
};

type event = {
  id: Key;
  title: string;
  description: string;
  map_id: number;
};

function Map() {
  const [locations, setLocations] = useState<location[]>([]);
  const [events, setEvents] = useState<event[]>([]);

  useEffect(() => {
    getLocations();
  }, []);

  async function getLocations() {
    const { data } = await supabase.from("maps").select();
    setLocations(data as SetStateAction<location[]>);
  }

  async function getEvents(id: number | null) {
    console.log(id);
    const { data } = await supabase.from("events").select().eq("map_id", id);
    setEvents(data as SetStateAction<event[]>);
    console.log(data);
  }

  return (
    <div className="map-main-container h-full" style={{ position: 'relative' }}>
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
          <div >
            <Marker
              key={location.id}
              position={[location.latitude, location.longitude]}
              eventHandlers={{
                click: () => getEvents(location.id)
              }}
            >
            </Marker>
          </div>
        ))}
      </MapContainer>
      
    </div>

  );
}

export default Map;