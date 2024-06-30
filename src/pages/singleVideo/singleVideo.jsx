//import react and needed hooks
import React, { useState, useEffect } from 'react';
//import needded hook from react dom
import { useLocation } from 'react-router-dom';
//import needed component
import Video from '../../components/videos/video';
//import needed functions/custom hook
import { fetchCommentList, onChangeHandler, onSubmitHandler, showDescription } from './singleVideoFunctions';

function SingleVideo() {
  // state for managing comment input and comment list
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [displayDescription, setDisplayDescription] = useState(false);

  // get current location (including state passed from previous page)
  const location = useLocation();
  // extract videoData from location state or set to empty object
  const videoData = location.state || {};

  // effect to fetch and update comment list when comment state changes
  useEffect(() => {
    // fetch comments for the current video
    fetchCommentList(videoData.id, setCommentList);
    // fependency on 'comment' ensures effect runs when comment state changes
  }, [comment]);

  return (
    <div className="w-full md:w-10/12 mx-auto">
      {/* render video component */}
      <Video video_thumbnail={''} video_url={videoData.video_url} video_title={videoData.title} />
      <p className='inline-block'>Description:</p>
      
      {/* button to toggle description display */}
      <button onClick={() => showDescription(setDisplayDescription, displayDescription)} className="ml-2 mb-4 md:mb-0 md:ml-4 md:inline-block w-8 h-8 bg-lavender">{displayDescription ? '-' : '+'}</button>
      {
        displayDescription ? (
          <p>{videoData.description}</p>
        ) : null
      }

      <div className='my-8'>
        {/* form to submit new comments */}
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(videoData.id, comment, setComment, fetchCommentList);
        }} className="mt-4 md:flex md:items-center md:ml-4">
          <label htmlFor="add_comment" className="block mb-2 md:mr-2">Add Comment</label>
          <div className='flex flex-col md:flex-row gap-2 md:gap-0 md:items-center w-full'>
            <input
              type="text"
              name="add_comment"
              required
              value={comment}
              onChange={(e) => onChangeHandler(e, setComment)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-slate_blue mb-2 md:mb-0 md:mr-2"
            />
            <button type="submit" className="w-full md:w-auto bg-slate_blue hover:bg-pastel_purple text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>

      {/* render list of comments */}
      <p>Comments</p>
      <ul className="mt-4 mb-12">
        {commentList && commentList.map((currComment, index) => (
          <li key={index} className="m-auto mb-2 py-4 pl-4 border-2 w-11/12">{index%2 === 0 ? 'Lauryn Owens: ' : 'guest: '} {currComment.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default SingleVideo;