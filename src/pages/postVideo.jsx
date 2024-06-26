import React, { useState } from 'react';
import { postVideo } from "../services/videoClient";

function PostVideo() {
  const [formData, setFormData] = useState({ video_url: '', video_title: '', video_description: '' });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onHandleSubmit = async (e) => {
    /**
     * 1.// prevent form from reloading/refreshing page
     */
    e.preventDefault(); 
    const { video_title, video_description, video_url } = formData;
    try {
      await postVideo(video_title, video_description, video_url);
      //make form reset and go to a singleVideo page with the new uploaded video  
    }
    catch(error){
        console.error('Error submitting video:', error);
      //add handle error -- will create sample error message
    }
  };

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
    </div>
  );
}

export default PostVideo;
