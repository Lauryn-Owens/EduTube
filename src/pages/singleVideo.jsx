import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Video from '../components/videos/video';
import { createComment, fetchComments } from "../services/videoClient";

function SingleVideo() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  
  const location = useLocation();
  const videoData = location.state || {};
  console.log(videoData);

  /**fetch the new comments as they are added */
  useEffect(() => {
    const fetchCommentList = async () => {
      const fetchedComments = await fetchComments(videoData.id);
      setCommentList(fetchedComments);
    } 
    fetchCommentList();
  }, [comment]);
  
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };


  const onSubmitHandler = async () => {
    try {
      await createComment(videoData.id, comment);
      setComment('');
      // Fetch updated comments after adding new comment
      //const updatedComments = await fetchComments(videoData.id);
      //
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className='w-10/12 m-auto'>
      <Video video_thumbnail={''} video_url={videoData.video_url} video_title={videoData.title} />
      <p>Description: {videoData.description}</p>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler();
      }}>
        <label htmlFor="add_comment">Add Comment</label>
        <input 
          type="text" 
          name="add_comment" 
          required
          value={comment}
          onChange={onChangeHandler}
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
