import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularMovies=()=>{
const dispatch=useDispatch()
const getPopularMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', {
        headers: {
            'Authorization': 'Bearer'+process.env.REACT_APP_TMDB_KEY,
            'accept': 'application/json'
        }
    });
    const popularMovies=await data.json()

    dispatch(addPopularMovies(popularMovies.results))

  }

  useEffect(()=>{
   getPopularMovies();
    
  },[])
}
  export default usePopularMovies
