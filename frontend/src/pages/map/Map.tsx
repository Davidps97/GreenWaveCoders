import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, SetStateAction } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLocation } from "react-router-dom";
import Footer from "@/components/footer/Footer";

const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

type location = {
  id: number;
  latitude: number;
  longitude: number;
};

function Map() {
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
    const supabase = createClient(projectUrl, anonKey);
    const { data } = await supabase.from("maps").select();
    setLocations(data as SetStateAction<location[]>);
  }

  async function getEvents(id: number | null) {
    const supabase = createClient(projectUrl, anonKey);
    console.log(id);
    const { data } = await supabase.from("maps").select().eq("id", id);
    if (data) setEvent(data[0]);

    console.log(data);
  }

  console.log(map_id);

  if (map_id) {
    return (
      <div className="map-main-container h-full">
        {event && (
          <MapContainer
            center={[event.latitude, event.longitude]}
            zoom={15}
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
      <div className="footer" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 9999 }}>
        <Footer />
      </div>
    </div>

  );
}

export default Map;