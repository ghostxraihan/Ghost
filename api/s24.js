export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const qs = require('qs');
const readline = require('readline');

// ইউজার থেকে ইনপুট নিতে readline সেটআপ
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('আপনার ফোন নম্বর দিন (যেমন 01321064721): ', (phoneInput) => {
  // ডাটা তৈরী
  const data = {
    _UID: phoneInput,
    _UNAME: "0",
    _MAIL: "0",
    _PHONE: "0",
    _PASS: "0",
    _TYPE: "1"
  };

  axios.post(
    'https://expresshub.com.bd/User/CreateNewUser',
    qs.stringify(data),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        'Origin': 'https://expresshub.com.bd',
        'Referer': 'https://expresshub.com.bd/'
      }
    }
  )
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  })
  .finally(() => {
    rl.close();
  });
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}