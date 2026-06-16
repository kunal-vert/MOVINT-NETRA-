import { useState } from 'react'
import nationalsData from '../components/Data/Nationals'




// ─── HELPERS ───────────────────────────────────────────────────────────────────
const riskColor = (level) => {
  if (level === 'CRITICAL') return 'text-red-400'
  if (level === 'HIGH') return 'text-orange-400'
  if (level === 'MEDIUM') return 'text-yellow-400'
  return 'text-green-400'
}

const riskBadgeBg = (level) => {
  if (level === 'CRITICAL') return 'bg-red-900 text-red-400 border border-red-700'
  if (level === 'HIGH') return 'bg-orange-900 text-orange-400 border border-orange-700'
  if (level === 'MEDIUM') return 'bg-yellow-900 text-yellow-400 border border-yellow-700'
  return 'bg-green-900 text-green-400 border border-green-700'
}

const flagBadge = (flag) => {
  const styles = {
    CR: 'bg-red-800 text-red-300',
    EX: 'bg-orange-800 text-orange-300',
    OS: 'bg-yellow-800 text-yellow-300',
    NEW: 'bg-blue-800 text-blue-300',
  }
  return styles[flag] || 'bg-gray-700 text-gray-300'
}

// ─── MODAL ─────────────────────────────────────────────────────────────────────
function NationalModal({ person, onClose }) {
  const isExpired = person.passportExpiry < new Date().toISOString().split('T')[0]

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 font-[font1] text-2xl"
      onClick={onClose}
    >
      {/* Modal box — stop click from closing when clicking inside */}
      <div
        className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-start justify-between p-6 border-b border-gray-700">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold text-gray-400 bg-gray-800 px-2 py-1 rounded">
                {person.countryCode}
              </span>
              <h2 className="text-xl font-bold text-white">{person.name}</h2>
              {person.flags.includes('CR') && (
                <span className="text-xs font-bold text-red-400 border border-red-600 px-2 py-0.5 rounded flex items-center gap-1">
                  ⚠ CRIMINAL RECORD
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400">
              {person.passportId} · {person.nationality}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl font-bold ml-4"
          >
            ✕
          </button>
        </div>

        {/* ── Risk Assessment Block ── */}
        <div className="m-6 bg-red-950 border border-red-800 rounded-lg p-5">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Risk Assessment</p>
          <div className="flex items-center gap-4 mb-4">
            <span className={`text-5xl font-black ${riskColor(person.riskLevel)}`}>
              {person.riskScore}
            </span>
            <div>
              <p className={`text-2xl font-bold ${riskColor(person.riskLevel)}`}>
                {person.riskLevel}
              </p>
              <p className="text-xs text-gray-400">composite score / 99</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {person.riskReasons.map((reason, i) => (
              <span
                key={i}
                className="text-xs bg-gray-800 text-gray-300 border border-gray-600 px-3 py-1 rounded-full"
              >
                {reason}
              </span>
            ))}
          </div>
        </div>

        {/* ── Details Grid ── */}
        <div className="px-6 pb-4 grid grid-cols-3 gap-4">
          {[
            { label: 'Occupation', value: person.occupation },
            { label: 'Nationality', value: person.nationality },
            { label: 'Date of Birth', value: person.dob },
            { label: 'Visa Method', value: person.visaType },
            { label: 'Permit Days', value: `${person.permitDays} days` },
            { label: 'Reason to Visit', value: person.reasonToVisit },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</p>
              <p className="text-sm text-white font-medium">{value}</p>
            </div>
          ))}
        </div>

        {/* ── Passport / Overstay / NE Visits row ── */}
        <div className="px-6 pb-4 grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Passport Expiry</p>
            <p className={`text-sm font-bold ${isExpired ? 'text-red-400' : 'text-yellow-400'}`}>
              {person.passportExpiry}
              {person.daysLeft ? ` (${person.daysLeft}d left)` : isExpired ? ' — EXPIRED' : ''}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Overstay Flag</p>
            <p className={`text-sm font-bold ${person.overstay ? 'text-red-400' : 'text-green-400'}`}>
              {person.overstay ? 'YES' : 'No'}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Prior NE Visits</p>
            <p className="text-sm font-bold text-orange-400">{person.neVisits}</p>
          </div>
        </div>

        {/* ── Visit History ── */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            📋 Visit History — Northeast India
          </p>
          <div className="space-y-3">
            {person.visitHistory.length === 0 ? (
              <p className="text-sm text-gray-500">No visit history recorded.</p>
            ) : (
              person.visitHistory.map((v) => (
                <div
                  key={v.visit}
                  className="border border-gray-700 rounded-lg p-4 bg-gray-800"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-orange-400 uppercase">
                        Visit #{v.visit}
                      </span>
                      <span className="text-sm font-semibold text-white">{v.location}</span>
                      <span className="text-xs text-gray-400">· {v.zone}</span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {Math.round((new Date(v.to) - new Date(v.from)) / (1000 * 60 * 60 * 24))}d
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-1">
                    📅 {v.from} → {v.to} &nbsp;·&nbsp; 📍 {v.checkpost}
                  </p>
                  <p className="text-xs text-gray-500 italic">{v.note}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
const FILTERS = ['ALL', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW']

const Nationals = () => {
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter + search logic
  const filtered = nationalsData.filter((n) => {
    const matchesFilter = activeFilter === 'ALL' || n.riskLevel === activeFilter
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      n.name.toLowerCase().includes(q) ||
      n.nationality.toLowerCase().includes(q) ||
      n.passportId.toLowerCase().includes(q) ||
      n.occupation.toLowerCase().includes(q)
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">

      {/* ── Page Header ── */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Foreign National Registry</h1>
          <p className="text-sm text-gray-400 mt-1">Northeast India · ILP Monitoring</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-red-400 border border-red-700 bg-red-950 px-3 py-1.5 rounded-lg font-semibold">
            🔴 {nationalsData.filter(n => n.riskLevel === 'CRITICAL').length} CRITICAL
          </span>
          <button className="text-xs bg-orange-500 hover:bg-orange-400 text-black font-bold px-4 py-1.5 rounded-lg transition">
            + New Entry
          </button>
        </div>
      </div>

      {/* ── Filter Bar + Search ── */}
      <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
        <div className="flex gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-bold px-4 py-1.5 rounded-lg border transition ${
                activeFilter === f
                  ? 'bg-orange-500 border-orange-400 text-black'
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search name, nationality, occupation..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 rounded-lg px-4 py-1.5 w-72 focus:outline-none focus:border-orange-500"
        />
      </div>

      {/* ── Table ── */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-gray-500 uppercase tracking-widest border-b border-gray-800 bg-gray-950">
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Nationality</th>
              <th className="text-left px-4 py-3">Occupation</th>
              <th className="text-left px-4 py-3">Visa</th>
              <th className="text-center px-4 py-3">NE Visits</th>
              <th className="text-left px-4 py-3">Last Location</th>
              <th className="text-left px-4 py-3">Risk Score</th>
              <th className="text-left px-4 py-3">Expiry</th>
              <th className="text-left px-4 py-3">Flags</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center text-gray-500 py-12">
                  No nationals found.
                </td>
              </tr>
            ) : (
              filtered.map((n, i) => {
                const isExpired = n.passportExpiry < new Date().toISOString().split('T')[0]
                return (
                  <tr
                    key={n.id}
                    onClick={() => setSelectedPerson(n)}
                    className={`border-b border-gray-800 cursor-pointer hover:bg-gray-800 transition ${
                      i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-950'
                    }`}
                  >
                    {/* Name */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-400 bg-gray-800 px-1.5 py-0.5 rounded">
                          {n.countryCode}
                        </span>
                        <div>
                          <p className="font-semibold text-white">{n.name}</p>
                          <p className="text-xs text-gray-500">{n.passportId}</p>
                        </div>
                      </div>
                    </td>
                    {/* Nationality */}
                    <td className="px-4 py-3 text-gray-300">{n.nationality}</td>
                    {/* Occupation */}
                    <td className="px-4 py-3 text-gray-300">{n.occupation}</td>
                    {/* Visa */}
                    <td className="px-4 py-3 text-gray-400 text-xs">{n.visaType}</td>
                    {/* NE Visits */}
                    <td className="px-4 py-3 text-center">
                      <span className={`font-bold text-base ${n.neVisits >= 3 ? 'text-orange-400' : 'text-gray-300'}`}>
                        {n.neVisits}
                      </span>
                    </td>
                    {/* Last Location */}
                    <td className="px-4 py-3">
                      <p className="text-white">{n.lastLocation}</p>
                      <p className="text-xs text-gray-500">{n.lastSeen}</p>
                    </td>
                    {/* Risk Score */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-700 rounded-full h-1.5">
                          <div
                            className="h-1.5 rounded-full bg-red-500"
                            style={{ width: `${n.riskScore}%` }}
                          />
                        </div>
                        <span className={`font-bold ${riskColor(n.riskLevel)}`}>{n.riskScore}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${riskBadgeBg(n.riskLevel)}`}>
                          {n.riskLevel}
                        </span>
                      </div>
                    </td>
                    {/* Expiry */}
                    <td className="px-4 py-3">
                      {isExpired ? (
                        <span className="text-xs font-bold text-red-400 flex items-center gap-1">
                          ⚠ EXPIRED
                        </span>
                      ) : n.daysLeft ? (
                        <span className="text-xs text-yellow-400">{n.daysLeft}d left</span>
                      ) : (
                        <span className="text-xs text-green-400">✓ Valid</span>
                      )}
                    </td>
                    {/* Flags */}
                    <td className="px-4 py-3">
                      <div className="flex gap-1 flex-wrap">
                        {n.flags.map((f) => (
                          <span
                            key={f}
                            className={`text-xs font-bold px-1.5 py-0.5 rounded ${flagBadge(f)}`}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>

        {/* ── Footer ── */}
        <div className="px-4 py-2 border-t border-gray-800 text-xs text-gray-500 flex gap-4">
          <span>Showing {filtered.length} of {nationalsData.length}</span>
          <span>CR = Criminal Record</span>
          <span>OS = Overstay</span>
          <span>EX = Expiring</span>
          <span>NEW = First-time</span>
        </div>
      </div>

      {/* ── Modal (only renders when a person is selected) ── */}
      {selectedPerson && (
        <NationalModal
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
        />
      )}
    </div>
  )
}

export default Nationals