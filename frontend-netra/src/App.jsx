import React, { useState } from 'react'
import Entryform from './pages/Entryform'
import Borderguard from './components/Borderguard'


const App = () => {
  const [Operating, setOperating] = useState('Immigration')
  return (
   
    <>
    <Entryform/>
    {/* <Borderguard/> */}
    
    </>
  )
}

export default App