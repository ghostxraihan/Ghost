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
  const processedPhone = phone.startsWith('0') ? '880' + phone.slice(1) : phone;

  const payload = {
    phone_number: processedPhone,
    email: "coredeveloper.javq@gmail.com"  // You can change this to dynamic if needed
  };

  try {
    const response = await axios.post(
      'https://alljobs.teletalk.com.bd/api/v1/otps/register/send',
      payload,
      {
        headers: {
          'Authorization': 'Bearer null',
          'Content-Type': 'application/json',
          'Accept': 'application/json,application/json',
          'User-Agent': 'Ktor client',
          'Accept-Charset': 'UTF-8'
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