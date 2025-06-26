export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 Enter phone number (e.g. 01647334345): ', async (inputPhone) => {
  const phone = inputPhone.trim();

  const payload = {
    email: phone,   // এখানে email ফিল্ডেই ফোন নাম্বার যাবে
    regi: true
  };

  try {
    const response = await axios.post(
      'https://admin.wholesaleplus.com.bd/api/send-otp/',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; M2004J19C Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/135.0.7049.113 Mobile Safari/537.36',
          'Origin': 'https://wholesaleplus.com.bd',
          'Referer': 'https://wholesaleplus.com.bd/',
          'X-Requested-With': 'wholesaleplus.com.bd'
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