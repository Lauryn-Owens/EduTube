// import react and needed hooks
import React, { useEffect, useState } from 'react';
// import link jsx to use
import { Link } from 'react-router-dom';
// import needed functions
import { onChangeHandler, onSubmitHandler, fetchAndSetVideo} from './postVideoFunctions';


function PostVideo() {
  // initializing state
  const [formData, setFormData] = useState({ video_url: '', video_title: '', video_description: '' });
  const [newVideo, setNewVideo] = useState(null);
  const [newVideoId, setNewVideoId] = useState('');
  const [viewVideo, setViewVideo] = useState(false);
  const [posted, setPosted] = useState(false);

  // useEffect hook to fetch and set video when a new video is posted
  useEffect(() => {
    if (posted) {
      fetchAndSetVideo(setNewVideoId, setNewVideo, setViewVideo, setPosted);
    }
  }, [posted]);

  return (
    <div className="container mx-auto p-4">
       {/* page heading */}
      <h1 className="text-2xl font-bold mb-4 text-center">Submit Data</h1>
      
      {/* form for submitting video data */}
      <form className="max-w-lg mx-auto" onSubmit={(e) => onSubmitHandler(e, formData, setPosted)}>
        
        {/* input field for video title */}
        <div className="mb-4">
          <label htmlFor='video_title' className="block font-bold mb-1">Video Title:</label>
          <input
            type="text"
            name="video_title"
            value={formData.video_title}
            onChange={(e) => onChangeHandler(e, setFormData, formData)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-slate_blue"
            required 
          />
        </div>
        
        {/* input field for video URL */}
        <div className="mb-4">
          <label htmlFor='video_url' className="block font-bold mb-1">Video URL:</label>
          <input
            type="text"
            name="video_url"
            value={formData.video_url}
            onChange={(e) => onChangeHandler(e, setFormData, formData)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-slate_blue"
            required 
          />
        </div>
        
        {/* input field for video description */}
        <div className="mb-4">
          <label htmlFor='video_description' className="block font-bold mb-1">Video Description:</label>
          <textarea
            name="video_description"
            value={formData.video_description}
            onChange={(e) => onChangeHandler(e, setFormData, formData)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-slate_blue"
            rows="4"
            required
          />
        </div>
        
        {/* submit button */}
        <button
          type="submit"
          className="w-full bg-slate_blue hover:bg-pastel_purple text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      {/* conditionally rendering the link to view the video */}
      {viewVideo ? (
        <Link 
          to={`/videos/${newVideoId}`} 
          state={newVideo} 
          className="block mt-4 text-center text-slate_blue hover:underline"
        >
          View Video
        </Link>
      ) : (
        <Link 
          to='' 
          className="block mt-4 text-center text-gray-400"
        >
          View Video
        </Link>
      )}
    </div>
  );
}

export default PostVideo;
