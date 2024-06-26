import React, {useState} from 'react';
import {useLocation } from 'react-router-dom';
import Video from '../components/videos/video';


function SingleVideo() {
  const[display, setDisplay] = useState(false);

  //initialize useLocation() hook
  const location = useLocation();
  /*
  1. grab data from location
  2. return an empty object instead of null -- add || {}
  **/
  const videoData  = location.state || {}; 

  //console.log(videoData)
  return (
    <div className='w-10/12 m-auto'>
        <Video  video_thumbnail={''} video_url={videoData.video_url} video_title={videoData.title}/>
        {/**video description box only show when user clicks -- use display*/}
        
        <p> Description:{videoData.description}</p>
        <p>HELLO WORLD!!!</p>
        {/**Comment section --- move to individual component later */}

    </div>
  );
}

export default SingleVideo
