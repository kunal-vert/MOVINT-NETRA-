import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx/Navbar'
import Nationals from './pages/Nationals'
import Entryform from './pages/Entryform'
import GeoTracker from './pages/GeoTracker'
import AlertsPanel from './pages/AlertsPanel'
import MOVINT from './pages/MOVINT'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<MOVINT />} />
        <Route path='/nationals' element={<Nationals />} />
        <Route path='/deployment' element={<Entryform />} />
        <Route path='/geo-tracker' element={<GeoTracker />} />
        <Route path='/alerts' element={<AlertsPanel />} />
      </Routes>
    </div>
  )
}

export default App