import React from 'react';

function Video({onClickHandler, videoData, video_thumbnail, video_url, video_title}) {
  return (
      <figure>
            <video className='rounded-lg' poster={video_thumbnail} width="100%" height="100%"  controls>
              <source  src={video_url}  type="video/mp4" />
              Your browser doesn't support the video tag!!! Please update your browser and try again!!!
        </video>
       <figcaption className='mt-2 pl-4 pb-4 text-lg font-bold tracking-tight'
       onClick={() => onClickHandler(videoData)}
       >
            {video_title}
       </figcaption>
      </figure>
   )
}

export default Video

