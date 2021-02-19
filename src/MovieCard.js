import React from 'react'
import  "./App.css";
import ReactStars from "react-rating-stars-component";


const MovieCard = ({movie}) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  
  
    return (
      <div className="flex">
        <div className="pad">{movie.name}</div>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />

        <div className="pad">
          <img src={movie.image} alt="" width="120px" />
        </div>

        <div className="pad">{movie.rate}</div>
        <div className="pad">{movie.description}</div>
      </div>
    );
}

export default MovieCard
