// import needed functions
import { postVideo, fetchVideos } from "../../services/videoClient";

// function to post a new video
export const postNewVideo = async (videoData) => {
  try {
    await postVideo(videoData);
    // return true if video is posted successfully
    return true; 
  } catch (error) {
    console.error('Error submitting video:', error);
    // return false if there is an error
    return false; 
  }
};

// function to get the last video from the video list
export const getLastVideo = async () => {
  try {
    const videos = await fetchVideos();
    // return the first video from the list - newest video
    return videos[0]; 
  } catch (error) {
    //print error to console
    console.error('Error fetching videos:', error);
    // throw error if fetching videos is not successful
    throw error; 
  }
};

// handler function to update form data state
export const onChangeHandler = (e, setFormData, formData) => {
  const { name, value } = e.target;
  // update form data with new input value
  setFormData({ ...formData, [name]: value }); 
};

// handler function to submit form data
export const onSubmitHandler = async (e, formData, setPosted) => {
  // prevent default form submission action of refreshing the page
  e.preventDefault(); 
  const { video_title, video_description, video_url } = formData;
  const videoData = {
    user_id: "lauryn_owens",
    title: video_title,
    description: video_description,
    video_url
  };
  // post the new video and get the status
  const isPosted = await postNewVideo(videoData); 
  // update posted state if video is successfully posted
  if (isPosted) setPosted(true); 
};

// function to fetch the last video and update states
export const fetchAndSetVideo = async (setNewVideoId, setNewVideo, setViewVideo, setPosted) => {
  try {
    // assign lastVideo variable to the object returned from getLastVideo
    const lastVideo = await getLastVideo();
    // update newVideoId with the lastVideo state
    setNewVideoId(lastVideo.id);
    // update newVideo with new video state
    setNewVideo(lastVideo);
    // update the view video state
    setViewVideo(true);
    // update the posted state
    setPosted(false); 
  } catch (error) {
    //print error to console
    console.error('Error fetching single video:', error);
  }
};