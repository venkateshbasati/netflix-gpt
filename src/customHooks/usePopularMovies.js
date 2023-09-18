import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularMovies=()=>{
const dispatch=useDispatch()
const getPopularMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDMxNGJiYzZmN2RlODE0ZTM5OTJiMGY0OTlkMWIxZSIsInN1YiI6IjY1MDQyMTI5ZmZjOWRlMGVlMjBhZDk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suVD4hUSMxTJpAs8Ch8QeHMhg8KqkIW6ZT4-SgsBCNI',
            'accept': 'application/json'
        }
    });
    const popularMovies=await data.json()
    console.log(popularMovies.results)
    dispatch(addPopularMovies(popularMovies.results))

  }

  useEffect(()=>{
   getPopularMovies();
    
  },[])
}
  export default usePopularMovies