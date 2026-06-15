// App.jsx
// Tailwind layout wrapping LeafletMap
// Layout: header + sidebar (info panel) + map

import LeafletMap from '../components/LeafletMap'

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
        <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
          Quick Start Demo
        </span>
      </header>

      {/* ── Body: sidebar + map ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── Sidebar ── */}
        <aside className="w-64 shrink-0 bg-gray-900 border-r border-gray-800 p-4 flex flex-col gap-4 overflow-y-auto">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Map Features</p>
            <ul className="flex flex-col gap-3">
              {FEATURES.map((f) => (
                <li key={f.label} className="flex items-start gap-3 bg-gray-800 rounded-lg p-3">
                  <span className="text-xl mt-0.5">{f.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{f.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <div className="bg-blue-950 border border-blue-800 rounded-lg p-3">
              <p className="text-xs text-blue-300 font-semibold mb-1">📌 Centered on</p>
              <p className="text-xs text-blue-400">New Delhi, India</p>
              <p className="text-xs text-gray-500 mt-1">28.6139° N, 77.2090° E</p>
            </div>
          </div>
        </aside>

        {/* ── Map Panel ── */}
        {/* 
          IMPORTANT: The map <div> needs a concrete height.
          Here, flex-1 + h-full does the job because this div
          is inside a flex container that has overflow-hidden.
          If the map is invisible, this is the first thing to check.
        */}
        <main className="flex-1 p-4">
          <div className="w-full h-full rounded-xl overflow-hidden border border-gray-800    shadow-xl">
            <LeafletMap />
          </div>
        </main>

      </div>
    </div>
  )
}