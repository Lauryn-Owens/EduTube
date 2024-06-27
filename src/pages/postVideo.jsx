import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { postVideo, fetchVideos, fetchSingleVideo } from "../services/videoClient";

function PostVideo() {
  const [formData, setFormData] = useState({ video_url: '', video_title: '', video_description: '' });
  const [newVideo, setNewVideo] = useState(null);
  const [newVideoId, setNewVideoId] = useState('');
  const [viewVideo, setViewVideo] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault(); 
    const { video_title, video_description, video_url } = formData;
    try {
      await postVideo({ 
        user_id: "lauryn_owens", 
        title: video_title, 
        description: video_description, 
        video_url
      });
           
      const fetchedVideos = await fetchVideos();
      const lastVideo = fetchedVideos[fetchedVideos.length - 1];
      setNewVideoId(lastVideo.id);
    } catch (error) {
      console.error('Error submitting video:', error);
    }
  };

  useEffect(() => {
    const fetchAndSetVideo = async () => {
      if (newVideoId) {
        try {
          const videoData = await fetchSingleVideo(newVideoId);
          setNewVideo(videoData);
          setViewVideo(true);
          console.log(newVideo);
        } catch (error) {
          console.error('Error fetching single video:', error);
        }
      }
    };
    fetchAndSetVideo();
  }, [newVideoId]);

  return (
    <div>
      <h1>Submit Data</h1>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label>
            Video Title:
            <input
              type="text"
              name="video_title"
              value={formData.video_title}
              onChange={onHandleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Video URL:
            <input
              type="text"
              name="video_url"
              value={formData.video_url}
              onChange={onHandleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Video Description:
            <textarea
              name="video_description"
              value={formData.video_description}
              onChange={onHandleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>    
      {viewVideo && (
        <Link to={`/videos/${newVideoId}`} state={newVideo}>View Video</Link>
      )}
    </div>
  );
}

export default PostVideo;