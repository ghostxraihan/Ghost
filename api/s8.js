export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('📱 Enter phone number (e.g. 01321064721): ', async (inputPhone) => {
  let phone = inputPhone.trim();

  // যদি ০ দিয়ে শুরু হয়, ০ বাদ দিয়ে +880 বসানো হবে
  if (phone.startsWith('0')) {
    phone = phone.slice(1);
  }

  const phoneWithCode = `+880${phone}`;

  const payload = {
    key: "953e79b251488578b1b849bf76e4ad55",
    mobile: phoneWithCode
  };

  const token = "ODdweWQ2OTJwbDNiYjR6azMyazJpenBrdHQ2MjYybnZhc2luZGFiYWRjb21tb3ppbGxhNTAgbGludXggYW5kcm9pZCAxNSB2MjM1MmEgYnVpbGRhcDNhMjQwOTA1MDE1YTIgYXBwbGV3ZWJraXQ1MzczNiBraHRtbCBsaWtlIGdlY2tvIGNocm9tZTEzNDA2OTk4MzkgbW9iaWxlIHNhZmFyaTUzNzM2YmFuZG9yOTUzZTc5YjI1MTQ4ODU3OGIxYjg0OWJmNzZlNGFkNTU=";

  try {
    const response = await axios.post(
      'https://offers.sindabad.com/api/mobile-otp',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'User-Agent': 'Mozilla/5.0 (Linux; Android 15; V2352A Build/AP3A.240905.015.A2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.39 Mobile Safari/537.36',
          'Accept': 'application/json, text/plain, */*',
          'Origin': 'https://sindabad.com',
          'Referer': 'https://sindabad.com/',
          'X-Requested-With': 'mark.via.gp'
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