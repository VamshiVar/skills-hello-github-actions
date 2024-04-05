const axios = require('axios');

async function fetchResponse() {
  try {
    const response = await axios.get('https://www.google.com');
    console.log(response.data);
  } catch (error) {
    console.error("Error in fetaching response:", error)
  }
}

fetchResponse();
