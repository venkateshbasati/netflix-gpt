import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{
const dispatch=useDispatch()
const getNowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDMxNGJiYzZmN2RlODE0ZTM5OTJiMGY0OTlkMWIxZSIsInN1YiI6IjY1MDQyMTI5ZmZjOWRlMGVlMjBhZDk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suVD4hUSMxTJpAs8Ch8QeHMhg8KqkIW6ZT4-SgsBCNI',
        'accept': 'application/json'
    }
});
    const nowPlayingmovies=await data.json()

    dispatch(addNowPlayingMovies(nowPlayingmovies.results))

  }

  useEffect(()=>{
   getNowPlayingMovies();
    
  },[])
}
  export default useNowPlayingMovies