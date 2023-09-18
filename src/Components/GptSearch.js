import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NetflixBackGroundLogo } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
         <div className="fixed -z-10">
        <img className='  md:w-screen h-screen object-cover '    src={NetflixBackGroundLogo}
          alt="Netflix BG Logo"
        ></img>
      </div>
      <div className=''>

        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch