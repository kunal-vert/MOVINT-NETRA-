import React from 'react'
import icon from './assets/icon.png'  // 

const App = () => {
  return (
    <div>
      <div className='header '>
        <div>
          <p>MOVINT</p>
          <img className='w-12 h-auto' src={icon} alt="MOVINT Icon " />
        </div>
      </div>
    </div>
  )
}

export default App 