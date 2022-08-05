import React from 'react'
import './card.css'


const Card = ({title,image,description,link}) => {
  return (
    <div>
        
<div class="card-container">
<div class="card">
            <div class="face face1">
                <div class="content">
                    <img src={image} alt="" />
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href={link} target="_blank">{title}</a>
                    </h3>
                    <p>{description}</p>
                    <button>View Demo</button>
                </div>
            </div>
        </div>
       
  </div>
    </div>
  )
}

export default Card