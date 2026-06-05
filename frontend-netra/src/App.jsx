import React, { useState } from 'react'
import Entryform from './pages/Entryform'
import Borderguard from './components/Borderguard'
import Checkpost from './components/Checkpost'

const App = () => {
  const [view, setView] = useState('entryform')

  return (
    <div>
      <Checkpost/>
      
      {/* {view === 'entryform' ? (
        <Entryform onBorderGuardClick={() => setView('borderguard')} />
      ) : (
        <Borderguard onImmigrationClick={() => setView('entryform')} />
      )} */}
    </div>
  )
}

export default App