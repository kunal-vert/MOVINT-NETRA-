import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // CSS import karna mat bhoolna!
// import { Icon } from 'leaflet';
// import { BlendIcon, RocketIcon } from 'lucide-react';

const cityData = [
{ id: 1, name:"Nikita", city: "New Delhi 🏛️", coords: [28.6139, 77.2090] },
{ id: 2, name:"Niku", city: "Mumbai 🌊", coords: [19.0760, 72.8777] },
{ id: 3, name:"gaach", city: "Bangalore 💻", coords: [12.9716, 77.5946] }
];

// const rocketIcon = new Icon({
//   iconUrl: 'https://cdn-icons-png.flaticon.com/512/3141/3141158.png', // Rocket image ka URL
//   iconSize: [40, 40], // Icon ki width aur height pixels mein
// });

const TrackMap = () => {

  // const [first, setfirst] = useState(second)


  // As default aaha hum Netaji Subhas chandra Airport International Airport ke coordinates (Latitude, Longitude)
  const centreposition = [22.654, 88.446]

  return (
    // 1. MapContainer: Yeh hamara Pizza Base (khali canvas) hai. 
    // Isme height dena bohot zaroori hai, warna map dikhega hi nahi!
    <MapContainer  center={centreposition} zoom={14} style={{ height: "500px", width: "100%" }}>
      
      {/* // 2. TileLayer: Yeh hamari Pizza Sauce hai. 
      // Yeh URL internet se chote-chote map ke square images fetch karta hai. */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
      />
      
      {/* // 3. Marker & Popup: Yeh hamari Topping hai. */}
      {cityData.map((c)=>(
      <Marker key={c.id} position={c.coords}  >
        <Popup className='text-2xl'>
          <div>Me {c.name}</div>
          <h1 className='text-cyan-600' >yeh 
          {c.city} hai!.</h1>
        </Popup>
      </Marker>
      ))}

    </MapContainer>
  );
};

export default TrackMap;