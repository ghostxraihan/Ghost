export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function formatPhoneNumber(input) {
  if (input.startsWith('0')) {
    return '+880' + input.slice(1);
  }
  return input;
}

rl.question('Enter phone number (e.g. 01321064721): ', (phone) => {
  const formattedPhone = formatPhoneNumber(phone.trim());

  axios.post('https://api-dynamic.chorki.com/v1/auth/login?country=BD&platform=mobile', {
    number: formattedPhone
  }, {
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
  })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response?.data || error.message);
  })
  .finally(() => {
    rl.close();
  });
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}