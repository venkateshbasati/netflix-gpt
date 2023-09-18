import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieListContainer = () => {
    const movies= useSelector((store)=>store.movies)
    console.log(movies)
  return (

    movies && <div className=' bg-black   bg-opacity-80'>
      <div className=' -mt-24 md:-mt-52  relative z-30'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top-Rated"} movies={movies?.topRatedMovies} />
        </div>
    </div>
  )
}

export default MovieListContainer