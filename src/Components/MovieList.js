import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

 
  return (
    <div className="py-3 px-4 text-white ">
      <h2 className="py-2 px-1  text-base md:text-xl font-medium">{title}</h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex justify-around ">
          {movies?.map((movie) => ( <MovieCard key={movie.id} poster_url={movie?.poster_path}  />  ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
