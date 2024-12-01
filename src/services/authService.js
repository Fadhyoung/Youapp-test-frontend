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
    console.log(`Login failed: `, response.data.message);
  }

  };

export const registerUser = async ({ email, username, password }) => {

  const response = await axios.post('https://techtest.youapp.ai/api/register', {
    email,
    username,
    password,
  });

  let emailList = JSON.parse(localStorage.getItem('emails')) || [];

  if (!emailList.includes(email)) {

    emailList.push(email);
    
    localStorage.setItem('emails', JSON.stringify(emailList));
  }

  return response.data;
};
