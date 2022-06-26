import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import requests from '../config/apiRequest'
import {BsPlayFill} from 'react-icons/bs'
import {AiOutlineCheck} from 'react-icons/ai'
const Main = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() =>{   
        axios.get(requests.requestPopular).then((response) =>{
                setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
            })       
    },[])

    // console.log(movie);

    return (
        <div className="relative w-full h-[720px] bg-gradient-to-b from-transparent to-black">
            <div className="w-full h-full ">
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            </div>
            <div className='absolute top-[30%] pl-16 text-white'>
                <div className='max-w-3xl'>
                    <p className='text-5xl font-bold uppercase'>{movie.title}</p>
                    <p className='italic mt-2'>Phát hành: {movie.release_date}</p>
                </div>
                <div className='max-w-xl text-left my-7'>
                    <p className='text-base'>{movie.overview}</p>
                </div>
                <div className='flex'>
                    <button className='flex justify-center content-center px-6 py-2 mr-4 bg-white/30 text-white font-semibold hover:bg-red-500 transition-all'> 
                    <BsPlayFill size={24}/> Phát
                    </button>
                    <button className='flex justify-center content-center px-6 py-2 mr-4 bg-white/30  text-gray-300 font-semibold hover:bg-black '> <AiOutlineCheck size={24}/>Danh sách của tôi</button>
                </div>
            </div>
        </div>
    )
}

export default Main