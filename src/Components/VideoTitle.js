import React from 'react'

const VideoTitle = ({title, desc}) => {
  return (
    <div className='  px-6 md:px-16 pt-[20%] bg-gradient-to-r from-gray-950 aspect-video w-screen absolute text-white'>

        <h2 className=' font-medium md:font-bold  text-2xl md:text-4xl  py-4'>{title}</h2>
        <p className=' font-normal hidden md:inline-block text-lg py-3 w-5/12'>{desc}</p>
        <div className='md:mt-0 -mt-3'>
            <button className='bg-white text-black mx-1 rounded-md   text-lg  font-normal md:font-medium hover:bg-opacity-75 px-6 md:px-11 py-0 md:py-2'>  Play</button>
            <button className='bg-gray-600 text-white bg-opacity-80 mx-1 hidden md:inline-block  font-medium text-lg rounded-md hover:bg-opacity-90   px-8  py-2'> ⓘ More info</button>
        </div>
    </div>
  )
}

export default VideoTitle