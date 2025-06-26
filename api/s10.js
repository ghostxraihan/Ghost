export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const qs = require('qs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 Enter phone number (e.g. 01321064721): ', async (inputPhone) => {
  let phone = inputPhone.trim();

  // +880 যোগ করে full international format বানানো
  if (phone.startsWith('0')) {
    phone = '+880' + phone.slice(1);
  }

  const payload = qs.stringify({
    mobile: phone,
    fcmToken: '',
    referral: ''
  });

  try {
    const response = await axios.post(
      'https://api.arogga.com/auth/v1/sms/send?f=mweb&b=&v=&os=&osv=&refPartner=',
      payload,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 15; V2352A Build/AP3A.240905.015.A2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.39 Mobile Safari/537.36',
          'Origin': 'https://m.arogga.com',
          'Referer': 'https://m.arogga.com/',
          'X-Requested-With': 'mark.via.gp'
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