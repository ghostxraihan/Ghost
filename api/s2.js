export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

// CLI Input setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for mobile number
rl.question('📱 মোবাইল নম্বর দিন (e.g. 013xxxxxxxx): ', async (inputMobile) => {
  const mobile = inputMobile.startsWith('+880') ? inputMobile : `+88${inputMobile}`;

  const url = 'https://ecom.rangs.com.bd/send-otp-code';

  const data = {
    mobile: mobile,
    type: 1
  };

  const headers = {
    "host": "ecom.rangs.com.bd",
    "sec-ch-ua-platform": "\"Android\"",
    "authorization": "Bearer", // Empty Bearer token
    "user-agent": "Mozilla/5.0 (Linux; Android 15; V2352A Build/AP3A.240905.015.A2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.39 Mobile Safari/537.36",
    "accept": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Android WebView\";v=\"134\"",
    "content-type": "application/json",
    "sec-ch-ua-mobile": "?1",
    "origin": "https://shop.rangs.com.bd",
    "x-requested-with": "mark.via.gp",
    "sec-fetch-site": "same-site",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://shop.rangs.com.bd/",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9"
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('✅ OTP পাঠানোর রেসপন্স:');
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.log('❌ সার্ভার রেসপন্সে সমস্যা:', error.response.data);
    } else {
      console.log('❌ অনুরোধ ব্যর্থ:', error.message);
    }
  }

  rl.close();
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}