import LeafletMap from '../components/GeoTracker/LeafletMap'
import "../components/GeoTracker/Leaflet.theme.css";

const FEATURES = [
  { icon: '📍', label: 'Marker', desc: 'Click the marker to open a popup' },
  { icon: '🔴', label: 'Circle', desc: '500m radius circle in red' },
  { icon: '🔷', label: 'Polygon', desc: 'A triangle polygon shape' },
  { icon: '🖱️', label: 'Click Event', desc: 'Click anywhere on the map to see coordinates' },
]

export default function App() {
  return (
    // Full screen layout
    <div className="flex flex-col h-screen bg-gray-950 text-white font-sans">

      {/* ── Header ── */}
      <header className="flex items-center justify-between px-6 py-3 bg-gray-900 border-b border-gray-800 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🗺️</span>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">LeafletMap</h1>
            <p className="text-xs text-gray-400"></p>
          </div>
        </div>
        
      </header>

      {/* ── Body: sidebar + map ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── Sidebar ── */}
        <aside className=" w-64 shrink-0 bg-gray-900 border-r border-gray-800 p-4 flex flex-col   overflow-y-auto">
            <div className="flex-1 overflow-y-auto p-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Map Features</p>
            <ul className="flex flex-col gap-3">
             
            </ul>
          </div>

        
        </aside>

      
        <main className="flex-1 p-4">
          <div className="w-full h-full rounded-xl overflow-hidden border border-gray-800    shadow-xl">
            <LeafletMap />
          </div>
        </main>

      </div>
    </div>
  )
}