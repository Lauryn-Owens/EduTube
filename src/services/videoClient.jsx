import axios from 'axios';

export const postVideo = async ({ user_id, title, description, video_url }) => {
  const url = 'api/videos';

  const requestBody = {
    user_id,
    title,
    description,
    video_url
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    const fetchUrl = `${url}?user_id=${user_id}`;
  
    const fetchResponse = await fetch(fetchUrl);
    
    if (!fetchResponse.ok) {
      throw new Error(`HTTP error! status: ${fetchResponse.status}`);
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
};

export const fetchVideos = async (user_id = "lauryn_owens") => {
    const url = `api/videos?user_id=${user_id}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.status === 200) {
            return response.data.videos;
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchSingleVideo = async (video_id) => {
  //url = `api/videos/single?video_id=${video_id}`
  const url = `api/videos/single?video_id=${video_id}`;
  try {
    const response = await axios.get(url, {
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.status === 200) {
        return response.data.video;
    } else {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
} catch (error) {
    console.error('Error fetching data:', error);
    throw error;
 }
};