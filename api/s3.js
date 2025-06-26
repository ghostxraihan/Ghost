export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter phone number (like 01321064721): ', async (inputPhone) => {
  let phone = inputPhone.trim();

  // যদি ০ দিয়ে শুরু করে, তাহলে ০ সরিয়ে দিবে
  if (phone.startsWith('0')) {
    phone = phone.substring(1);
  }

  // এখন +880 + phone
  const phoneToSend = '+880' + phone;

  const payload = {
    Name: "Raihan Hossain",
    Phone: phoneToSend
  };

  try {
    const response = await axios.post(
      'https://www.api-care-box.click/api/user/register/?version=otp',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 15; V2352A Build/AP3A.240905.015.A2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.39 Mobile Safari/537.36',
          'Accept': '*/*',
          'Origin': 'https://www.carebox.com.bd',
          'Referer': 'https://www.carebox.com.bd/',
          'X-Requested-With': 'mark.via.gp'
        }
      }
    );

    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }

  rl.close();
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}