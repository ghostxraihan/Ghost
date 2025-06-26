export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 ফোন নম্বর দিন (যেমন: 01647334345): ', async (inputPhone) => {
  inputPhone = inputPhone.trim();

  // ফোন নম্বরের আগে +880 যোগ করা যদি না থাকে
  let phoneNumber = inputPhone.startsWith('+880') ? inputPhone : '+880' + inputPhone.slice(inputPhone.startsWith('0') ? 1 : 0);

  try {
    const response = await axios.post('http://185.227.134.170:3000/api/auth/send_otp', {
      phone_number: phoneNumber
    }, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'Dart/3.7 (dart:io)'
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