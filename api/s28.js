export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const qs = require('qs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Phone Number (e.g. 01321064721): ', (inputPhone) => {
  // +880 যোগ করে Intl format বানানো
  const phone = inputPhone.startsWith('0') ? '+88' + inputPhone : inputPhone;
  const token = 'J9vuqzxHyaWa3VaT66NsvmQdmUmwwrHj'; // আগেই দেয়া ছিল

  const data = qs.stringify({
    phone: phone,
    jatri_token: token
  });

  axios.post('https://user-api.jslglobal.co:444/v2/send-otp', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'User-Agent': 'okhttp/4.12.0'
    }
  })
  .then(res => {
    console.log('✅ Response:', res.data);
  })
  .catch(err => {
    console.error('❌ Error:', err.response?.data || err.message);
  })
  .finally(() => rl.close());
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}