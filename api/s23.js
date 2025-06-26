export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 ফোন নম্বর দিন (যেমন: 01321064721): ', async (inputNumber) => {
  inputNumber = inputNumber.trim();
  // 0 থাকলে বাদ দিয়ে +880 যুক্ত করা
  const msisdn = '880' + (inputNumber.startsWith('0') ? inputNumber.slice(1) : inputNumber);

  const url = 'https://mygp.grameenphone.com/mygpapi/v2/otp-login';

  try {
    const response = await axios.get(url, {
      params: {
        msisdn,
        lang: 'en',
        ng: 0
      },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    });

    console.log('✅ Response:', response.data);
  } catch (error) {
    console.error('❌ Error:', error.response ? error.response.data : error.message);
  }

  rl.close();
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}