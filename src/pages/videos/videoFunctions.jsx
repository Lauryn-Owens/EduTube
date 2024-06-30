//import need hooks
import { useState, useEffect } from 'react';
//import useNavigate need hook from react router
import { useNavigate } from 'react-router-dom';
// importing fetchVideos function from videoClient service
import { fetchVideos } from '../../services/videoClient.jsx'; 

// custom hook to fetch and manage videos
export const useVideos = () => {
  // state to hold fetched videos, initialized as empty array
  const [videos, setVideos] = useState([]); 
  // state to manage loading state, initialized as true until data is fetched
  const [isLoading, setIsLoading] = useState(true); 
  // navigate function from react-router-dom for programmatic navigation
  const navigate = useNavigate(); 

  // function to fetch all videos from API
  const fetchAllVideos = async () => {
    try {
      // calling fetchVideos function to get video data
      const fetchedVideos = await fetchVideos(); 
      // setting the fetched videos into state
      setVideos(fetchedVideos); 
      // setting isLoading state to false after data is fetched
      setIsLoading(false); 
    } catch (error) {
       // logging error if fetching videos fails
      console.error('Error fetching videos:', error);
      // setting isLoading state to false if there's an error
      setIsLoading(false); 
    }
  };

  // useEffect hook to run fetchAllVideos function on component mount
  useEffect(() => {
    fetchAllVideos();
    // empty dependency array ensures fetchAllVideos runs only once on component mount
  }, []); 

  // function to handle click events on video items
  const onClickHandler = (currVideo) => {
    // navigate to video details page with video ID and data as state
    navigate(`/videos/${currVideo.id}`, { state: currVideo }); 
  };

  // returning videos, isLoading state, and onClickHandler function for external use
  return { videos, isLoading, onClickHandler };
};

// function to fetch more videos
export const loadMoreVideos = async (loadedVideosCount, setLoadedVideosCount) => {
  try {
    // Fetch more videos from the API
    const moreVideos = await fetchVideos(); 

    // Update the loaded videos count or add more videos to existing list
    // incrementing by 20
    setLoadedVideosCount(loadedVideosCount + 20); 
  } catch (error) {
    //print error
    console.error('Error fetching more videos:', error);
  }
};