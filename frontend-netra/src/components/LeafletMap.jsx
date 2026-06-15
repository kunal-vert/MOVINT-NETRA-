// LeafletMap.jsx
// Raw Leaflet.js in React — no react-leaflet dependency needed
// Covers: map init, OSM tiles, marker, popup, click event

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// ─── Fix broken marker icons in Vite/Webpack ───────────────────────────────
// Leaflet's default icon paths break at build time. This patches them.
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})
// ───────────────────────────────────────────────────────────────────────────

export default function LeafletMap() {
  const mapDivRef = useRef(null)    // ref to the actual <div> in the DOM
  const mapInstanceRef = useRef(null) // ref to the Leaflet map instance

  useEffect(() => {
    // Guard: if map already exists (React StrictMode runs effects twice), skip
    if (mapInstanceRef.current) return

    // 1. Create the map and center it (lat, lng, zoom)
    const map = L.map(mapDivRef.current).setView([28.6139, 77.2090], 13)
    mapInstanceRef.current = map

    // 2. Add OpenStreetMap tiles (free, no API key needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    // 3. Add a marker with a popup
    L.marker([28.6139, 77.2090])
      .addTo(map)
      .bindPopup('<b>New Delhi</b><br>Capital of India 🇮🇳')
      .openPopup()

    // 4. Add a circle (from the official quick-start)
    L.circle([28.6200, 77.2200], {
      color: '#ef4444',
      fillColor: '#f87171',
      fillOpacity: 0.4,
      radius: 500,
    })
      .addTo(map)
      .bindPopup('500m radius circle')

    // 5. Add a polygon
    L.polygon([
      [28.630, 77.210],
      [28.625, 77.230],
      [28.615, 77.220],
    ])
      .addTo(map)
      .bindPopup('A polygon shape')

    // 6. Click event — shows lat/lng in a popup wherever you click
    map.on('click', (e) => {
      L.popup()
        .setLatLng(e.latlng)
        .setContent(`📍 Clicked at:<br><code>${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}</code>`)
        .openOn(map)
    })

    // Cleanup: remove the map when the component unmounts
    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, []) // empty deps → runs once after mount

  return (
    <div
      ref={mapDivRef}
      className="w-full h-full rounded-xl overflow-hidden"
      // h-full works because the parent (in App.jsx) has an explicit height
    />
  )
}