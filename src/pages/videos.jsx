import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postVideo, fetchVideos } from '../services/videoClient.jsx';

import {Oval} from "react-loader-spinner";

import Video from '../components/videos/video.jsx';


import edutubeEducational from "../assets/images/pages/videos/edutubeEducational.png";


function Videos() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  /* 
  1. awaits and grabs fetched data that is returned from 
  the fetchData and save it to fetchedData variable
  2. update videos state value to the fetchedData value
  3. update isLoading to false as the promise object is resolved
  4. return nothing and exit function
  */
  const fetchAllVideos = async () => {
     const fetchedVideos = await fetchVideos();
     setVideos(fetchedVideos);
     setIsLoading(false);
     return;
    };

  useEffect(() => {
    /**
     * 1. pushed videos to server already */
     //postVideo();
    fetchAllVideos();
  }, []);

  
   return (
    <div>
      {/**
       * 1. while the videos load render a loader spinner when the videos promises is
       * resolved display a list of videos */}
       {
        isLoading ? (
          <div className='flex justify-center items-center absolute inset-y-1/2 inset-x-1/2  z-10'>
              <Oval width={60} height={60} color="#c2a3fd"/>
           </div>  
        ) : (
           <ul className='w-10/12 m-auto grid justify-center grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-8 gap-x-8 '>
            {
              /**
               * 1. optional chaining to prevent an error being thrown 
               * if the currVideo being accessed is undefined or null
               * */
          videos?.slice(0,460)?.map((currVideo) =>{
            return(
                <li  className='m-auto shadow-lilac border-2 rounded-lg' key={currVideo.id}> 
                  <Link to={`/videos/${currVideo.id}`} state={currVideo}> 
                    <Video video_thumbnail={edutubeEducational} video_url={currVideo.video_url} video_title={currVideo.title }/>
                  </Link>
                </li>
            )
          })
            }
           </ul>
        )
       }
       {
        
       }

       {
        
       }
    </div>
  );
}

export default Videos;
