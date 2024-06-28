import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchVideos } from '../../services/videoClient.jsx';

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchAllVideos = async () => {
    try {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchAllVideos();
  }, []);

  const onClickHandler = (currVideo) => {
    navigate(`/videos/${currVideo.id}`, { state: currVideo });
  };

  return { videos, isLoading, onClickHandler};
};