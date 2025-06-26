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

  const deviceId = 'bac89f3a85d4ee9d'; // আপনার দেওয়া ডিভাইস আইডি
  const url = 'https://tethys.trucklagbe.com/tl_gateway/tl_login/123/loginWithPhoneNo';

  const payload = {
    userType: 'owner',
    phoneNo: phone,
    deviceId: deviceId
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer', // যদি কোনো টোকেন থাকে সেট করুন, নাহলে এই লাইনটি রাখুন বা বাদ দিন
        'User-Agent': 'okhttp',
        'lat': '0',
        'lng': '0',
        'source': 'NA',
        'deviceid': deviceId,
        'cookie': deviceId,
        'ut': 'eoilPoc5YZIvRMtPxkK+u35/ywvImO1YkqlJGkYOCyOx+9bsIbTXA5XohQhuCYGS'
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