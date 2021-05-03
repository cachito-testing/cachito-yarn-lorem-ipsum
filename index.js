const axios = require('axios');

async function main() {
  try {
    const response = await axios.get('https://loripsum.net/api/plaintext');
    console.log(response.data);
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}
