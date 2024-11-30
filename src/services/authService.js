import axios from "axios";

export const loginUser = async ({ username, password }) => {

  const emails = JSON.parse(localStorage.getItem('emails')) || [];

  if (emails.length === 0) {
    throw new Error('No emails found in local storage');
  }

  console.log(emails)

  for (const email of emails) {

    console.log(email)

    try {
      const response = await axios.post('https://techtest.youapp.ai/api/login', {
        email,     
        username,  
        password,  
      });
      
      if (response.status === 201 && response.data.message === 'User has been logged in successfully') {                
        return { responseData: response.data, matchedEmail: email };
      } else {
        console.log(`Login information fo: ${email} - ${response.data.message}`);
      }      
    } catch (error) {
      console.log(`Login failed for email: ${email}`, response.data.message);
    }
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
