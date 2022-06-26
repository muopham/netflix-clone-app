import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'

const GenreDetail = ({id, apiKey}) => {
  
  const URLCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    axios.get(URLCast).then(response =>{
      setCasts(response.data.cast.slice(0,6))      
  })   
  }, [URLCast]);

  return (
    <>
      {
      casts.map((cast) =>(
          <div key={cast.id}>
              <img className='w-[180px] object-cover rounded' src={`https://image.tmdb.org/t/p/w500${cast?.profile_path}`} alt="" />
              <p className='mt-2'>{cast.name}</p>
          </div>
      ))
  }
    </>
  )
}

export default GenreDetail