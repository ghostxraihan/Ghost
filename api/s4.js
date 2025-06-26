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

  // যদি ইউজার 0 দিয়ে শুরু করে, সেটি ধরে রাখব কারণ API তে +88-0xxxx... ফরম্যাট লাগে
  // তাই শুধু +88- এর আগে 0 থাকবে

  const phoneWithCode = `+88-${phone}`;

  const payload = {
    mobile: phoneWithCode,
    deviceToken: "web",
    language: "en",
    os: "web"
  };

  try {
    const response = await axios.post(
      'https://api.osudpotro.com/api/v1/users/send_otp',
      payload,
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 15; V2352A Build/AP3A.240905.015.A2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.39 Mobile Safari/537.36',
          'Accept': 'application/json, text/plain, */*',
          'Origin': 'https://osudpotro.com',
          'Referer': 'https://osudpotro.com/',
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