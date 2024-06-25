import React from 'react';
import {useLocation } from 'react-router-dom';
import Video from '../components/videos/video';


function SingleVideo() {
  //initialize useLocation() hook
  const location = useLocation();
  /*
  1. grab data from location
  2. return an empty object instead of null -- add || {}
  **/
  const videoData  = location.state || {}; 

  //console.log(videoData)
  return (
    <div>
        <Video video_thumbnail={''} video_url={videoData.video_url} video_title={videoData.title}/>
        {/**Comment section --- move to individual component later */}
    </div>
  );
}

export default SingleVideo
