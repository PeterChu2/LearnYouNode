http = require('http');
http.get(process.argv[2],
  function httpCallback (response) {
    response.setEncoding('utf8');
    output = '';
    response.on("data", function (data) {
      output += data;
    });
    response.on("error", function (data) {
      console.error(data);
    })
    response.on("end", function() {
      console.log(output.length);
      console.log(output);
    })
  }
);
