import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import VideoContainer from "./VideoContainer";
import MovieListContainer from "./MovieListContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResults, addGptMovies } from "../utils/gptSearchSlice";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const gptSearch = useSelector((store) => store.gpt.gptSearch);
 

  return (
    <div>
      <Header />
      { gptSearch ? (
        <GptSearch />
      ) : (
        <>
      
          <VideoContainer />
          <MovieListContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
