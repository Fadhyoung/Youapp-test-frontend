import axios from "axios";

export const loginUser = async ({ isEmail, loginInput, password }) => {

  try {

    const payload = isEmail
      ? {
          email: loginInput,
          username: '',
          password,
        }
      : {
          email: '',
          username: loginInput,
          password,
        };

    const response = await axios.post('https://techtest.youapp.ai/api/login', payload);
    
    if (response.status === 201 && response.data.message === 'User has been logged in successfully') {                
      return { responseData: response.data};
    } else {
      console.log(`Login information: ${response.data.message}`);
      localStorage.setItem("fetch_message" , response.data.message)
    }      
  } catch (error) {
    console.log(`Login failed: `, error.response.data.message);
    localStorage.setItem("fetch_message" , error.response.data.message)
  }

  };

export const registerUser = async ({ email, username, password }) => {

  try {

    const response = await axios.post('https://techtest.youapp.ai/api/register', {
      email,
      username,
      password,
    });

    console.log("respon registration,", response)
    
    if (response.status === 201 && response.data.message === 'User has been created successfully') { 
      localStorage.setItem("fetch_message" , response.data.message)             
      return response.data;
    } else {
      console.log(`Registration information: ${response.data.message}`);
      localStorage.setItem("fetch_message" , response.data.message)
      return null;
    }      
  } catch (error) {
    console.log(`Registration failed: `, error.response.data.message);
    localStorage.setItem("fetch_message" , error.response.data.message);
    return response.data;
  }

};
