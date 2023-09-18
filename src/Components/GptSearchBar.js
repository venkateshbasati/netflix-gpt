import React, { useRef } from 'react'
import { language } from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI'
import { addGptMovieList, addGptMovieResults, addGptMovies } from '../utils/gptSearchSlice'

const GptSearchBar = () => {
    const lang_key=useSelector((store)=>store.config.lang_key)
    const dispatch =useDispatch()

    const searchRef=useRef(null)

    const searchgptMovieTMDB=async(movie)=>{
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', {
        headers: {
            'Authorization': 'Bearer'+process.env.REACT_APP_TMDB_KEY,
            'accept': 'application/json'
        }
    });    
    
      const movieresults= await data.json()
      return movieresults
    
    }
    const handleGPTSearch= async()=>{
      const gptQuery="Act as a Movie Recommendation System and give me results for query :"+ searchRef.current.value + ". give me  4 results comma separated like the example show here Example: Anji, NAK, Happy!, Pokiri." 
      const gptResults= await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
       
    
           //if gptResults?.choices are valid then only give gptMovies
         if(gptResults?.choices){
         
          const gptMovies=gptResults.choices[0]?.message?.content?.split(", ")
        
         
 // for each movie we will search TMDB API
          const promiseArray=gptMovies.map(movie=>searchgptMovieTMDB(movie))
          // this will give promise array, searchgptMovieTMDB is async function  and returns the results late and map function will not  wait for  the arrival of data, it'll execute all (movie) at once  
         
          // So, we have to write again promise.all(promiseArray) to get the full list of movie data
          const gptTMDBresults=await Promise.all(promiseArray)
 
          dispatch(addGptMovies(gptMovies))
          dispatch(addGptMovieResults(gptTMDBresults))

    }
  }

  return (
    <div className='pt-[45%] md:pt-[15%] flex justify-center ' >
        <form className='bg-black  w-5/6 md:w-5/12 rounded-lg grid grid-cols-10 ' onSubmit={(e)=>e.preventDefault()}>
    
            <input ref={searchRef} type="text" placeholder={language[lang_key].gptSearchPlaceholder} className='p-2 m-2 bg-slate-700 col-span-7 md:col-span-8 text-white  text-lg bg-opacity-60'></input>
            <button className='bg-red-600  text-white py-2 px-4  col-span-3 md:col-span-2 rounded-lg m-2' onClick={handleGPTSearch}>{language[lang_key].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar

