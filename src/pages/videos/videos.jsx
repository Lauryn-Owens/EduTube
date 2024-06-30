// importing React and necessary hooks from react
import React, { useState } from 'react';
// importing the Video component
import Video from '../../components/videos/video.jsx'; 
// importing the video thumbnail image
import edutubeEducational from "../../assets/images/pages/videos/edutubeEducational.png"; 
// importing custom hook for handling videos
import { useVideos } from './videoFunctions.jsx'; 
// importing the LoadingSpinner component
import LoadingSpinner from '../../components/ui/loadingSpinner.jsx'; 
// importing loadMoreVideos function
import { loadMoreVideos } from './videoFunctions.jsx';

function Videos() {
  // destructuring values from the custom hook useVideos
  const { videos, isLoading, onClickHandler } = useVideos();
  // state to track how many videos have been loaded
  //initial count of videos loaded
  const [loadedVideosCount, setLoadedVideosCount] = useState(20); 

  // function to load more videos when the button is clicked
  const handleLoadMore = () => {
    loadMoreVideos(loadedVideosCount, setLoadedVideosCount);
  };

  return (
    <div>
      {isLoading ? ( 
        // conditional rendering based on isLoading state
        // display a loading spinner when isLoading is true
        <div className='flex justify-center items-center absolute inset-y-1/2 inset-x-1/2 z-10'>
          <LoadingSpinner/>
        </div>
      ) : (
        // display the list of videos when isLoading is false
        <>
          <ul className='w-10/12 m-auto grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8'>
            {/* mapping through the videos array to display each video */}
            {videos?.slice(0, loadedVideosCount)?.map((currVideo) => (
              <li
                // setting the unique key for each video item
                key={currVideo.id} 
                className='m-auto shadow-lilac border-2 rounded-lg cursor-pointer'
              >
                {/* rendering the Video component for each video */}
                <Video
                  // passing onClickHandler function as prop
                  onClickHandler={onClickHandler} 
                  // passing current video data as prop
                  videoData={currVideo} 
                  // passing video thumbnail as prop
                  video_thumbnail={edutubeEducational} 
                  // passing video URL as prop
                  video_url={currVideo.video_url} 
                  // passing video title as prop
                  video_title={currVideo.title} 
                />
              </li>
            ))}
          </ul>
          {/* button to load more videos */}
          <div className="flex justify-center mt-4">
            <button 
              onClick={handleLoadMore} 
              className="bg-slate_blue hover:bg-lavender text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline my-12"
            >
              Load More Videos
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Videos;
