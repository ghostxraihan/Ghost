export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 ফোন নম্বর দিন (যেমন: 01647334345): ', async (phone) => {
  phone = phone.trim();

  try {
    const response = await axios.post('https://admin.beautybooth.com.bd/api/v2/auth/signup', {
      phone: phone
    }, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'User-Agent': 'Dart/3.0 (dart:io)'
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