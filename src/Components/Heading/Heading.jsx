import React from 'react'
import './heading.css'
const Heading = ({preHeading,heading}) => {
  return (
    <div className="heading">
        <p>{preHeading}</p>
        <h1>{heading}</h1>
    </div>
  )
}

export default Heading