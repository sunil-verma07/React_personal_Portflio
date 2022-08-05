import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'

const App = () => {
  return (
    <div>
     
      <Home/>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App