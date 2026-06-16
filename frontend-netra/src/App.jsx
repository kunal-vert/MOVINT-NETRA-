import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx/Navbar'
import Nationals from './pages/Nationals'
import Deployment from './pages/Deployment'
import GeoTracker from './pages/GeoTracker'
import AlertsPanel from './pages/AlertsPanel'
import MOVINT from './pages/MOVINT'
import Immigration from './components/Transition/Immigration'
import Checkpost from './components/Transition/Checkpost'
import Borderguard from './components/Transition/Borderguard'
import DeploymentLayout from './components/UI/DeploymentLayout'

const App = () => {
  return (
    <div className='bg-gray-700 h-screen'>
      <Navbar />
      <Routes>
        <Route path='/'            element={<MOVINT />} />
        <Route path='/geo-tracker' element={<GeoTracker />} />
        <Route path='/nationals'   element={<Nationals />} />
        <Route path='/alerts'      element={<AlertsPanel />} />

       {/* ye Nested-loop hain  */}
        <Route element={<DeploymentLayout />}> 
          <Route path='/deployment'             element={<Deployment />} />
          <Route path='/deployment/immigration' element={<Immigration />} />
          <Route path='/deployment/checkpost'   element={<Checkpost />} />
          <Route path='/deployment/borderguard' element={<Borderguard />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App