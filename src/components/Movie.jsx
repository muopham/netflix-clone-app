import React from 'react'

const Movie = ({item, isLarge}) => {
  return (    
        <div className='w-[200px] mx-2 inline-block cursor-pointer hover:scale-110 transition-all'>
            <img className='w-full h-auto object-cover' src={`https://image.tmdb.org/t/p/w500/${isLarge ? item?.poster_path : item?.backdrop_path}`} title={item.title}/>          
        </div>   
  )
}

export default Movie