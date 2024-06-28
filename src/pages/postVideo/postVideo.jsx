import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onChangeHandler, onSubmitHandler, fetchAndSetVideo } from './postVideoFunctions';
import LoadingSpinner from '../../components/ui/loadingSpinner';

function PostVideo() {
  const [formData, setFormData] = useState({ video_url: '', video_title: '', video_description: '' });
  const [newVideo, setNewVideo] = useState(null);
  const [newVideoId, setNewVideoId] = useState('');
  const [viewVideo, setViewVideo] = useState(false);
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    if (posted) {
      fetchAndSetVideo(setNewVideoId, setNewVideo, setViewVideo, setPosted);
    }
  }, [posted]);

  return (
    <div>
      <h1>Submit Data</h1>
      <form onSubmit={(e) => onSubmitHandler(e, formData, setPosted)}>
        <div>
          <label htmlFor='video_title'>Video Title:</label>
          <input
            type="text"
            name="video_title"
            value={formData.video_title}
            onChange={(e) => onChangeHandler(e, setFormData, formData)}
            required
          /> 
        </div>
        <div>
          <label htmlFor='video_url'> Video URL: </label>
          <input
            type="text"
            name="video_url"
            value={formData.video_url}
            onChange={(e) => onChangeHandler(e, setFormData, formData)}
            required
          />
        </div>
        <div>
          <label htmlFor='video_description'>Video Description:</label>
          <textarea
            name="video_description"
            value={formData.video_description}
            onChange={(e) => onChangeHandler(e, setFormData, formData)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {viewVideo ? (
          <Link to={`/videos/${newVideoId}`} state={newVideo}>View Video</Link>
      ) : <LoadingSpinner/>}
    </div>
  );
}

export default PostVideo;
