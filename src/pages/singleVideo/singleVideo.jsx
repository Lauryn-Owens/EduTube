import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Video from '../../components/videos/video';
import { fetchCommentList, onChangeHandler, onSubmitHandler } from './singleVideoFunctions';

function SingleVideo() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  
  const location = useLocation();
  const videoData = location.state || {};

  useEffect(() => {
    fetchCommentList(videoData.id, setCommentList);
  }, [comment]);

  return (
    <div className='w-10/12 m-auto'>
      <Video video_thumbnail={''} video_url={videoData.video_url} video_title={videoData.title} />
      <p>Description: {videoData.description}</p>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(videoData.id, comment, setComment, fetchCommentList);
      }}>
        <label htmlFor="add_comment">Add Comment</label>
        <input 
          type="text" 
          name="add_comment" 
          required
          value={comment}
          onChange={(e) => onChangeHandler(e, setComment)}
        />
        <button type="submit">Submit</button>
      </form>
      
      <ul>
        {commentList && commentList.map((currComment, index) => (
          <li key={index}>{currComment.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default SingleVideo;