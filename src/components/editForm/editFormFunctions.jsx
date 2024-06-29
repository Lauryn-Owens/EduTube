import { editVideos } from "../../services/videoClient";

//function to handle editing videos
export const editVideo = async (videoId, title, description) => {
    try {
      // call the editVideos function from videoClient service
      const updatedVideo = await editVideos(videoId, title, description);
      // return the updated video data 
      return updatedVideo;
    } catch (error) {
      // log an error if editing the video fails
      console.error('Error editing video:', error);
      // throw the error 
      throw error; 
    }
  }
  