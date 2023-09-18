import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideoData } from '../utils/movieSlice';

const useMovieVidoes = (movie_Id) => {
    const dispatch = useDispatch();
    // fetch movie trailer video and update the store with trailer video data
    
  
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movie_Id+"/videos?language=en-US",
        {
          headers: {
            Authorization:
              'Bearer'+process.env.REACT_APP_TMDB_KEY,
            accept: "application/json",
          },
        }
      );
  
      const movieVideosData = await data.json();

  
      const filterTrailers = movieVideosData.results.filter((video) => video.type === "Trailer" );
  
      const trailer = filterTrailers.length ? filterTrailers[0]  : movieVideosData.results[0];
      {
        //if no trailer are there then take movieVideosData.results[0] which can have other vidoe clips like songs, teaser
        //Also, we can get trailer youtube key by maintaining useState variables but , instead of that we are storing trailer info
        // in redux store
      }
  
      dispatch(addTrailerVideoData(trailer));
    };
    useEffect(() => {
      getMovieVideos();
    }, []);
}

export default useMovieVidoes
