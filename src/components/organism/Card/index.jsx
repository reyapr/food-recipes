import React from 'react'
import './styles.css'

const Card = ({ image, name, creator, review, rating }) => {
  return (
    <div className="card">
      <div className="header">
        <div style={backgRoundStyle(image)} />
        <div className="rating">
          <p className="rating-text">{rating}</p>
        </div>
      </div>
      <div className="card-content">
        <div className="hidden-text-overflow name space-content text-blue-color">
          {name} 
        </div>
        <div className="space-content text-blue-color">
          By: {creator}
        </div>
        <div className="space-content review">
          {review}
        </div>
      </div>
    </div>
  )
}

const backgRoundStyle = (image) => ({
  backgroundImage: `url(${image})`,
  height: "125px",
  backgroundPosition: "center",
  backgroundSize: "cover"
})

export default Card