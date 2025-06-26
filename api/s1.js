export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

// CLI Input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for mobile number
rl.question('📱 মোবাইল নম্বর দিন (e.g. 013xxxxxxxx): ', async (mobile) => {
  const url = 'https://core.easy.com.bd/api/v1/registration';

  const data = {
    social_login_id: "",
    name: "Raihan",
    email: "raihanhossain56907@gmail.com",
    mobile: mobile,
    password: "@@@###RDX",
    password_confirmation: "@@@###RDX",
    device_key: "ad81fc15534c07e9b4909f2f4cf83036"
  };

  const headers = {
    "Host": "core.easy.com.bd",
    "Connection": "keep-alive",
    "sec-ch-ua-platform": "\"Android\"",
    "lang": "en",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Android WebView\";v=\"134\"",
    "sec-ch-ua-mobile": "?1",
    "User-Agent": "Mozilla/5.0 (Linux; Android 15; V2352A Build/AP3A.240905.015.A2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.39 Mobile Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "device-key": "ad81fc15534c07e9b4909f2f4cf83036",
    "Content-Type": "application/json",
    "Origin": "https://www.easy.com.bd",
    "X-Requested-With": "mark.via.gp",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://www.easy.com.bd/",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9"
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('✅ Registration Response:');
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.log('❌ Error Response:', error.response.data);
    } else {
      console.log('❌ Request Failed:', error.message);
    }
  }

  rl.close();
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}