export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ফোন নম্বর দিন (যেমন 01321064721): ', async (input) => {
  try {
    // leading zero বাদ দিন
    let nationalNumber = input.startsWith('0') ? input.slice(1) : input;

    const data = {
      country_prefix: "880",
      national_number: nationalNumber,
      country_id: 1
    };

    const response = await axios.post('https://api.pathao.com/v2/auth/register', data, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'App-Agent': 'ride/android/493',
        'Android-OS': '10',
        'User-Agent': 'okhttp/4.12.0',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip'
      }
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  } finally {
    rl.close();
  }
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}