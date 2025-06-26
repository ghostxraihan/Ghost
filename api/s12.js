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
  let phone = inputPhone.trim();

  if (phone.startsWith('0')) {
    phone = phone.slice(1); // remove leading 0
  }

  const phoneWithCode = `+880${phone}`;
  const url = `https://api.medeasy.health/api/send-otp/${phoneWithCode}/`;

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
        'Accept': 'application/json'
      }
    });

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