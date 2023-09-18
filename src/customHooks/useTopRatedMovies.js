import { useDispatch } from "react-redux";
import {   addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRatedMovies=()=>{
const dispatch=useDispatch()
const getTopRatedMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDMxNGJiYzZmN2RlODE0ZTM5OTJiMGY0OTlkMWIxZSIsInN1YiI6IjY1MDQyMTI5ZmZjOWRlMGVlMjBhZDk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suVD4hUSMxTJpAs8Ch8QeHMhg8KqkIW6ZT4-SgsBCNI',
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