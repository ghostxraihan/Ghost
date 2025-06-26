export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');
const qs = require('querystring');

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

  const data = qs.stringify({
    mobilenumber: phoneWithCode,
    otptype: 'login',
    resendotp: '1',
    oldmobile: '0',
    method: 'loginMethod'
  });

  try {
    const response = await axios.post(
      'https://www.butterflygroupbd.com/mobilelogin/otp/send',
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Origin': 'https://www.butterflygroupbd.com',
          'Referer': 'https://www.butterflygroupbd.com/',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': '*/*'
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