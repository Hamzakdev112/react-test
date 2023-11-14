import React from 'react'
import Home from './pages/Home'
import Sidebar from './components/common/Sidebar'

const App = () => {
  return (
    <div className='app'>
      <Sidebar />  
      <Home />  
    </div>
  )
}

export default App
