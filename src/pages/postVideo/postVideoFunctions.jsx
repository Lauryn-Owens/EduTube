import { postVideo, fetchVideos } from "../../services/videoClient";

export const postNewVideo = async (videoData) => {
  try {
    await postVideo(videoData);
    return true;
  } catch (error) {
    console.error('Error submitting video:', error);
    return false;
  }
};

export const getLastVideo = async () => {
  try {
    const videos = await fetchVideos();
    return videos[0]; 
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

export const onChangeHandler = (e, setFormData, formData) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

export const onSubmitHandler = async (e, formData, setPosted) => {
  e.preventDefault();
  const { video_title, video_description, video_url } = formData;
  const videoData = {
    user_id: "lauryn_owens",
    title: video_title,
    description: video_description,
    video_url
  };
  
  const isPosted = await postNewVideo(videoData);
  if (isPosted) setPosted(true);
};

export const fetchAndSetVideo = async (setNewVideoId, setNewVideo, setViewVideo, setPosted) => {
  try {
    const lastVideo = await getLastVideo();
    setNewVideoId(lastVideo.id);
    setNewVideo(lastVideo);
    setViewVideo(true);
    //watch this new variable
    setPosted(false); 
    } catch (error) {
    console.error('Error fetching single video:', error);
  }
};