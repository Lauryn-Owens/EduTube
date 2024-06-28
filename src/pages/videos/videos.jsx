import React from 'react';

import Video from '../../components/videos/video.jsx';
import edutubeEducational from "../../assets/images/pages/videos/edutubeEducational.png";
import { useVideos } from './videoFunctions.jsx';
import LoadingSpinner from '../../components/ui/loadingSpinner.jsx';

function Videos() {
  const { videos, isLoading, onClickHandler } = useVideos();

  return (
    <div>
      {isLoading ? (
        <div className='flex justify-center items-center absolute inset-y-1/2 inset-x-1/2 z-10'>
          <LoadingSpinner/>
        </div>
      ) : (
        <ul className='w-10/12 m-auto grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8'>
          {videos?.slice(0, 460)?.map((currVideo) => (
            <li
              key={currVideo.id}
              className='m-auto shadow-lilac border-2 rounded-lg cursor-pointer'
            >
              <Video
                onClickHandler = {onClickHandler}
                videoData = {currVideo}
                video_thumbnail={edutubeEducational}
                video_url={currVideo.video_url}
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
