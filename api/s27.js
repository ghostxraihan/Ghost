export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter phone number (e.g. 01647334345): ', (phone) => {
  const data = {
    Username: phone.startsWith('880') ? phone : '880' + phone.replace(/^0+/, ''),
    FullName: "QP1A.190711.020",
    App_Version: "4.3.9",
    Phone_Brand: "M2004J19C",
    Phone_Os: "android",
    Os_Version: "10",
    LANG: "bn",
    Device_Id: "fhBO-Dy_QtOhg9WDDPdL3_:APA91bEvB94XEwxmFzG4Yv1TAF-uJfvkrsX2P8AT802FYRyDCDD3NZb1BQcqksuIZNGELzALFixW2U0WaiH6YxQ_Dy9qy9X0CxyxW6dgmqSEHFlXQe9qvvk"
  };

  axios.post('https://sapi.shebapay.xyz:4052/registration/accountregistration/appregister', data, {
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Dart/3.5 (dart:io)',
      'module': 'JW9tc0ByZWRsdGQl'
    }
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