import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postVideo, fetchVideos } from '../services/videoClient.jsx';
import { Oval } from "react-loader-spinner";
import Video from '../components/videos/video.jsx';
import edutubeEducational from "../assets/images/pages/videos/edutubeEducational.png";

function Videos() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllVideos = async () => {
    const fetchedVideos = await fetchVideos();
    setVideos(fetchedVideos);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllVideos();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className='flex justify-center items-center absolute inset-y-1/2 inset-x-1/2 z-10'>
          <Oval width={60} height={60} color="#c2a3fd" />
        </div>
      ) : (
        <ul className='w-10/12 m-auto grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8'>
          {videos?.slice(0, 460)?.map((currVideo) => (
            <li className='m-auto shadow-lilac border-2 rounded-lg' key={currVideo.id}>
              <Link
                to={`/videos/${currVideo.id}`}
                state={currVideo}
                className="block"
              >
                <Video
                  video_thumbnail={edutubeEducational}
                  video_url={currVideo.video_url}
                  video_title={currVideo.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Videos;
