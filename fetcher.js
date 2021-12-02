const request = require('request');
const fs = require('fs');

const Args = process.argv.slice(2);

request(Args[0], (error, response, body) => {

  if (error) {
    console.log('Error.');
    process.exit();
  };
  if (response.statusCode !== 200) {
    console.log('Unexpected response code received.');
    process.exit();
  };
  fs.writeFile(Args[1], body, (err) => {
    if (err) {
      throw error;
    };
    console.log(`Downloaded and saved ${fs.statSync(Args[1])["size"]} bytes to ${Args[1]}`);
  });

});