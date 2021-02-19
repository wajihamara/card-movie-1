import React from "react";
import MovieCard from './MovieCard'
import "./App.css";

const MoviesList = ({ movies }) => {
  return (
    <div className="flexx">
      {movies.map((el,i) => (
       
        <MovieCard movie={el} key={i}/>
      ))}
    </div>
  );
};

export default MoviesList;
