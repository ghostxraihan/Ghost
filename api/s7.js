export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 Enter phone number (e.g. 01321064721): ', async (inputPhone) => {
  const phone = inputPhone.trim();

  const payload = {
    auth: {
      countryCode: "880",
      deviceUuid: "f73307a0-3204-11f0-8ba9-27d90ca7bd48", // আপনি চাইলে এটা ডাইনামিক করাতে পারেন
      phone: phone,
      type: "LOGIN"
    },
    captchaToken: "no recapcha"
  };

  try {
    const response = await axios.post(
      'https://waltonplaza.com.bd/api/auth/otp/create',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 15; V2352A Build/AP3A.240905.015.A2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.39 Mobile Safari/537.36',
          'Accept': '*/*',
          'Origin': 'https://waltonplaza.com.bd',
          'Referer': 'https://waltonplaza.com.bd/auth/phone-login',
          'X-Requested-With': 'mark.via.gp',
          'Cookie': 'device-uuid=f73307a0-3204-11f0-8ba9-27d90ca7bd48'
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