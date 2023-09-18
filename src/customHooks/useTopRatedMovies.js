import { useDispatch } from "react-redux";
import {   addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRatedMovies=()=>{
const dispatch=useDispatch()
const getTopRatedMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', {
        headers: {
            'Authorization': 'Bearer'+process.env.REACT_APP_TMDB_KEY,
            'accept': 'application/json'
        }
    });
    const topRatedMovies=await data.json()

    dispatch(addTopRatedMovies(topRatedMovies.results))

  }

  useEffect(()=>{
   getTopRatedMovies();
    
  },[])
}
  export default useTopRatedMovies
