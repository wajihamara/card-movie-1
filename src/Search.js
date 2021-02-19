import React from "react";
import ReactStars from "react-rating-stars-component";

const search = ({ search, setRate }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search amovie"
        onChange={(e) => search(e.target.value)}
      />
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      ,
    </div>
  );
};

export default search;
