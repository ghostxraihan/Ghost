export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

// Create terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 Enter Phone Number (e.g. 01321064721): ', async (inputPhone) => {
  const phone = inputPhone.startsWith('0') ? '88' + inputPhone : inputPhone;

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNob212b2JUZWNoQVBJVXNlciIsImlhdCI6MTY2MzMzMDkzMn0.4Wa_u0ZL_6I37dYpwVfiJUkjM97V3_INKVzGYlZds1s';

  try {
    const response = await axios.post(
      'https://backend-api.shomvob.co/api/v2/otp/phone?is_retry=0',
      { phone: phone },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 10; M2004J19C MIUI/V12.0.3.0.QJCIDXM)'
        }
      }
    );

    console.log('✅ Response:', response.data);
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }

  rl.close();
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}