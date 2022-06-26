import axios from 'axios';
import React from 'react'
import { useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Movie from './Movie'
import '../index.css'
import 'swiper/css';

const ListMovie = ({title, requestMovie, isLarge}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(requestMovie).then(response => {
            setMovies(response.data.results);
        })
    }, [requestMovie])

    // console.log(movies);

  return (
    <div className="mt-6">
        <p className='text-white text-2xl font-semibold ml-10 mb-5 uppercase'>{title}</p>
        <Swiper spaceBetween={50} slidesPerView={7} grabCursor={true} >
            {movies.map((item, id) => (                          
            <SwiperSlide key={id}>
                <Movie item={item} isLarge={isLarge}/>                      
                </SwiperSlide>                
        ))}  
        </Swiper>  
      </div>  
  )
}

export default ListMovie