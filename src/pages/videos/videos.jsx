//importing react
import React from 'react';
// Importing the Video component
import Video from '../../components/videos/video.jsx'; 
// Importing the video thumbnail image
import edutubeEducational from "../../assets/images/pages/videos/edutubeEducational.png"; 
// Importing custom hook for handling videos(functions)
import { useVideos } from './videoFunctions.jsx'; 
// Importing the LoadingSpinner component
import LoadingSpinner from '../../components/ui/loadingSpinner.jsx'; 

function Videos() {
  // Destructuring values from the custom hook useVideos
  const { videos, isLoading, onClickHandler } = useVideos();

  return (
    <div>
      {isLoading ? ( 
        // Conditional rendering based on isLoading state
        // Display a loading spinner when isLoading is true
        <div className='flex justify-center items-center absolute inset-y-1/2 inset-x-1/2 z-10'>
          <LoadingSpinner/>
        </div>
      ) : (
        // Display the list of videos when isLoading is false
        <ul className='w-10/12 m-auto grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8'>
          {/* Mapping through the videos array to display each video */}
          {videos?.slice(0, 460)?.map((currVideo) => (
            <li
              // Setting the unique key for each video item
              key={currVideo.id} 
              className='m-auto shadow-lilac border-2 rounded-lg cursor-pointer'
            >
              {/* Rendering the Video component for each video */}
              <Video
                // Passing onClickHandler function as prop
                onClickHandler={onClickHandler} 
                // Passing current video data as prop
                videoData={currVideo} 
                // Passing video thumbnail as prop
                video_thumbnail={edutubeEducational} 
                // Passing video URL as prop
                video_url={currVideo.video_url} 
                // Passing video title as prop
                video_title={currVideo.title} 
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Videos;
