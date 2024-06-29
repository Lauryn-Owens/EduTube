//import need hooks
import { useState, useEffect } from 'react';
//import useNavigate need hook from react router
import { useNavigate } from 'react-router-dom';
// Importing fetchVideos function from videoClient service
import { fetchVideos } from '../../services/videoClient.jsx'; 

// Custom hook to fetch and manage videos
export const useVideos = () => {
  // State to hold fetched videos, initialized as empty array
  const [videos, setVideos] = useState([]); 
  // State to manage loading state, initialized as true until data is fetched
  const [isLoading, setIsLoading] = useState(true); 
  // Navigate function from react-router-dom for programmatic navigation
  const navigate = useNavigate(); 

  // Function to fetch all videos from API
  const fetchAllVideos = async () => {
    try {
      // Calling fetchVideos function to get video data
      const fetchedVideos = await fetchVideos(); 
      // Setting the fetched videos into state
      setVideos(fetchedVideos); 
      // Setting isLoading state to false after data is fetched
      setIsLoading(false); 
    } catch (error) {
       // Logging error if fetching videos fails
      console.error('Error fetching videos:', error);
      // Setting isLoading state to false if there's an error
      setIsLoading(false); 
    }
  };

  // useEffect hook to run fetchAllVideos function on component mount
  useEffect(() => {
    fetchAllVideos();
    // Empty dependency array ensures fetchAllVideos runs only once on component mount
  }, []); 

  // Function to handle click events on video items
  const onClickHandler = (currVideo) => {
    // Navigate to video details page with video ID and data as state
    navigate(`/videos/${currVideo.id}`, { state: currVideo }); 
  };

  // Returning videos, isLoading state, and onClickHandler function for external use
  return { videos, isLoading, onClickHandler };
};

// Function to fetch more videos
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