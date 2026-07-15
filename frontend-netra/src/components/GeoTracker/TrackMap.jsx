import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, CircleMarker } from 'react-leaflet';
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
  const map = useMap()


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
  const [Errors, setError] = useState('')


  const fetchTrail = useCallback(async (passportId, { silent = false } = {}) => {
    if (!passportId) return
    if (!silent) {
      setLoading(true)
      setError('')
    }

    try {
      const res = await api.get(`/api/location/trail/${encodeURIComponent(passportId)}`)
      setTrailData(res.data)
    } catch (err) {
      if (!silent) {
        if (err.response) {
          setError(err.response.data?.detail || 'National not found')
        } else if (err.request) {
          setError('Could not reach MOVINT backend — is the server running?')
        } else {
          setError('Unexpected error occurred')
        }
        setTrailData(null)
      }
    } finally {
      if (!silent) setLoading(false)
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const id = passportInput.trim()
    if (!id) return
    setTrackedPassport(id)
    fetchTrail(id)
  }


  useEffect(() => {
    if (!trackedPassport) return
    const intervalId = setInterval(() => {
      fetchTrail(trackedPassport, { silent: true })
    }, POLL_INTERVAL_MS)
    return () => clearInterval(intervalId)
  }, [trackedPassport, fetchTrail])


  const entryPoint = useMemo(() => ({
    id: 'entry',
    lat: KOLKATA_ENTRY[0],
    lng: KOLKATA_ENTRY[1],
    operator_type: 'IMMIGRATION',

    location: 'Entry — Kolkata Airport (assumed, not backend-verified)',
    delay_days: 0,
    notes: null,
    timestamp: null
  }), [])


  const allPoints = useMemo(() => {
    return trailData ? [entryPoint, ...trailData.trail] : [entryPoint]
  }, [trailData, entryPoint])

  const polylinePositions = allPoints.map(p => [p.lat, p.lng])
  const color = getRiskColor(trailData?.risk_level)


  // As default aaha hum Netaji Subhas chandra Airport International Airport ke coordinates (Latitude, Longitude)


  return (
    // 1. MapContainer: Yeh hamara Pizza Base (khali canvas) hai. 
    // Isme height dena bohot zaroori hai, warna map dikhega hi nahi!
    <div>
      <form action="">
        <input type="text"
          // value={ }
          onChange={() => setpassportInput(e.target.value)}
          placeholder='Enter passport ID'
          className='px-3 py-2 rounded-md bg-slate-800 text-white outline-none border border-gray-700 focus:border-violet-500 w-48'
        />
        <button type='submit'
          disabled={loading}
          className='px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-semibold disabled:opacity-50'
        >
          {loading ? 'Locating...' : 'Track'}
        </button>
      </form>
      {Error && (<div className="absolute top-20 left-4 bg-red-700 text-white px-4 py-2 rounded-md text-sm max-w-xs">
        {Error}
      </div>)}

      {trailData && (
        <div className="absolute top-4 right-4  bg-gray-900/95 border border-gray-700 rounded-lg p-3 shadow-lg text-white">
          <p className="font-bold">{trailData.full_name}</p>
          <p className="text-sm text-gray-400">{trailData.passport_id}</p>
          <p className="mt-1 font-semibold" style={{ color }}>
            {trailData.risk_level} · {trailData.risk_score}
          </p>
        </div>
      )}
      <MapContainer center={KOLKATA_ENTRY} zoom={7} style={{ height: "500px", width: "100%" }}>

        {/* // 2. TileLayer: Yeh hamari Pizza Sauce hai. 
      // Yeh URL internet se chote-chote map ke square images fetch karta hai. */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
        />

        <FitToTrail points={allPoints} passportId={trailData?.passport_id ?? null} />
        <Polyline positions={polylinePositions} pathOptions={{ color, weight: 3, dashArray: '6 6' }} />

        {/* // 3. Marker & Popup: Yeh hamari Topping hai. */}

        <CircleMarker>
          <Popup>
            <div>
              <p>location</p>
            </div>
          </Popup>
        </CircleMarker>


      </MapContainer>
    </div>
  );
};

export default TrackMap;

