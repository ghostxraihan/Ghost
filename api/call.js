export default function handler(req, res) {
  const number = req.query.number || "unknown";
  try {
const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

async function sendMobileCode(mobile) {
  try {
    const url = 'https://www.efsanetr.com/api/v2/send/mobileCode';
    const data = new URLSearchParams({
      mobile: mobile,
      countryCode: '880',
      type: '1'
    });

    const headers = {
      'host': 'www.efsanetr.com',
      'content-length': data.toString().length.toString(),
      'language': 'en_US',
      'sec-ch-ua-platform': '"Android"',
      'verification': '0.I5chyFVjR5-XacukHi1oKtMiyb_m779X6n8QvjJVqX6Kh69ZNq1iPnYmyiIGXkgapWY93lcDQc7ouvcbrMjXUlYJCdgoPM-OOU0JXgnl-kXXjZNzyC42NNv2WXc9BvSdHx_Gvbm9lQDJf4tjxfGf8AvVviHSiuSukuiWiRxt8s2CJHTnmy6ExXr8RhT48dtB3snkZqMDKaXCjTASEW-WLdgfHsBBCMQfJIIBrS6nQ73kJ2ozeBC8AZ7n37Lqr7AXgGGVmoVOg9muP-cMLsuC96hNkho9pAr_KPM9tDSOAIqLs_tkoNRgii0I7urWK97Hjx8NTne0LAaUETJaHG_WZu2N1VNs1WzviJn0kZIqqXq12-kHCCMVYBwlQCuWXVIJdji47gHuzFjSc3BcEpZ7xT75VTOvU0ch5rAV69WDPjUr5TF_i29bZrCekCgwcZE6kdOw5XPfrPd1J22LnOyxGvRGjmxn8yVSY79EZbp2HKbLoFqcZ1v0yZ5kxcHTUKVggmc4oFXS2NBpq1b-e3EV716NEWKWm27chIhtcpp3ou4FFk8H4Eew0HsKp3eZhgbc0DleVV-o6Hr69iecL2IL1LStgZkGt2UPUTd_RvssdeR77xbHpcRUPvo_XpTl29enChfQqYwQZ6u5SnHuMXkQ8x878OJ47BF5mfVikaHt0rO7PU0ed1UDToQs78keFGutQTf0IrOETWLzY7jN3TK0cYBelYNv6LQF37S0y-ADzB76w_Yg49cN2V4DdLj7ph4MzCt82X_jBlB75JlnbsX-3WkIcR1odyY8F4xlGiFGlRMu9cRlfJICc-EsWVgSP_5EyH2w71tj6XIYmArS-1GBVtobsgt4z52DWW1UBHNL1pqrtqpYuS0O-VA8RPsFxOuaKF3EO4adQEhjP8CFicN6og.sPxYB-53SjtndQ7RATObaA.6dd88d3ef1fc0f7be38944b2ce73bcab6c2eeeb6e67e4ff451aada5b71356ce5',
      'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Android WebView";v="134"',
      'sec-ch-ua-mobile': '?1',
      'none': '',
      'x-requested-with': 'XMLHttpRequest',
      'user-agent': 'Mozilla/5.0 (Linux; Android 15; V2352A Build/AP3A.240905.015.A2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.39 Mobile Safari/537.36',
      'accept': '*/*',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'origin': 'https://www.efsanetr.com',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': 'https://www.efsanetr.com/en_US/internal/register/?inviteCode=SY64XX',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-US,en;q=0.9',
      'cookie': 'inviteCode=SY64XX; AWSALBTG=JdFvzm8p+/cbqf4/bWJbIRCt6vhRdlFfjiAlOAA8INbftHxzMKZLk0l3z/c5l6leo5eINLinqaHHX/O3YUaXnoLwy/QPCIstjuwzIauZxifSx93qEy33V+Pvk819Zn2673zwTzHTLYiMdVk9gQR4BPQDuH/zjWmWpJYr/ZNEjIdtrbCe17A=; AWSALBTGCORS=JdFvzm8p+/cbqf4/bWJbIRCt6vhRdlFfjiAlOAA8INbftHxzMKZLk0l3z/c5l6leo5eINLinqaHHX/O3YUaXnoLwy/QPCIstjuwzIauZxifSx93qEy33V+Pvk819Zn2673zwTzHTLYiMdVk9gQR4BPQDuH/zjWmWpJYr/ZNEjIdtrbCe17A=; AWSALB=jSYjAC5JWOxxqhuGNi5Zl7z2hkfjwnIfILUjo9yEqCUbsPT8BF4mux3+tCc495Mmb9StHEuum2U9gfWWx9eNrqQPmKoNawNndAySi1N2sKotMcLUg8dBo+keRzHT; AWSALBCORS=jSYjAC5JWOxxqhuGNi5Zl7z2hkfjwnIfILUjo9yEqCUbsPT8BF4mux3+tCc495Mmb9StHEuum2U9gfWWx9eNrqQPmKoNawNndAySi1N2sKotMcLUg8dBo+keRzHT; Verification=0.I5chyFVjR5-XacukHi1oKtMiyb_m779X6n8QvjJVqX6Kh69ZNq1iPnYmyiIGXkgapWY93lcDQc7ouvcbrMjXUlYJCdgoPM-OOU0JXgnl-kXXjZNzyC42NNv2WXc9BvSdHx_Gvbm9lQDJf4tjxfGf8AvVviHSiuSukuiWiRxt8s2CJHTnmy6ExXr8RhT48dtB3snkZqMDKaXCjTASEW-WLdgfHsBBCMQfJIIBrS6nQ73kJ2ozeBC8AZ7n37Lqr7AXgGGVmoVOg9muP-cMLsuC96hNkho9pAr_KPM9tDSOAIqLs_tkoNRgii0I7urWK97Hjx8NTne0LAaUETJaHG_WZu2N1VNs1WzviJn0kZIqqXq12-kHCCMVYBwlQCuWXVIJdji47gHuzFjSc3BcEpZ7xT75VTOvU0ch5rAV69WDPjUr5TF_i29bZrCekCgwcZE6kdOw5XPfrPd1J22LnOyxGvRGjmxn8yVSY79EZbp2HKbLoFqcZ1v0yZ5kxcHTUKVggmc4oFXS2NBpq1b-e3EV716NEWKWm27chIhtcpp3ou4FFk8H4Eew0HsKp3eZhgbc0DleVV-o6Hr69iecL2IL1LStgZkGt2UPUTd_RvssdeR77xbHpcRUPvo_XpTl29enChfQqYwQZ6u5SnHuMXkQ8x878OJ47BF5mfVikaHt0rO7PU0ed1UDToQs78keFGutQTf0IrOETWLzY7jN3TK0cYBelYNv6LQF37S0y-ADzB76w_Yg49cN2V4DdLj7ph4MzCt82X_jBlB75JlnbsX-3WkIcR1odyY8F4xlGiFGlRMu9cRlfJICc-EsWVgSP_5EyH2w71tj6XIYmArS-1GBVtobsgt4z52DWW1UBHNL1pqrtqpYuS0O-VA8RPsFxOuaKF3EO4adQEhjP8CFicN6og.sPxYB-53SjtndQ7RATObaA.6dd88d3ef1fc0f7be38944b2ce73bcab6c2eeeb6e67e4ff451aada5b71356ce5',
      'priority': 'u=1, i'
    };

    const response = await axios.post(url, data.toString(), { headers });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

readline.question('Enter mobile number (without country code): ', (mobile) => {
  sendMobileCode(mobile).finally(() => readline.close());
});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
