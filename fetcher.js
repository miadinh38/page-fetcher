const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);

const url = args[0];
const localFilePath = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.log("Error downloading the URL: ", error.message);
    process.exit(1);
  }
  
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
  });

});