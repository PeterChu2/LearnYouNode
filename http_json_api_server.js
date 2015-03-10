var http = require('http');
var url = require('url');

var server = http.createServer(
  function serverCallback (request, response) {
    var data = url.parse(request.url, true);
    var query = data.query;
    var pathName = data.pathname;
    date = new Date(query.iso);

    var responseJson;
    if(pathName === '/api/parsetime') {
      responseJSON = JSON.stringify({"hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()});
    }
    else if(pathName === '/api/unixtime') {
      responseJSON = JSON.stringify({"unixtime": date.getTime()});
    }

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(responseJSON);
    response.end();
  }
);
server.listen(process.argv[2]);
