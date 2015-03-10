http = require('http');
http.get(process.argv[2],
  function httpCallback (response) {
    response.setEncoding('utf8');
    response.on("data", function (data) {
      console.log(data);
    });
    response.on("error", function (data) {
      console.error(data);
    })
  }
);
