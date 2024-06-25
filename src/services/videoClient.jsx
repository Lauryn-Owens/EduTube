import axios from 'axios';

export const postData = async (user_id="lauryn_owens",description, video_url, title) => {
    const url = 'api/videos';
  
    const requestBody = {
      user_id: user_id,
      description: description,
      video_url: video_url,
      title: title
    };
  
    try {
      // First, send a POST request to add the video
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      if (response.ok) {
        //console.log('Yay it worked!!!');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
  
      // Next, fetch the updated data request with query parameter
      const fetchUrl = `${url}?user_id=${user_id}`;
      const fetchResponse = await fetch(fetchUrl);
      if (!fetchResponse.ok) {
        throw new Error(`HTTP error! status: ${fetchResponse.status}`);
      }
  
      const fetchData = await fetchResponse.json();
      console.log(fetchData)
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
 
  export const fetchData = async (user_id = "lauryn_owens") => {
    const url = `api/videos?user_id=${user_id}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.status === 200) {
          /***DELETE TEST/CONSOLE.LOGS LATER */
            //console.log(response.data.videos)
            //let test = response.data.videos;
            //console.log(Array.isArray(test));

            return response.data.videos;
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


  

