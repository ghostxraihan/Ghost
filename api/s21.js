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

  // বাকিরা হাড়কোডড ডাটা
  const data = {
    name: "Imran hossain",
    phone: phone,
    type: "SSC",
    level: "SSC_25",
    password: "Imran5351@",
    school: "Narayanganj college"
  };

  try {
    const response = await axios.post('https://mujib.chorcha.net/auth/register', data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        'Authorization': 'Bearer undefined',  // যদি না লাগে, মুছে ফেলুন
        'User-Agent': 'okhttp/4.9.2',
        'App': 'true'
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