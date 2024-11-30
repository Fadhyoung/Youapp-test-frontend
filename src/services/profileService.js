import axios from "axios";

export const createProfile = async ({ displayName, birthday, height, weight, interest = [] }) => {

    const accessToken = sessionStorage.getItem('access_token');
    if (!accessToken) {
        console.error("Access token not found");
        return;
      }

      const payload = {
        name: displayName,
        birthday,
        height,
        weight,
        interests: interest
      };


    try {
      const response = await axios.post('https://techtest.youapp.ai/api/createProfile', 
        payload,
      {
        headers: {
            'x-access-token': accessToken,
            'Content-Type': 'application/json',
            accept: '*/*'
          }
      });

      console.log("response from create profile: ", response)
      
      if (response.status === 201 && response.data.message === 'User has been logged in successfully') {                
        return response.data;
      } else {
        console.log(`Create profile : - ${response.data.message}`);
      }      
    } catch (error) {
      console.log(`Create profile failed: `, response);
      console.log("response from create profile: ")
    }

  };

export const getProfile = async () => {

    const accessToken = sessionStorage.getItem('access_token');
    if (!accessToken) {
        console.error("Access token not found");
        return;
      }

    try {
      const response = await axios.get("https://techtest.youapp.ai/api/getProfile",
        {
            headers: {
                'x-access-token': accessToken,
                'Content-Type': 'application/json',
                accept: '*/*'
              }
          }
      );
      if (response.status === 200 && response.data.message === 'Profile has been found successfully') {           
        return response.data;
      } else {
        console.log(`Create profile : - ${response.data.message}`);
      }  
    } catch (error) {
      console.error('Error fetching profile data:', error);
      throw error;
    }
  };

export const updateProfile = async ({ displayName, birthday, height, weight, interest = [] }) => {

    const accessToken = sessionStorage.getItem('access_token');
    if (!accessToken) {
        console.error("Access token not found");
        return;
      }

      const payload = {
        name: displayName,
        birthday,
        height,
        weight,
        interests: interest
      };


    try {
      const response = await axios.put('https://techtest.youapp.ai/api/updateProfile', 
        payload,
      {
        headers: {
            'x-access-token': accessToken,
            'Content-Type': 'application/json',
            accept: '*/*'
          }
      });

      console.log("response from Update profile: ", response)
      
      if (response.status === 201 && response.data.message === 'Profile has been found successfully') {                
        return response.data;
      } else {
        console.log(`Update profile : - ${response.data.message}`);
      }      
    } catch (error) {
      console.log(`Update profile failed: `, response);
      console.log("response from Update profile: ")
    }

  };