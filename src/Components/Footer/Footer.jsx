import React from 'react'
import './footer.css'
import {AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
            <div className="my-name">SUNIL</div>
            <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">about</a>
                <a href="#portfolio">portfolio</a>
                <a href="#contact">contact</a>
            </div>
            <div className="footer-icons">
                <span><AiFillFacebook/></span>
                <span><AiFillInstagram/></span>
                <span><AiOutlineTwitter/></span>
            </div>
            <p>All Rights Reserved</p>
        </div>
  )
}

export default Footer