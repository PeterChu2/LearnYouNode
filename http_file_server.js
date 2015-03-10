var fs = require('fs');
var http = require('http');
var server = http.createServer(
  function serverCallback (request, response) {
    src = fs.createReadStream(process.argv[3]);
    src.pipe(response);
  }
);
server.listen(process.argv[2]);
