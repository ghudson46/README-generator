const fs = require('fs');

fs.readFile("readme.txt", "utf8", // function to generate markdown for README
function generateMarkdown(err, data) {
  if(err) {
    console.log(err);
  }
  console.log(data);
});

