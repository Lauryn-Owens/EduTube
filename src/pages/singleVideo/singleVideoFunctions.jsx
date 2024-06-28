import { createComment, fetchComments } from "../../services/videoClient";

export const fetchCommentList = async (videoId, setCommentList) => {
  try {
    const fetchedComments = await fetchComments(videoId);
    setCommentList(fetchedComments);
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

export const onChangeHandler = (e, setComment) => {
  setComment(e.target.value);
};

export const onSubmitHandler = async (videoId, comment, setComment, fetchCommentList) => {
  try {
    await createComment(videoId, comment);
    setComment('');
    await fetchCommentList(videoId);
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};
