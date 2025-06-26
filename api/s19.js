export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');
const FormData = require('form-data');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 ফোন নম্বর দিন (যেমন: 01647334345): ', async (phone) => {
  phone = phone.trim();

  const form = new FormData();
  form.append('phone', phone);

  try {
    const response = await axios.post('https://admin.amarpet.com/api/v2/login', form, {
      headers: {
        ...form.getHeaders(),
        'User-Agent': 'Dart/3.3 (dart:io)',
        'Origin': 'https://amarpet.com',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Requested-By': 'mobile',
        'Referer': 'https://amarpet.com/'
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