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

  const url = 'https://onetapservice.com/api/auth/reg_or_login';
  const payload = {
    phone: phone,
    user_type: 'user'
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer', // যদি কোনো টোকেন থাকে এখানে বসান, না থাকলে এই লাইনটি রাখতে বা বাদ দিতে পারেন
        'Accept': 'application/json',
        'User-Agent': 'okhttp/4.9.3'
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