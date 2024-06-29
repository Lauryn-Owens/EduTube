// Import functions from videoClient service
import { createComment, fetchComments} from "../../services/videoClient";

// Function to fetch comments for a specific video
export const fetchCommentList = async (videoId, setCommentList) => {
  try {
    // Fetch comments from the server for the given videoId
    const fetchedComments = await fetchComments(videoId);
    // Update the state with the fetched comments
    setCommentList(fetchedComments);
  } catch (error) {
    // Log an error if fetching comments fails
    console.error('Error fetching comments:', error);
  }
};

// Handler function to update comment state on change
export const onChangeHandler = (e, setComment) => {
  // Update the comment state with the new input value
  setComment(e.target.value);
};

// Handler function to submit a new comment
export const onSubmitHandler = async (videoId, comment, setComment, fetchCommentList) => {
  try {
    // Create a new comment for the specified videoId
    await createComment(videoId, comment);
    // Clear the comment input field after submission
    setComment('');
    // Fetch updated comments list after adding the new comment
    await fetchCommentList(videoId);
  } catch (error) {
    // Log an error if adding a comment fails
    console.error('Error adding comment:', error);
  }
};

// Function to toggle description display
export const showDescription = (setDisplayDescription, displayDescription) => {
  setDisplayDescription(!displayDescription);
};

