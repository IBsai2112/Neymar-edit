import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/fullScreenNav'




const App = () => {



  return (
    <div className='text-white'>
      
     <Navbar/>
     <FullScreenNav/>
      {/* <Routes>  
        <Route path="/" element={<Home/>}/> 
        <Route path= "/agence" element={<Agence/>}/>
        <Route path= "/Projects" element={<Projects/>}/>
      </Routes> */}
    </div>
  )
}

export default App