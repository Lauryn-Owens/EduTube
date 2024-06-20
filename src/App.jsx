import React from 'react';

import Navbar from './components/ui/navbar';

const App = () => {

  const postData = async () => {
    const url = 'api/videos';
    const user_id = 'lauryn_owens'; 
  
    const requestBody = {
      user_id: user_id,
      description: 'Testing',
      video_url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'Testing video'
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
        console.log('Yay it worked!!!');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Video added successfully:', result);
  
      // Next, fetch the updated data request with query parameter
      const fetchUrl = `${url}?user_id=${user_id}`;
      const fetchResponse = await fetch(fetchUrl);
      
      if (!fetchResponse.ok) {
        throw new Error(`HTTP error! status: ${fetchResponse.status}`);
      }
  
      const fetchData = await fetchResponse.json();
      console.log('Fetched data:', fetchData);
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className=" box-border m-0 p-0 overscroll-x-contain text-white font-abel"> 
      <Navbar/>
      <h1>Simple React App with POST and GET Requests</h1>
      <button onClick={postData}>Add Video and Fetch Data</button>
    </div>
  );
};

export default App;
