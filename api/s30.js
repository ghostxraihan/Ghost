export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

// CLI Input Setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 Enter Phone Number (e.g. 01647334345): ', async (inputPhone) => {
  const phone = inputPhone.startsWith('0') ? inputPhone : '0' + inputPhone;

  try {
    const response = await axios.post(
      'https://web.tallykhata.com/api/auth/init',
      {
        app_version_number: 211,
        bp_code: '',
        device_id: 'be831a18-b693-43bc-966a-2823889caa5c',
        mobile: phone,
        request_type: 'LOGIN'
      },
      {
        headers: {
          'Authorization': 'Basic c3luY191c2VyOlQhQjdZI0E5Jm48Y3M3QGM=',
          'api-version': '1.0',
          'X-Auth-Token': '',
          'X-User-Mobile': '',
          'X-Device-Id': '',
          'app-version-code': '211',
          'Content-Type': 'application/json; charset=UTF-8',
          'User-Agent': 'okhttp/4.9.2'
        }
      }
    );

    console.log('✅ OTP Sent! Response:', response.data);
  } catch (error) {
    console.error('❌ Failed:', error.response?.data || error.message);
  }

  rl.close();
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}