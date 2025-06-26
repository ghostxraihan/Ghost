export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 Enter phone number (e.g. 01776812230): ', async (inputPhone) => {
  let phone = inputPhone.trim();

  // যদি ০ দিয়ে শুরু হয়, ০ বাদ দিয়ে +880 বসাবে
  if (phone.startsWith('0')) {
    phone = phone.slice(1);
  }

  const phoneWithCode = `+880${phone}`;

  const payload = {
    mobileNumber: phoneWithCode
  };

  try {
    const response = await axios.post(
      'https://auth.jachai.com/api/v1/otp/send',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
          'Accept': '*/*',
          'Origin': 'https://jachai.com',
          'Referer': 'https://jachai.com/',
          'X-Requested-With': 'mark.via.gp',
          'devicename': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
          'deviceid': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
          'devicetype': 'Linux aarch64',
          'appversion': '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
        }
      }
    );

    console.log('\n✅ OTP sent successfully!');
    console.log('📨 Response:', response.data);
  } catch (error) {
    console.error('\n❌ Failed to send OTP:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Details:', error.response.data);
    }
  }

  rl.close();
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}