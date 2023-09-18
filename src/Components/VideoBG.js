import React from "react";
import { useSelector } from "react-redux";

import useMovieVidoes from "../customHooks/useMovieVidoes";

const VideoBG = ({ movie_Id }) => {
    // we can keep  getMovieVideos data whole thing into a separate custom hook like we did for movie fetch call or we can write 
    useMovieVidoes(movie_Id)
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
 

  return (
    <div>
      <iframe
        className="w-screen mt-6 md:mt-0 aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullScreen
      ></iframe>
    </div>
  );
};

export default VideoBG;
