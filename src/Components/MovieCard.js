import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_url, moviename}) => {
  if(!poster_url) return null
  return (
    <div className="w-32 md:w-48 pr-3  rounded-md ">
      <img src={IMG_CDN_URL + poster_url} alt="Movie-name"></img>
    </div>
  );
};

export default MovieCard;
