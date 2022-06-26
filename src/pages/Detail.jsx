import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react'
import  {useParams } from 'react-router-dom';
import {BiListPlus, BiHeart, BiBookmark, BiStar} from 'react-icons/bi'
import CastDetail from './Detail/CastDetail';
import VideoDetail from './Detail/VideoDetail'

const Detail = () => {

    const apiKey = '07ded58c34360f4f86b51d9ebde3f40c'
    const {id} = useParams();
    const URLMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`  
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(URLMovie).then(response =>{
            setMovie(response.data)
            window.scrollTo(0,0);
        })                      
    }, [URLMovie]);

  return (
    <div className="text-white">
        <div className='w-full h-[600px] relative'>
            <img className='w-full h-full object-cover opacity-20' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
        </div>
        <div className='flex absolute top-[100px] left-[150px]'>
            <img className='w-[300px] h-full object-cover rounded'src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <div className='ml-8 mt-8'>
                <p className='text-white text-4xl font-semibold'>{movie.title}</p>
                <div className='flex content-center items-center gap-5 my-5'>
                    <p className='text-3xl p-2 border-2 border-emerald-700 inline-block rounded-full'>{movie.vote_average}</p>
                    <BiListPlus className='cursor-pointer rounded-full bg-[#032541] text-4xl p-2'/>
                    <BiHeart className='cursor-pointer rounded-full bg-[#032541] text-4xl p-2'/>
                    <BiBookmark className='cursor-pointer rounded-full bg-[#032541] text-4xl p-2'/>
                    <BiStar className='cursor-pointer rounded-full bg-[#032541] text-4xl p-2'/>
                </div>
                <p className= 'italic text-white/70 my-5'>{movie.tagline}</p>
                <p className='block text-lg mb-2'>Overview:</p>
                <p className='text-sm max-w-[900px]'>{movie.overview}</p>   
            </div>
        </div>

        <div className='p-10'>
            <p className='font-semibold text-xl mb-3'>Series Cast</p>
            <div className='flex gap-10'>
                <CastDetail id = {id} apiKey={apiKey}/>               
            </div>
        </div>
  
        <VideoDetail id = {id} apiKey={apiKey}/>
        
    </div>
  )
}

export default Detail