import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // CSS import karna mat bhoolna!
import './Leaflet.theme.css'
import api from '../../api/axiosClient'
// import { Icon } from 'leaflet';
// import { BlendIcon, RocketIcon } from 'lucide-react';


const POLL_INTERVAL_MS = 15000
const KOLKATA_ENTRY = [22.654, 88.446]


const RISK_COLOR = {
  LOW: '#22c55e',
  MEDIUM: '#eab308',
  HIGH: '#ef4444',
}

const getRiskColor = (level) => RISK_COLOR[level] || '#6b7280'

function FitToTrail({ points, passportId }) {
  const map = useMap


  const lastFitRef = useRef(null)

  useEffect(() => {
    if (passportId === lastFitRef.current) return
    lastFitRef.current = passportId

    if (points.length === 1) {
      map.setView([points[0].lat, points[0].lng], 7)
    }

    else {
      const bounds = points.map(p => [p.lat, p.lng])
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [points, passportId, map])
  return null
}


const TrackMap = () => {
  const [passportInput, setpassportInput] = useState('')
  const [trackedPassport, settrackedPassport] = useState(null)
  const [trailData, settrailData] = useState(null)
  const [loading, setloading] = useState(false)
  const [Errors, setErrors] = useState('')




  // As default aaha hum Netaji Subhas chandra Airport International Airport ke coordinates (Latitude, Longitude)


  return (
    // 1. MapContainer: Yeh hamara Pizza Base (khali canvas) hai. 
    // Isme height dena bohot zaroori hai, warna map dikhega hi nahi!
    <MapContainer center={KOLKATA_ENTRY} zoom={14} style={{ height: "500px", width: "100%" }}>

      {/* // 2. TileLayer: Yeh hamari Pizza Sauce hai. 
      // Yeh URL internet se chote-chote map ke square images fetch karta hai. */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
      />

      {/* // 3. Marker & Popup: Yeh hamari Topping hai. */}

      <Marker   >
        <Popup className='text-2xl'>

        </Popup>
      </Marker>


    </MapContainer>
  );
};

export default TrackMap;

