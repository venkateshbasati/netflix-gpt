import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{
const dispatch=useDispatch()
const getNowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', {
    headers: {
        'Authorization': 'Bearer'+process.env.REACT_APP_TMDB_KEY,
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
