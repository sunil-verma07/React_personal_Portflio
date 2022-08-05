import React from 'react'
import Card from '../../Components/Card/Card'
import './portfolio.css'
import ecommerce from '../../assets/e-commerce.jpg'
import social from '../../assets/social-mobile-app.jpg'
import Heading from '../../Components/Heading/Heading'

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
      <Heading preHeading='my portfolio' heading='recent works' />
      <Card image={social} title='Shop-App' description="this is shop app"/>
      </div>
    </div>
  )
}

export default Portfolio