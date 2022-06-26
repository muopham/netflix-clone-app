import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
const VideoDetail = ({id, apiKey}) => {

    const [video, setVideo] = useState([]);

    const URLVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`

    useEffect(() => {
        const getVideos = async () => {
            const res = await axios.get(URLVideo);
            setVideo(res.data.results);
        }
        getVideos();     
    }, [URLVideo]);
    
  return (
    <div className="px-20 mt-8">
        {
          video.map(video =>(
            <div key={video.id} className='mt-14'>
              <p className="pb- pl-5 text-2xl font-semibold">{video.type}</p>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}                
                width="100%"
                height={'700px'}
                title="video"
                
              ></iframe>
            </div>
          ))
        }

    </div>
  )
}

export default VideoDetail