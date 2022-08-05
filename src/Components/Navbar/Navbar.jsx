import React, { useState } from 'react'
import './navbar.css'
import { Fragment } from 'react'
import {IoIosPerson} from 'react-icons/io'
import {AiFillPhone,AiFillHome} from 'react-icons/ai'
import {GoProject} from 'react-icons/go'

const Navbar = () => {
    const [activeNav,setActiveNav] = useState('#home')
  return (
    <Fragment>
        <div className="icons">
            <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiFillHome/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoIosPerson/></a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GoProject/></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillPhone/></a>
        </div>
    </Fragment>
  )
}

export default Navbar