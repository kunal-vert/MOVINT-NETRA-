import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx/Navbar'
import Nationals from './pages/Nationals'
import Deployment from './pages/Deployment'
import GeoTracker from './pages/GeoTracker'
import AlertsPanel from './pages/AlertsPanel'
import MOVINT from './pages/MOVINT'


const App = () => {
  return (
    <div className='bg-gray-700 h-screen'>
      <Navbar />
      {/* <Deployment/> */}
      
      
      <Routes>
        <Route path='/' element={<MOVINT />} />
        <Route path='/geo-tracker' element={<GeoTracker />} />
        <Route path='/nationals' element={<Nationals />} />
        <Route path='/alerts' element={<AlertsPanel />} />
        <Route path='/deployment' element={<Deployment />} />
      </Routes>
    </div>
  )
}

export default App