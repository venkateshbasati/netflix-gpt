import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const {gptMovieResults,gptTmdbResults}= useSelector((store) => store.gpt);
  if(!gptMovieResults || !gptTmdbResults) return null 

 

  {
    //if no gpt movie results then null because gpt movies data may get get late so... or we can show some shimmer UI
  }
  return (
    <div  className='bg-black  px-3 py-1  my-3 bg-opacity-80 rounded-md mx-1  '>
     {gptMovieResults.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptTmdbResults[index]?.results}
          />
        ))}

    </div>
  )
}

export default GptMovieSuggestions