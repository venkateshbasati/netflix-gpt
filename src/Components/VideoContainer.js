import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBG from './VideoBG'

const VideoContainer = () => {
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
  {
    // if nowPlayingMovies are not present ,   movies will be null
    // so doing early return
  } 
  if(!movies) return
  
  const listedMovie=movies[0];

  const {original_title, overview,id}=listedMovie

  return (
    <div className=' pt-[20%] bg-black md:pt-0 md:bg-none'>
      <VideoTitle title={original_title} desc={overview} />
      <VideoBG movie_Id={id}/>
    </div>
  )
}

export default VideoContainer