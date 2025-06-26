export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 ফোন নম্বর দিন (যেমন: 01321064721): ', async (inputNumber) => {
  inputNumber = inputNumber.trim();

  // যদি প্রথমে 0 থাকে, ওটা কেটে 880 যোগ করব
  let msisdn = '880' + (inputNumber.startsWith('0') ? inputNumber.slice(1) : inputNumber);

  try {
    const response = await axios.get('https://www.skitto.com/apivx1/skitto/api/auth/v1/login/v3/otp-login', {
      params: { msisdn },
      headers: {
        'authorization': '',  // যদি টোকেন লাগে, এখানে বসাবেন, না হলে খালি রাখুন
        'channel-id': '16',
        'content-type': 'application/json',
        'user-agent': 'Skitto Android 5.1.1',
        'accept-encoding': 'gzip',
      }
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }

  rl.close();
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}