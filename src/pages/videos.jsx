import React, { useState, useEffect } from 'react';
import {Oval} from "react-loader-spinner";
import { videoUrls } from '../utils/data/videoUrls.js';
import { postData, fetchData } from '../services/videoClient.jsx';


import edutubeEducational from "../assets/images/pages/videos/edutubeEducational.png";


function Videos() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  /* 
  1. awaits and grabs fetched data that is returned from 
  the fetchData and save it to fetchedData variable
  2. update videos state value to the fetchedData value
  3.update isLoading to false as the promise object is resolved
  4.return nothing and exit function
  */
  const fetchAllVideos = async () => {
     const fetchedData = await fetchData();
     setVideos(fetchedData);
     setIsLoading(false);
     return;
    };

  useEffect(() => {
     postData();
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
               * if the currVideo being accessed is undefined or null*/
          videos?.slice(0,10)?.map((currVideo) =>{
            return(
                <li  className='m-auto shadow-lilac w-[350px] border-2 rounded-lg' key={currVideo.id}>
                <video className='  rounded-lg' poster={edutubeEducational} width="100%" height="100%"  controls>
                      <source  src={currVideo.video_url}  type="video/mp4" />
                  Your browser doesn't support the video tag!!! Please update your browser and try again!!!
                </video>
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