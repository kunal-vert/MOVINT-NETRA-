import React, { useState } from 'react'
import Entryform from './pages/Entryform'
import Borderguard from './components/Borderguard'
import Checkpost from './components/Checkpost'

const App = () => {
  const [view, setView] = useState('entryform')

  return (
    <div>
      {view === 'entryform' && (
        <Entryform
          onBorderGuardClick={() => setView('borderguard')}
          onCheckpostClick={() => setView('checkpost')}
        />
      )}
      {view === 'borderguard' && (
        <Borderguard
          onImmigrationClick={() => setView('entryform')}
          onCheckpostClick={() => setView('checkpost')}
        />
      )}
      {view === 'checkpost' && (
        <Checkpost
          onImmigrationClick={() => setView('entryform')}
          onBorderGuardClick={() => setView('borderguard')}
        />
      )}
    </div>
  )
}

export default App