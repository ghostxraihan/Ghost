export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 Enter phone number (e.g. 01776812230): ', async (inputPhone) => {
  let phone = inputPhone.trim();

  // ০ দিয়ে শুরু থাকলে কেটে +880 বসানো হবে
  if (phone.startsWith('0')) {
    phone = phone.slice(1);
  }

  const phoneWithCode = `+880${phone}`;

  const payload = {
    phoneNumber: phoneWithCode
  };

  try {
    const response = await axios.post(
      'https://www.shwapno.com/api/auth',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 15; V2352A Build/AP3A.240905.015.A2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.39 Mobile Safari/537.36',
          'Accept': '*/*',
          'Origin': 'https://www.shwapno.com',
          'Referer': 'https://www.shwapno.com/',
          'X-Requested-With': 'mark.via.gp',
          'Cookie': 'cuid=733a938b-8241-41ec-853c-651f32f70b4b; _nc_=true; _ds_=65eb62a4452e887cd78e256b; _fbp=fb.1.1747364983306.685177974902034328; _clck=l1cq3w%7C2%7Cfvy%7C0%7C1962; _clsk=1tek14i%7C1747364985110%7C1%7C1%7Ck.clarity.ms%2Fcollect'
        }
      }
    );

    console.log('\n✅ OTP sent successfully!');
    console.log('📨 Response:', response.data);
  } catch (error) {
    console.error('\n❌ Failed to send OTP:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Details:', error.response.data);
    }
  }

  rl.close();
});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}