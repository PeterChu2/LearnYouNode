var fs = require('fs');
fs.readFile(
  process.argv[2],
  function readFileCallback (err, data) {
    input = data.toString();
    console.log(input.split('\n').length - 1);
  });
